/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * When added, this move control causes the mob to hop as it
 * moves.
 * 
 * 添加后，此移动控制会使生物在移动时跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSkipComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.skip';
}