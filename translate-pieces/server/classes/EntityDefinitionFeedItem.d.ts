/**
 * @rc
 * As part of the Ageable component, represents a set of items
 * that can be fed to an entity and the rate at which that
 * causes them to grow.
 * 
 * 作为 Ageable 组件的一部分，表示可以喂给实体的一组物品以及这些物品导致实体成长的速度。
 */
export class EntityDefinitionFeedItem {
    private constructor();
    /**
     * @remarks
     * The amount by which an entity's age will increase when fed
     * this item. Values usually range between 0 and 1.
     * 
     * 当喂食此物品时，实体年龄增加的数量。数值通常在 0 和 1 之间。
     */
    readonly growth: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     * 
     * 可以喂食的物品类型的标识符。如果没有指定命名空间，默认为 'minecraft:'。示例值包括 'wheat' 或 'golden_apple'。
     */
    readonly item: string;
}