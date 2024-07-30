/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * When added, this move control allows a mob to fly, swim,
 * climb, etc.
 * 
 * 添加后，此移动控制允许生物飞行、游泳、攀爬等。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGenericComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.generic';
}