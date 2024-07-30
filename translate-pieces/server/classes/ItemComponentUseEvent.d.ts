/* IMPORT */ import { ItemStack, Player } from '../index';

/**
 * @rc
 * Contains information regarding the use of an item.
 * 
 * 包含有关物品使用的相关信息。
 */
export class ItemComponentUseEvent {
    private constructor();
    /**
     * @remarks
     * The item stack when the item was used.
     * 
     * 使用物品时的物品堆栈。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The player who used the item.
     * 
     * 使用物品的玩家。
     */
    readonly source: Player;
}