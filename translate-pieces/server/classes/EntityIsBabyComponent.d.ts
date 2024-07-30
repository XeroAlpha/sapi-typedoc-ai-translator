/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity is a
 * baby.
 * 
 * 添加此组件后，表示该实体为幼年形态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsBabyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_baby';
}