/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * Allows this entity to generate paths by walking, swimming,
 * flying and/or climbing around and jumping up and down a
 * block.
 * 
 * 允许此实体通过行走、游泳、飞行和/或攀爬，并在方块上下跳跃来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationGenericComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.generic';
}