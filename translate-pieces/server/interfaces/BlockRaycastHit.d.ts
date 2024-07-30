/* IMPORT */ import { Block, Direction, Vector3 } from '../index';

/**
 * Contains information for block raycast hit results.
 * 
 * 包含了射线检测到的方块命中结果信息。
 */
export interface BlockRaycastHit {
    /**
     * @remarks
     * Block that was hit.
     * 
     * 被命中的方块。
     */
    block: Block;
    /**
     * @remarks
     * Face of the block that was hit.
     * 
     * 方块被命中的面。
     */
    face: Direction;
    /**
     * @remarks
     * Hit location relative to the bottom north-west corner of the
     * block.
     * 
     * 相对于方块底西北角的命中位置。
     */
    faceLocation: Vector3;
}