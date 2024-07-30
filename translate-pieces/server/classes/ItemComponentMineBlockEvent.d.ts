/* IMPORT */ import { Block, BlockPermutation, Entity, ItemStack } from '../index';

/**
 * @rc
 * Contains information regarding the mining of a block using
 * an item.
 * 
 * 包含关于使用物品挖掘方块的信息。
 */
export class ItemComponentMineBlockEvent {
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
     * The item stack used to mine the block.
     * 
     * 用于挖掘方块的物品堆。
     */
    readonly itemStack?: ItemStack;
    /**
     * @remarks
     * The block permutation that was mined.
     * 
     * 被挖掘的方块排列。
     */
    readonly minedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The entity that mined the block.
     * 
     * 挖掘方块的实体。
     */
    readonly source: Entity;
}