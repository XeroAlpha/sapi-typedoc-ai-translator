/* IMPORT */ import { IBlockPaletteItem, WeightedBlock, minecraftcommon, minecraftserver } from '../index';

/**
 * @beta
 * Represents a probability-based block palette item.
 */
export class ProbabilityBlockPaletteItem extends IBlockPaletteItem {
    constructor(displayName?: string);

    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link Error}
     */
    addBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string, weight: number): void;

    getBlocks(): WeightedBlock[];

    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     *
     * {@link Error}
     */
    removeBlockAt(index: number): void;
}