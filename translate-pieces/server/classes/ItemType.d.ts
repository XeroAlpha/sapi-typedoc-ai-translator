/**
 * Represents the type of an item - for example, Wool.
 * 
 * 表示物品的类型，例如羊毛（Wool）。
 */
export class ItemType {
    private constructor();
    /**
     * @remarks
     * Returns the identifier of the item type - for example,
     * 'minecraft:apple'.
     * 
     * 返回物品类型的标识符，例如‘minecraft:apple’。
     */
    readonly id: string;
}