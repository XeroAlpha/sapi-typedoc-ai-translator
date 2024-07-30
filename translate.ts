import { execSync } from 'child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import OpenAI from 'openai';
import { parse as parsePath, join as joinPath, relative as relativePath, sep as pathSep } from 'path';
import { sep as pathSepPosix } from 'path/posix';
import 'dotenv/config';

const thisRoot = __dirname;
const sapiRoot = joinPath(thisRoot, '..', 'sapi-typedoc');
const sapiPieces = './translate-pieces';

function git(args: string) {
    return execSync(`git ${args}`, { cwd: sapiRoot });
}

function listTrackingFiles(branch: string) {
    const files: Record<string, string> = {};
    git(`ls-tree -r --format="%(objectname)\x09%(path)" ${branch}`)
        .toString('utf-8')
        .split('\n')
        .map((e) => e.split('\x09'))
        .forEach(([hash, path]) => {
            files[path] = hash;
        });
    return files;
}

function catBlobContent(hash: string) {
    return git(`cat-file blob ${hash}`);    
}

function listFileRecursive(dir: string): string[] {
	const result: string[] = [];
	for (const file of readdirSync(dir, { withFileTypes: true })) {
        const path = joinPath(dir, file.name);
		if (file.isDirectory()) {
			result.push(...listFileRecursive(path));
		} else {
			result.push(path);
		}
	}
    return result;
}

let isLineDirty = false;
export function setStatus(statusText: string) {
    if (process.stdout.isTTY) {
        process.stdout.cursorTo(0);
        process.stdout.write(statusText.slice(0, process.stdout.columns));
        process.stdout.clearLine(1);
    } else {
        process.stdout.write(`${statusText}  \r`);
    }
    isLineDirty = statusText.length > 0;
}

export function log(text: string) {
    if (isLineDirty) setStatus('');
    process.stdout.write(`${text}\n`);
}

const splitRegExp = /^(\s*(?:\/\* IMPORT \*\/(?:.+)\n)*\s*)([^]*?)(\s*(?:\/\* EXPORT \*\/(?:.+)\n)*\s*)$/;
function splitParts(str: string) {
    const match = splitRegExp.exec(str);
    if (match) {
        return {
            prefix: match[1],
            content: match[2],
            suffix: match[3],
        };
    }
    return {
        prefix: '',
        content: str,
        suffix: ''
    };
}

function listEntries() {
    const mainTracking = listTrackingFiles('main');
    const originalTracking = listTrackingFiles('original');
    const untranslatedFiles = Object.keys(mainTracking)
        .filter((k) => mainTracking[k] === originalTracking[k]);
    const files = listFileRecursive(joinPath(sapiRoot, sapiPieces))
        .filter((path) => !path.endsWith('index.d.ts') && !path.endsWith('package.d.ts'))
        .map((path) => {
            const gitPath = relativePath(sapiRoot, path).split(pathSep).join(pathSepPosix);
            return {
                identifier: parsePath(path).base.replace('.d.ts', ''),
                path,
                gitPath,
                original: untranslatedFiles.includes(gitPath)
            };
        });
    const identifierRegExps = [...new Set(files.map((file) => file.identifier))].map((e) => [e, new RegExp(`\b${e}\b`)] as const);
    const entries = files.map(({ identifier, path, gitPath, original }) => {
        const { prefix, content, suffix } = splitParts(readFileSync(path, 'utf-8'));
        const includeIdentifiers = identifierRegExps.filter(([id, re]) => id !== identifier && content.includes(id));
        return { identifier, gitPath, original, prefix, content, suffix, relevance: includeIdentifiers.length };
    });
    entries.sort((a, b) => a.relevance - b.relevance);
    return entries;
}

const PromptText = readFileSync(joinPath(thisRoot, 'prompt.txt'), 'utf-8');
async function translate(model: string, samples: [string, string][], input: string, onProgress?: (partialResult: string, delta: string) => void) {
    const client = new OpenAI({
        apiKey: process.env.OPENAI_KEY,
        baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
    });
    let original = input;
    let translated = '';
    const usage: OpenAI.CompletionUsage = {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0
    };
    for (;;) {
        const completion = await client.chat.completions.create({
            model,
            stream: true,
            stream_options: {
                include_usage: true
            },
            messages: [
                {
                    role: 'system',
                    content: PromptText
                },
                ...samples.flatMap<OpenAI.ChatCompletionMessageParam>(([orig, translated]) => [
                    {
                        role: 'user',
                        content: orig
                    },
                    {
                        role: 'assistant',
                        content: translated
                    }
                ]),
                {
                    role: 'user',
                    content: `
/**
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an enchantment with the specified identifier.
     *
     * @param enchantmentId
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * @returns
     * If available, returns an {@link EnchantmentType} object that
     * represents the specified enchantment.
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
}
                    `.trim()
                },
                {
                    role: 'assistant',
                    content: `
/**
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 * 
 * 表示世界中可用的 Minecraft 附魔类型。
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an enchantment with the specified identifier.
     * 
     * 获取特定标识符的附魔。
     *
     * @param enchantmentId
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * 
     * 附魔的标识符。例如，“minecraft:flame”。
     * @returns
     * If available, returns an {@link EnchantmentType} object that
     * represents the specified enchantment.
     * 
     * 如果附魔可用，则返回对应附魔的 {@link EnchantmentType} 对象。
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
}
                    `.trim()
                },
                {
                    role: 'user',
                    content: `
/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link
 * @minecraft-server.BoundingBoxUtils} utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 */
export interface BoundingBox {
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * largest corner of the rectangle
     *
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * smallest corner of the rectangle
     *
     */
    min: Vector3;
}
                    `.trim(),
                },
                {
                    role: 'assistant',
                    content: `
/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link
 * @minecraft-server.BoundingBoxUtils} utility functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 * 
 * BoundingBox 是一个表示轴对齐包围盒（AABB）矩形的接口。
 * BoundingBox 假设它是在有效状态下创建的（min <= max），
 * 但不能保证这一点（除非使用相关的 {@link
 * @minecraft-server.BoundingBoxUtils} 实用函数创建）。
 * min/max 坐标表示矩形的对角线上的相对角点。
 * BoundingBox 不是方块的表示——它与任何类型没有关联，
 * 它只是一个数学构造——所以一个从 (0,0,0) 到 (0,0,0) 的
 * 矩形大小为 (0,0,0)（与非常相似的 {@link BlockVolume}
 * 对象不同）。
 */
export interface BoundingBox {
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * largest corner of the rectangle
     * 
     * 表示矩形最大角点的 {@link @minecraft-server.Vector3}
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link @minecraft-server.Vector3} that represents the
     * smallest corner of the rectangle
     * 
     * 表示矩形最小角点的 {@link @minecraft-server.Vector3}
     */
    min: Vector3;
}
                    `.trim()
                },
                {
                    role: 'user',
                    content: original,
                }
            ]
        });
        let stopped = true;
        for await (const chunk of completion) {
            const choice = chunk.choices[0];
            if (choice) {
                translated += choice.delta.content ?? '';
                if (onProgress) onProgress(translated, choice.delta.content ?? '');
                if (choice.finish_reason && choice.finish_reason === 'length') {
                    stopped = false;
                    throw new Error(`Completion is too long`);
                }
            }
            if (chunk.usage) {
                usage.prompt_tokens += chunk.usage.prompt_tokens;
                usage.completion_tokens += chunk.usage.completion_tokens;
                usage.total_tokens += chunk.usage.total_tokens;
            }
        }
        if (stopped) break;
        const lastLf = translated.lastIndexOf('\n');
        translated = lastLf >= 0 ? translated.slice(0, lastLf + 1) : translated;
    }
    translated = translated.replace(/```\w+\n([^]+)\n```/, '$1');
    return { content: translated, usage };
} 

function countLines(str: string) {
    if (str === '') return 0;
    let lines = 1;
    let start = 0;
    for (;;) {
        const index = str.indexOf('\n', start);
        if (index >= 0) {
            start = index + 1;
            lines += 1;
        } else {
            break;
        }
    }
    return lines;
}

const Models = [
    {
        name: 'qwen-max',
        inputPrice: 0.04,
        outputPrice: 0.12,
        maxCharacters: -1  // so expensive, we do not use it
    },
    {
        name: 'qwen-plus',
        inputPrice: 0.004,
        outputPrice: 0.012,
        maxCharacters: 32000
    }
];

async function main() {
    const entries = listEntries().filter((e) => e.original);
    for (const { identifier, gitPath, prefix, content, suffix } of entries) {
        const dest = joinPath(thisRoot, gitPath);
        if (existsSync(dest)) continue;
        const selectedModel = Models.find(({ maxCharacters }) => content.length <= maxCharacters);
        if (!selectedModel) {
            log(`Skipped ${gitPath}: too long (${content.length} characters)`);
            continue;
        }
        const contentLines = countLines(content);
        const translated = await translate(selectedModel.name, [], content, (partial, delta) => {
            const statusText = `${gitPath} ${contentLines} ln (${content.length} ch) -> ${countLines(partial)} ln (${partial.length} ch) `;
            setStatus(`${statusText}${delta.replace(/\n/g, ' ')}`);
        });
        const price = translated.usage!.prompt_tokens / 1000 * selectedModel.inputPrice + translated.usage!.completion_tokens / 1000 * selectedModel.outputPrice;
        log(`${gitPath}: ${translated.usage!.prompt_tokens} input / ${translated.usage!.completion_tokens} output tokens (total ${translated.usage!.total_tokens} tokens) ￥${price.toFixed(5)}`);
        mkdirSync(joinPath(dest, '..'), { recursive: true });
        writeFileSync(dest, `${prefix}${translated.content}${suffix}`);
    }
}

main();
