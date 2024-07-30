import { execSync } from 'child_process';
import { cpSync, existsSync, readdirSync, readFileSync } from 'fs';
import micromatch from 'micromatch';
import { join as joinPath, sep as pathSep, relative as relativePath } from 'path';
import { sep as pathSepPosix } from 'path/posix';

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

function main(pathPatterns: string[]) {
    const mainTracking = listTrackingFiles('main');
    const originalTracking = listTrackingFiles('original');
    const untranslatedFiles = Object.keys(mainTracking)
        .filter((k) => mainTracking[k] === originalTracking[k]);
    const thisRootPieces = joinPath(thisRoot, sapiPieces);
    const files = listFileRecursive(thisRootPieces)
        .map((p) => relativePath(thisRootPieces, p).split(pathSep).join(pathSepPosix));
    for (const file of files) {
        if (pathPatterns.length > 0 && !micromatch.isMatch(file, pathPatterns, { contains: true })) continue;
        if (!untranslatedFiles.includes(`translate-pieces/${file}`)) continue;
        const from = joinPath(sapiRoot, sapiPieces, file);
        const to = joinPath(thisRootPieces, file);
        if (existsSync(from) && existsSync(to)) {
            if (!readFileSync(from).equals(readFileSync(to))) {
                console.log(`diff ${file}`);
                execSync(`code --wait --diff "${from}" "${to}"`);
                cpSync(to, from);
            }
        } else {
            console.log(`skip ${file}`);
        }
    }
}

main(process.argv.slice(2));