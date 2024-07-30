/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that the entity can
 * fly, and the pathfinder won't be restricted to paths where a
 * solid block is required underneath it.
 * 
 * 当添加此组件时，表示实体可以飞行，且寻路器不会局限于实体下方需要有实心方块的路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanFlyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_fly';
}