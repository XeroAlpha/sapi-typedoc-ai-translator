/* IMPORT */ import { BlockEvent, BlockPermutation, Direction, Player, Vector3 } from '../index';

/**
 * @beta
 * Contains information regarding an event before a player
 * places a block.
 * 
 * 包含玩家放置方块前事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockBeforeEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the block place event.
     * 
     * 若设置为 true，会取消放置方块事件。
     */
    cancel: boolean;
    /**
     * @remarks
     * The face of the block that the new block is being placed on.
     * 
     * 新方块被放置在其上的方块面。
     */
    readonly face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the new block is being placed onto.
     * 
     * 相对于新方块被放置其上的方块底部西北角的位置。
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The block permutation that is being placed.
     * 
     * 正在放置的方块排列。
     */
    readonly permutationBeingPlaced: BlockPermutation;
    /**
     * @remarks
     * Player that is placing the block for this event.
     * 
     * 触发此事件时正在放置方块的玩家。
     */
    readonly player: Player;
}