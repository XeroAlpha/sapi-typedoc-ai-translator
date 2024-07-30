/* IMPORT */ import { Entity, ItemStack, Player } from '../index';

/**
 * Contains information regarding an event before a player
 * interacts with an entity.
 * 
 * 包含玩家与实体交互之前事件的相关信息。
 */
export class PlayerInteractWithEntityBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     * 
     * 如果设置为 `true`，则会取消交互。
     */
    cancel: boolean;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     * 
     * 用于交互的物品堆栈，如果是空手则为 `undefined`。
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
     * 将要与之交互的实体。
     */
    readonly target: Entity;
}