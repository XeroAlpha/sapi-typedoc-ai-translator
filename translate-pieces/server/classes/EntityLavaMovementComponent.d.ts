/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * @rc
 * Defines the base movement speed in lava of this entity.
 * 
 * 定义了此实体在岩浆中的基础移动速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLavaMovementComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:lava_movement';
}