/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity this
 * currently on fire.
 * 
 * 添加后，此组件表示此实体当前处于着火状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIgnitedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_ignited';
}