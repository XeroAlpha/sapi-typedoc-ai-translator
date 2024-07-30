/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * @rc
 * Defines the general movement speed of this entity.
 * 
 * 定义此实体的一般移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement';
}