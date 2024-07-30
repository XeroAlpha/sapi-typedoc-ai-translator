/* IMPORT */ import { BlockFilter } from '../index';

/**
 * Contains additional options for configuring a block raycast
 * query.
 * 
 * 包含用于配置方块射线查询的附加选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface BlockRaycastOptions extends BlockFilter {
    /**
     * @remarks
     * If true, liquid blocks will be considered as blocks that
     * 'stop' the raycast.
     * 
     * 如果为 true，液体方块将被视为“阻止”射线的方块。
     */
    includeLiquidBlocks?: boolean;
    /**
     * @remarks
     * If true, passable blocks like vines and flowers will be
     * considered as blocks that 'stop' the raycast.
     * 
     * 如果为 true，像藤蔓和花朵这样的可穿越方块将被视为“阻止”射线的方块。
     */
    includePassableBlocks?: boolean;
    /**
     * @remarks
     * Maximum distance, in blocks, to process the raycast.
     * 
     * 射线查询的最大距离（以方块为单位）。
     */
    maxDistance?: number;
}