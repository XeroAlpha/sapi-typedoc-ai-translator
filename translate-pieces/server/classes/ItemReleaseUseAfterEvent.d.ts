/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * Contains information related to a chargeable item when the
 * player has finished using the item and released the build
 * action.
 * 
 * 包含玩家完成使用可充能物品并释放构建动作后，与该物品相关的信息。
 */
export class ItemReleaseUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * Returns the item stack that triggered this item event.
     * 
     * 返回触发此物品事件的物品堆。
     */
    readonly itemStack?: ItemStack;
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
     * 返回充能完成其周期前剩余时间的刻数。
     */
    readonly useDuration: number;
}