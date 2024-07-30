/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Base class for a family of entity movement events.
 * 
 * 实体移动事件家族的基础类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBaseMovementComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum turn rate for this movement modality of the mob.
     * 
     * 此实体移动模式的最大转向速率。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly maxTurn: number;
}