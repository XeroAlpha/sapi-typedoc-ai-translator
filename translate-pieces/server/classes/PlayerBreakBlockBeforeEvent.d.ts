/* IMPORT */ import { BlockEvent, ItemStack, Player } from '../index';

/**
 * Contains information regarding an event before a player
 * breaks a block.
 * 
 * 包含玩家破坏方块前事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block break event.
     * 
     * 若设置为 true，则取消破坏方块事件。
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used to break the block, or
     * undefined if empty hand.
     * 
     * 用于破坏方块的物品堆栈，或当为空手时为 undefined。
     */
    itemStack?: ItemStack;
    /**
     * @remarks
     * Player breaking the block for this event.
     * 
     * 此事件中破坏方块的玩家。
     */
    readonly player: Player;
}