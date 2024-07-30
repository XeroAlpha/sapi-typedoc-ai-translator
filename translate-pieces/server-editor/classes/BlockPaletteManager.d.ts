/* IMPORT */ import { BlockPalette, IBlockPaletteItem, minecraftserver } from '../index';

export class BlockPaletteManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     */
    addOrReplacePalette(paletteId: string, palette: BlockPalette): void;
    getPalette(paletteId: string): BlockPalette | undefined;
    getPaletteIdList(): string[];
    /**
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getPaletteItem(paletteId: string, index: number): IBlockPaletteItem;
    getPrimaryPalette(): BlockPalette;
    /**
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getSelectedBlockType(): minecraftserver.BlockType;
    getSelectedItem(): IBlockPaletteItem;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    removePalette(paletteId: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setPaletteItem(paletteId: string, index: number, item: IBlockPaletteItem): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setPrimaryPalette(paletteId: string): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setSelectedItem(item: IBlockPaletteItem): void;
}