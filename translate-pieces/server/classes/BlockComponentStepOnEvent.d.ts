/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an entity stepping onto a
 * specific block.
 * 
 * 包含关于实体踩踏到特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that stepped on the block.
     * 
     * 踩踏到方块的实体。
     */
    readonly entity?: Entity;
}