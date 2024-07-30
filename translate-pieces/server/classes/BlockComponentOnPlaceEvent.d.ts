/* IMPORT */ import { BlockEvent, BlockPermutation } from '../index';

/**
 * @rc
 * Contains information regarding a specific block that was
 * placed.
 * 
 * 包含有关放置的具体方块的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponentOnPlaceEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Previous block at this location that was replaced.
     * 
     * 被替换的此位置的前一方块。
     */
    readonly previousBlock: BlockPermutation;
}