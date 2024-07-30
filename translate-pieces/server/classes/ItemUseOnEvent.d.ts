/* IMPORT */ import { Block, Direction, ItemStack, Vector3 } from '../index';

/**
 * @rc
 * Contains information regarding the use of an item on a
 * block.
 * 
 * 包含关于物品在方块上使用的相关信息。
 */
export class ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The block impacted by this event.
     *
     * 受此事件影响的方块。
     */
    readonly block: Block;
    /**
     * @remarks
     * The face of the block that the item was used on.
     *
     * 物品被使用的方块面。
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Location relative to the bottom north-west corner of the
     * block that the item was used on.
     *
     * 相对于物品被使用的方块底西北角的位置。
     */
    readonly faceLocation: Vector3;
    /**
     * @remarks
     * The item stack used on the block.
     *
     * 在方块上使用的物品堆栈。
     */
    readonly itemStack: ItemStack;
}