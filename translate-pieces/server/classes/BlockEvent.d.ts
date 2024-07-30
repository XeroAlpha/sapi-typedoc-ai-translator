/* IMPORT */ import { Block, Dimension } from '../index';

/**
 * Contains information regarding an event that impacts a
 * specific block.
 * 
 * 包含有关影响特定方块事件的信息。
 */
export class BlockEvent {
    private constructor();
    /**
     * @remarks
     * Block impacted by this event.
     * 
     * 受此事件影响的方块。
     */
    readonly block: Block;
    /**
     * @remarks
     * Dimension that contains the block that is the subject of
     * this event.
     * 
     * 包含此事件所涉及方块的维度。
     */
    readonly dimension: Dimension;
}