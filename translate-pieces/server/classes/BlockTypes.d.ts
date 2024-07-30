/* IMPORT */ import { BlockType } from '../index';

/**
 * Contains a catalog of Minecraft Block Types that are
 * available in this world.
 * 
 * 包含了本世界中可用的所有 Minecraft 方块类型的目录。
 */
export class BlockTypes {
    private constructor();
    /**
     * @remarks
     * Returns a BlockType object for the specified identifier.
     * 
     * 根据指定的标识符返回一个 BlockType 对象。
     *
     * @param typeName
     * Identifier of the block type. Should follow a namespace:id
     * pattern, such as minecraft:dirt.
     * 
     * 方块类型的标识符。应遵循命名空间:id 模式，如 minecraft:dirt。
     * @returns
     * BlockType object, or undefined if the block type is not
     * available within this world.
     * 
     * 如果此世界中有此方块类型，则返回 BlockType 对象，否则返回 undefined。
     */
    static get(typeName: string): BlockType | undefined;
    /**
     * @remarks
     * Returns a collection of all available block types.
     * 
     * 返回所有可用方块类型的一个集合。
     */
    static getAll(): BlockType[];
}