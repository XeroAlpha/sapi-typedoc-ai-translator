/* IMPORT */ import { EntityFilter } from '../index';

/**
 * Contains additional options for an entity raycast operation.
 * 
 * 包含实体射线追踪操作的额外选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityRaycastOptions extends EntityFilter {
    /**
     * @rc
     * @remarks
     * If true, blocks will not be considered as blocks that 'stop'
     * the raycast.
     * 
     * 如果为真，不会将方块视为可以“阻止”射线追踪的方块。
     */
    ignoreBlockCollision?: boolean;
    /**
     * @rc
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     * 
     * 如果为真，会将液体方块视为可以“阻止”射线追踪的方块。
     */
    includeLiquidBlocks?: boolean;
    /**
     * @rc
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     * 
     * 如果为真，像藤蔓和花朵这样的可穿越方块会被视为可以“阻止”射线追踪的方块。
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     * 
     * 射线追踪的最大距离，以方块为单位。
     */
    maxDistance?: number;
}