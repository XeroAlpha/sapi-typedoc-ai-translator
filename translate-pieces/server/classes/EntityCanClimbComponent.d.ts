/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that the entity can
 * climb up ladders.
 * 
 * 添加此组件后，表示实体能够攀爬梯子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanClimbComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_climb';
}