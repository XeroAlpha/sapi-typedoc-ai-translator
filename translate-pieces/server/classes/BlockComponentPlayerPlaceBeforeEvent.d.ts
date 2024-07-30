/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player } from '../index';

/**
 * @rc
 * Contains information regarding an event before a player
 * places a block.
 * 
 * 包含玩家放置方块前事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerPlaceBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block place event.
     * 
     * 如果设置为 true，则取消放置方块事件。
     */
    cancel: boolean;
    /**
     * @remarks
     * The block face that was placed onto.
     * 
     * 被放置上面的方块面。
     */
    readonly face: Direction;
    /**
     * @remarks
     * The block permutation that will be placed if the event is
     * not cancelled. If set to a different block permutation, that
     * permutation will be placed instead.
     * 
     * 如果事件未被取消，则放置的方块排列。如果设置为不同的方块排列，
     * 将放置该排列。
     */
    permutationToPlace: BlockPermutation;
    /**
     * @remarks
     * The player that is placing this block.
     * 
     * 正在放置此方块的玩家。
     */
    readonly player?: Player;
}