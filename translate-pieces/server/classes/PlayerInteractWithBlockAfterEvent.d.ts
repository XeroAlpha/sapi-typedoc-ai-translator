/* IMPORT */ import { Block, Direction, ItemStack, Player, Vector3 } from '../index';

/**
 * Contains information regarding an event after a player
 * interacts with a block.
 * 
 * 包含玩家与方块交互后事件的相关信息。
 */
export class PlayerInteractWithBlockAfterEvent {
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
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * 
     * 放置物品相对于方块西南底角的位置。
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack that is being used in the interaction, or
     * undefined if empty hand.
     * 
     * 正在交互中使用的物品堆叠，或者如果是空手则为 undefined。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * Source Player for this event.
     * 
     * 本事件的来源玩家。
     */
    readonly player: Player;
}