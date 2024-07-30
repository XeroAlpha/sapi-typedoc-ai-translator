/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity is
 * currently saddled.
 * 
 * 添加此组件后，表示该实体当前已被装备鞍具。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsSaddledComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_saddled';
}