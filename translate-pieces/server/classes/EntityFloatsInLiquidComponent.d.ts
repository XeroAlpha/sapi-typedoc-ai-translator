/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity can
 * float in liquid blocks.
 * 
 * 添加后，此组件表明实体可以在液体方块中漂浮。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFloatsInLiquidComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:floats_in_liquid';
}