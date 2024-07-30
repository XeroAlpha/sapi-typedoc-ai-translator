/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * Contains information related to a chargeable item starting
 * to be charged.
 * 
 * 包含与可充电物品开始充电相关的信息。
 */
export class ItemStartUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is starting to be charged.
     * 
     * 正在开始充电的受影响物品堆栈。
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
     * 返回充电完成周期前剩余时间（以刻为单位）。
     */
    readonly useDuration: number;
}