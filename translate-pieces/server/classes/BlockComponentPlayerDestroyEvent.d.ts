/* IMPORT */ import { BlockEvent, BlockPermutation, Player } from '../index';

/**
 * @rc
 * Contains information regarding a specific block being
 * destroyed.
 * 
 * 包含有关特定方块被破坏的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentPlayerDestroyEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Returns permutation information about this block before it
     * was destroyed.
     * 
     * 返回此方块被破坏前的状态信息。
     */
    readonly destroyedBlockPermutation: BlockPermutation;
    /**
     * @remarks
     * The player that destroyed this block.
     * 
     * 销毁此方块的玩家。
     */
    readonly player?: Player;
}