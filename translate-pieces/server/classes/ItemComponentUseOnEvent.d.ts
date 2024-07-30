/* IMPORT */ import { BlockPermutation, Entity, ItemUseOnEvent } from '../index';

/**
 * @rc
 * Contains information regarding the use of an item on a block
 * via a component.
 * 
 * 包含通过组件在方块上使用物品的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemComponentUseOnEvent extends ItemUseOnEvent {
    private constructor();
    /**
     * @remarks
     * The entity that used the item on the block.
     *
     * 使用物品作用于方块的实体。
     */
    readonly source: Entity;
    /**
     * @remarks
     * The block permutation that the item was used on.
     *
     * 物品被使用的方块排列。
     */
    readonly usedOnBlockPermutation: BlockPermutation;
}