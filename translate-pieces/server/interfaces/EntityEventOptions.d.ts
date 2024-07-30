/* IMPORT */ import { Entity } from '../index';

/**
 * Contains optional parameters for registering an entity
 * event.
 * 
 * 包含注册实体事件的可选参数。
 */
export interface EntityEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     * 
     * 如果设置了此值，此事件仅对与集合内实体匹配的实体触发。
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     * 
     * 如果设置了此值，只有受影响实体的类型与该参数匹配时，此事件才会触发。
     */
    entityTypes?: string[];
}