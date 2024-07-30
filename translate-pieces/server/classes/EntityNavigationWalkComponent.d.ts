/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * Allows this entity to generate paths by walking around and
 * jumping up and down a block like regular mobs.
 * 
 * 允许此实体像常规生物一样通过四处走动和在方块上跳跃来生成路径。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationWalkComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.walk';
}