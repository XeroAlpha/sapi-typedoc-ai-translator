/* IMPORT */ import { Entity } from '../index';

/**
 * Data for an event that happens when an entity is being
 * removed from the world (for example, the entity is unloaded
 * because it is not close to players.)
 * 
 * 当实体从世界移除时触发事件的数据（例如，实体因为离玩家较远而被卸载）。
 */
export class EntityRemoveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * Reference to an entity that is being removed.
     * 
     * 即将被移除的实体的引用。
     */
    readonly removedEntity: Entity;
}