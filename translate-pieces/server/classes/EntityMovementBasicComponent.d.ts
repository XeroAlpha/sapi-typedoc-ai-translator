/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * This component accents the movement of an entity.
 * 
 * 此组件强调实体的移动。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementBasicComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.basic';
}