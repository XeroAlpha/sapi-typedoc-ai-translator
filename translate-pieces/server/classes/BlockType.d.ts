/**
 * The type (or template) of a block. Does not contain
 * permutation data (state) other than the type of block it
 * represents. This type was introduced as of version
 * 1.17.10.21.
 * 
 * 表示方块的类型（或模板）。除了它所代表的方块类型之外，不包含排列数据（状态）。
 * 此类型自版本1.17.10.21起引入。
 */
export class BlockType {
    private constructor();
    /**
     * @beta
     * @remarks
     * Represents whether this type of block can be waterlogged.
     * 
     * 表示此类型的方块是否可以被水淹没。
     *
     */
    readonly canBeWaterlogged: boolean;
    /**
     * @remarks
     * Block type name - for example, `minecraft:acacia_stairs`.
     * 
     * 方块类型名称 - 例如，`minecraft:acacia_stairs`。
     *
     */
    readonly id: string;
}