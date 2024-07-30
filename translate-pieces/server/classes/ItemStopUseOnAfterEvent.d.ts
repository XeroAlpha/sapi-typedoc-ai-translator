/* IMPORT */ import { Block, ItemStack, Player } from '../index';

/**
 * Contains information related to an item that has stopped
 * being used on a block. This event fires when a player
 * successfully uses an item or places a block by pressing the
 * Use Item / Place Block button. If multiple blocks are
 * placed, this event will only occur once at the beginning of
 * the block placement. Note: This event cannot be used with
 * Hoe or Axe items.
 * 
 * 包含物品停止在方块上使用相关信息的事件。当玩家通过按下使用物品/放置方块按钮成功使用物品或放置方块时触发此事件。如果放置了多个方块，此事件仅在方块放置开始时发生一次。注意：此事件无法与锄头或斧头物品一起使用。
 */
export class ItemStopUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     * 
     * 被使用的方块。
     */
    readonly block: Block;
    /**
     * @remarks
     * The impacted item stack that is being used on a block.
     * 
     * 在方块上使用的受影响的物品堆栈。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     * 
     * 返回触发此物品事件的源实体。
     */
    readonly source: Player;
}