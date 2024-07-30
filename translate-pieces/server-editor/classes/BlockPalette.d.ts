/* IMPORT */ import { IBlockPaletteItem, minecraftcommon } from '../index';

export class BlockPalette {
    /**
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    removeItems(): void;
    
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}
```

注释翻译如下：

```plaintext
// 导出一个表示方块调色板的类。
export class BlockPalette {
    /**
     * 获取指定索引处的方块调色板项。
     * 
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    getItem(index: number): IBlockPaletteItem;
    
    /**
     * 删除指定索引处的方块调色板项。
     * 
     * 注意：此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    removeItemAt(index: number): void;
    
    /**
     * 清除所有的方块调色板项。
     * 
     * 注意：此函数无法在只读模式下调用。
     */
    removeItems(): void;
    
    /**
     * 设置指定索引处的方块调色板项。
     * 
     * 注意：此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     */
    setItem(blockPaletteItem: IBlockPaletteItem, index: number): void;
}