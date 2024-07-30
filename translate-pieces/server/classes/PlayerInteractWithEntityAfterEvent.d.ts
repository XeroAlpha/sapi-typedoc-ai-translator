/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * Contains information regarding an event after a player
 * interacts with an entity.
 * 
 * 包含玩家与实体交互后事件的相关信息。
 */
export class PlayerInteractWithEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     * 
     * 在交互中使用的物品堆栈，或如果为空手则为 undefined。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     * 
     * 此事件的源玩家。
     */
    readonly player: Player;
    /**
     * @remarks
     * The entity that will be interacted with.
     * 
     * 将被交互的实体。
     */
    readonly target: Entity;
}