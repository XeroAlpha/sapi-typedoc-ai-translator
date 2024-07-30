/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * Contains information related to a chargeable item completing
 * being charged.
 * 
 * 包含与可充电物品完成充电相关的信息。
 */
export class ItemCompleteUseAfterEvent {
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
     * 返回触发此物品事件的来源实体。
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     * 
     * 返回充电完成其周期前剩余时间的滴答数。
     */
    readonly useDuration: number;
}