/* IMPORT */ import { Entity } from '../index';

/**
 * Specifies additional filters that are used in registering a
 * data driven trigger event for entities.
 * 
 * 指定用于注册实体的数据驱动触发事件的附加过滤器。
 */
export interface EntityDataDrivenTriggerEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire for entities
     * that match the entities within this collection.
     * 
     * 如果设置了此值，此事件仅在匹配此集合内的实体时触发。
     */
    entities?: Entity[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted entities' type matches this parameter.
     * 
     * 如果设置了此值，此事件仅在受影响实体的类型与该参数匹配时触发。
     */
    entityTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted triggered event matches one of the events listed in
     * this parameter.
     * 
     * 如果设置了此值，此事件仅在受影响的触发事件与该参数中列出的事件之一匹配时触发。
     */
    eventTypes?: string[];
}