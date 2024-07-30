/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity can be
 * stacked.
 * 
 * 添加此组件后，表示该实体可以堆叠。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsStackableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_stackable';
}