/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * Allows this entity to generate paths by flying around the
 * air like the regular Ghast.
 * 
 * 允许此实体像常规 Ghast 一样在空中飞行并生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationFloatComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.float';
}