/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * Contains information related to a chargeable item has
 * finished an items use cycle, or when the player has released
 * the use action with the item.
 * 
 * 包含与可充电物品完成使用周期或玩家释放物品使用动作相关的信息。
 */
export class ItemStopUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is stopping being charged.
     * ItemStopUseAfterEvent can be called when teleporting to a
     * different dimension and this can be undefined.
     * 
     * 正在停止充电的受影响物品堆叠。在传送到不同维度时可能会调用
     * ItemStopUseAfterEvent，此时此属性可能未定义。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     * 
     * 返回触发此物品事件的源实体。
     */
    readonly source: Player;
    /**
     * @remarks
     * Returns the time, in ticks, for the remaining duration left
     * before the charge completes its cycle.
     * 
     * 返回充电完成其周期前剩余持续时间的刻数。
     */
    readonly useDuration: number;
}