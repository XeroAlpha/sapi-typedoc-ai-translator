/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @rc
 * Contains information related to a chargeable item completing
 * being charged.
 * 
 * 包含有关可充电物品完成充电的相关信息。
 */
export class ItemCompleteUseEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that has completed charging.
     * 
     * 返回已完成充电的物品堆栈。
     */
    readonly itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     * 
     * 返回触发此物品事件的源实体。
     */
    readonly source: Player;
}