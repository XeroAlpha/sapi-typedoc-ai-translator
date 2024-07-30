/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an entity stepping off a
 * specific block.
 * 
 * 包含关于实体离开特定方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentStepOffEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that stepped off the block.
     * 
     * 离开方块的实体。
     */
    readonly entity?: Entity;
}