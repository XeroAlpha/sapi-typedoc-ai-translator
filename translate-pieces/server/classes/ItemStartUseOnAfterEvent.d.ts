/* IMPORT */ import { Block, Direction, ItemStack, Player } from '../index';

/**
 * Contains information related to an item being used on a
 * block. This event fires when a player presses the the Use
 * Item / Place Block button to successfully use an item or
 * place a block. Fires for the first block that is interacted
 * with when performing a build action. Note: This event cannot
 * be used with Hoe or Axe items.
 * 
 * 包含关于物品在方块上使用的信息。当玩家按下使用物品/放置方块按钮成功地使用物品或放置方块时触发此事件。在执行构建动作时，此事件会为第一个交互的方块触发。注意：此事件无法与锄头或斧头物品一起使用。
 */
export class ItemStartUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * The block that the item is used on.
     * 
     * 被使用的物品所作用的方块。
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that an item is being used on.
     * 
     * 正在被使用的物品所在的方块面。
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * The impacted item stack that is starting to be used. Can be
     * undefined in some gameplay scenarios like pushing a button
     * with an empty hand.
     * 
     * 开始被使用的受影响的物品堆。在某些游戏场景下可能未定义，例如空手按下按钮。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Returns the source entity that triggered this item event.
     * 
     * 返回触发此物品事件的来源实体。
     */
    readonly source: Player;
}