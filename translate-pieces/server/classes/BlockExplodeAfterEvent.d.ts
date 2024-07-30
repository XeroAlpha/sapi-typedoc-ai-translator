/* IMPORT */ import { BlockEvent, BlockPermutation, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an explosion that has
 * occurred for a specific block.
 * 
 * 包含有关特定方块发生的爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockExplodeAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Description of the block that has exploded.
     *
     * 已爆炸方块的描述。
     */
    readonly explodedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * Optional source of the explosion.
     *
     * 爆炸的可选来源。
     */
    readonly source?: Entity;
}