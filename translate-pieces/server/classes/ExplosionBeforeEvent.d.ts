/* IMPORT */ import { Block, ExplosionAfterEvent } from '../index';

/**
 * Contains information regarding an explosion that has
 * happened.
 * 
 * 包含有关已发生的爆炸的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ExplosionBeforeEvent extends ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the explosion event.
     * 
     * 如果设置为 true，则取消爆炸事件。
     */
    cancel: boolean;
    /**
     * @remarks
     * Updates a collection of blocks impacted by this explosion
     * event.
     * 
     * 更新受此爆炸事件影响的一组方块。
     *
     * @param blocks
     * New list of blocks that are impacted by this explosion.
     * 
     * 受此爆炸影响的新方块列表。
     */
    setImpactedBlocks(blocks: Block[]): void;
}