/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * @rc
 * Contains information related to a food item being consumed.
 * 
 * 包含有关正在被消耗的食物项目的相关信息。
 */
export class ItemComponentConsumeEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that was consumed.
     * 
     * 被消耗的物品堆栈。
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * The source entity that consumed the item.
     * 
     * 消耗该物品的来源实体。
     */
    readonly source: Entity;
}