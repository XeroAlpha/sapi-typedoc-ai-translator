/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * When added, this move control causes the mob to fly.
 * 
 * 添加后，此移动控制使生物能够飞行。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementFlyComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.fly';
}