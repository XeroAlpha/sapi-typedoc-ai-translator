/* IMPORT */ import { Block, Direction, Vector3 } from '../index';

/**
 * Contains more information for events where a block is hit.
 * 
 * 包含关于方块被击打事件的更多信息。
 */
export interface BlockHitInformation {
    /**
     * @remarks
     * Block that was hit.
     * 
     * 被击打的方块。
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     * 
     * 被击打的方块面。
     */
    face: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block.
     * 
     * 相对于方块西北下角的位置。
     */
    faceLocation: Vector3;
}