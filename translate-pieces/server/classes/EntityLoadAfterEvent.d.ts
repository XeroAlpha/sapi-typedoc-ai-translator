/* IMPORT */ import { Entity } from '../index';

/**
 * Contains data related to an entity loaded within the world.
 * This could happen when an unloaded chunk is reloaded, or
 * when an entity changes dimensions.
 * 
 * 包含与世界中加载的实体相关的信息。这可能发生在未加载的区块重新加载时，
 * 或者实体改变维度时。
 */
export class EntityLoadAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that was loaded.
     * 
     * 被加载的实体。
     *
     * This property can't be edited in read-only mode.
     *
     * 此属性在只读模式下无法编辑。
     */
    entity: Entity;
}