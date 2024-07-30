/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity is
 * currently stunned.
 * 
 * 当添加时，此组件表示该实体当前处于眩晕状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStunnedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stunned';
}