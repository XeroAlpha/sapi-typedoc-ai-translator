/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity wants
 * to become a jockey.
 * 
 * 添加此组件后，表示该实体希望成为骑手。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityWantsJockeyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:wants_jockey';
}