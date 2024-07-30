/* IMPORT */ import { EntityNavigationComponent } from '../index';

/**
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 * 
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 中的蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationClimbComponent extends EntityNavigationComponent {
    private constructor();
    static readonly componentId = 'minecraft:navigation.climb';
}