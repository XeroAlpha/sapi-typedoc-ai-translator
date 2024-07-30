/* IMPORT */ import { Entity } from '../index';

/**
 * Contains information related to an entity when its health
 * changes. Warning: don't change the health of an entity in
 * this event, or it will cause an infinite loop!
 * 
 * 包含实体健康值变化时的相关信息。警告：不要在这个事件中改变实体的健康值，
 * 否则会导致无限循环！
 */
export class EntityHealthChangedAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity whose health changed.
     * 
     * 健康值发生改变的实体。
     */
    readonly entity: Entity;
    /**
     * @remarks
     * New health value of the entity.
     * 
     * 实体的新健康值。
     */
    readonly newValue: number;
    /**
     * @remarks
     * Old health value of the entity.
     * 
     * 实体的旧健康值。
     */
    readonly oldValue: number;
}