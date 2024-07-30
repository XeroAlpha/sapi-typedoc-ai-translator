/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * Contains information regarding an event before a player
 * interacts with a block.
 * 
 * 包含玩家与方块交互前事件的相关信息。
 */
export class PlayerInteractWithBlockBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The block that will be interacted with.
     * 
     * 即将被交互的方块。
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that is being interacted with.
     * 
     * 正在交互的方块面。
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * If set to true the interaction will be cancelled.
     * 
     * 如果设置为 true，交互将被取消。
     */
    cancel: boolean;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * 
     * 相对于方块左下西北角的位置，物品放置于此位置。
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     * 
     * 在交互中使用的物品堆叠，或者如果是空手则为 undefined。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     * 
     * 该事件的来源玩家。
     */
    readonly player: Player;
}