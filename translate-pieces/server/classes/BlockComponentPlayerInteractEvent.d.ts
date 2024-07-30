/* IMPORT */ import { BlockEvent, Direction, Player, Vector3 } from '../index';

/**
 * @rc
 * Contains information regarding a specific block being
 * interacted with.
 * 
 * 包含关于玩家与特定方块交互的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerInteractEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The block face that was interacted with.
     * 
     * 被交互的方块面。
     */
    readonly face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block that the player interacted with.
     * 
     * 相对于玩家交互的方块底西北角的位置。
     */
    readonly faceLocation?: Vector3;
    /**
     * @remarks
     * The player that interacted with this block.
     * 
     * 与该方块交互的玩家。
     */
    readonly player?: Player;
}