/* IMPORT */ import { Block, Dimension, Entity } from '../index';

/**
 * Contains information regarding an explosion that has
 * happened.
 * 
 * 包含有关已发生的爆炸的信息。
 */
export class ExplosionAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where the explosion has occurred.
     * 
     * 发生爆炸的维度。
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Optional source of the explosion.
     * 
     * 可选的爆炸源头。
     */
    readonly source?: Entity;
    /**
     * @remarks
     * A collection of blocks impacted by this explosion event.
     * 
     * 受此爆炸事件影响的方块集合。
     */
    getImpactedBlocks(): Block[];
}