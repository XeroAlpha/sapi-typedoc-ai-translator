/* IMPORT */ import { BlockEvent, BlockPermutation, ItemStack, Player } from '../index';

/**
 * Contains information regarding an event after a player
 * breaks a block.
 * 
 * 包含玩家破坏方块后事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerBreakBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was broken.
     * 
     * 返回此方块破坏前的排列信息。
     */
    readonly brokenBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The item stack that was used to break the block after the
     * block was broken, or undefined if empty hand.
     * 
     * 方块被破坏后用于破坏方块的物品堆栈，或者如果为空手则为undefined。
     */
    readonly itemStackAfterBreak?: ItemStack;
    /**
     * @remarks
     * The item stack that was used to break the block before the
     * block was broken, or undefined if empty hand.
     * 
     * 方块被破坏前用于破坏方块的物品堆栈，或者如果为空手则为undefined。
     */
    readonly itemStackBeforeBreak?: ItemStack;
    /**
     * @remarks
     * Player that broke the block for this event.
     * 
     * 造成此事件中破坏方块的玩家。
     */
    readonly player: Player;
}