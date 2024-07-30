/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * Contains information related to an item being used on a
 * block. This event fires when an item used by a player
 * successfully triggers an entity interaction.
 * 
 * 包含与玩家使用物品触发实体交互相关的信息。
 */
export class ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * The impacted item stack that is being used.
     * 
     * 正在使用的受影响的物品堆栈。
     */
    itemStack: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     * 
     * 返回触发此物品事件的源实体。
     */
    readonly source: Player;
}