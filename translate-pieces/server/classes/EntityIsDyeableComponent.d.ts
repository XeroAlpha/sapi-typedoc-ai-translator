/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that dyes can be used
 * on this entity to change its color.
 * 
 * 添加此组件后，表示可以使用染料改变该实体的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsDyeableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_dyeable';
}