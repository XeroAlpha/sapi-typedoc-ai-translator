/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that the entity can
 * power jump like the horse does within Minecraft.
 * 
 * 添加此组件后，表示实体可以像游戏内的马一样进行强力跳跃。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityCanPowerJumpComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:can_power_jump';
}