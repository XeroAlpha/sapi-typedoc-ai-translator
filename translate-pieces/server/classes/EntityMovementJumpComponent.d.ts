/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * Move control that causes the mob to jump as it moves with a
 * specified delay between jumps.
 * 
 * 控制实体移动并跳跃的组件，其中跳跃之间有指定的延迟。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementJumpComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.jump';
}