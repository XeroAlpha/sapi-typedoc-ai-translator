/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * When added, this move control causes the mob to hover.
 * 
 * 添加后，此移动控制会使生物体悬浮。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementHoverComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.hover';
}