/* IMPORT */ import { BlockPaletteItemType, minecraftserver } from '../index';

export class IBlockPaletteItem {
    private constructor();
    getBlock(): minecraftserver.BlockType | undefined;
    getDisplayName(): string;
    getType(): BlockPaletteItemType;
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
    setBlock(block: minecraftserver.BlockPermutation | minecraftserver.BlockType | string): void;
}