/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * @rc
 * Contains information regarding an entity falling onto a
 * specific block.
 * 
 * 包含关于实体落在特定方块上的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentEntityFallOnEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The entity that fell onto the block.
     *
     * 落在这个方块上的实体。
     */
    readonly entity?: Entity;
    /**
     * @remarks
     * The distance that the entity fell onto this block with.
     *
     * 实体落在此方块上的距离。
     */
    readonly fallDistance: number;
}