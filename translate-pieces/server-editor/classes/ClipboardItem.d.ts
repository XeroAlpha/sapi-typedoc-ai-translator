/* IMPORT */ import { ClipboardWriteOptions, Selection, minecraftserver } from '../index';

/**
 * A ClipboardItem is a handle to an object which represents a
 * set of blocks in a contained bounding area (most likely
 * copied from the world)
 * 
 * ClipboardItem 是一个句柄，指向代表一组方块（通常是从世界中复制的）的包围盒区域的对象。
 */
export class ClipboardItem {
    private constructor();
    /**
     * @remarks
     * Return whether there is any block content in the item
     * 
     * 返回项目中是否有方块内容。
     * 
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Clear the contents of the item
     * 
     * 清空项目的内容。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * Create a {@link @minecraft/server.CompoundBlockVolume}
     * container which represents the occupied block volumes within
     * the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     * 
     * 创建一个 {@link @minecraft/server.CompoundBlockVolume} 容器，表示 ClipboardItem 中占据的方块体积。
     * 此函数不执行任何写操作，而是仅返回基于给定写入选项的写操作可能影响的体积区域的预测。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * 
     * ClipboardItem 可能被写入的世界位置（此操作实际上不进行任何写入）。
     * 
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * 
     * 用于控制 ClipboardItem 如何可能应用于世界的可选写入参数集。
     * 
     * @returns
     * A {@link @minecraft/server.CompoundBlockVolume} which
     * represents the occupied block volumes within the
     * ClipboardItem as they would be written to the world with the
     * specified {@link ClipboardWriteOptions}
     * 
     * 一个 {@link @minecraft/server.CompoundBlockVolume}，表示 ClipboardItem 中占据的方块体积将如何根据指定的 {@link ClipboardWriteOptions} 写入世界。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getPredictedWriteAsCompoundBlockVolume(
        location: minecraftserver.Vector3,
        options?: ClipboardWriteOptions,
    ): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * Create a {@link Selection} container which represents the
     * occupied block volumes within the ClipboardItem.
     * This function does not perform any write operations, and
     * instead returns only a prediction of the volume area which
     * would be affected as part of a write operation with a given
     * set of write options.
     * 
     * 创建一个 {@link Selection} 容器，表示 ClipboardItem 中占据的方块体积。
     * 此函数不执行任何写操作，而是仅返回基于给定写入选项的写操作可能影响的体积区域的预测。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param location
     * A world location to which the ClipboardItem may potentially
     * be written (nothing is actually written as part of this
     * operation)
     * 
     * ClipboardItem 可能被写入的世界位置（此操作实际上不进行任何写入）。
     * 
     * @param options
     * An optional set of write parameters which govern how the
     * ClipboardItem should be potentially applied to the world
     * 
     * 用于控制 ClipboardItem 如何可能应用于世界的可选写入参数集。
     * 
     * @returns
     * A {@link Selection} which represents the occupied block
     * volumes within the ClipboardItem as they would be written to
     * the world with the specified {@link ClipboardWriteOptions}
     * 
     * 一个 {@link Selection}，表示 ClipboardItem 中占据的方块体积将如何根据指定的 {@link ClipboardWriteOptions} 写入世界。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getPredictedWriteAsSelection(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): Selection;
    /**
     * @remarks
     * Get the bounding size of the ClipboardItem
     * 
     * 获取 ClipboardItem 的包围大小。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getSize(): minecraftserver.Vector3;
    /**
     * @remarks
     * Copy the contents of the area represented by a {@link
     * Selection} volume into the ClipboardItem
     * 
     * 将由 {@link Selection} 体积表示的区域内容复制到 ClipboardItem 中。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param selection
     * A volume which represents the area to be copied
     * 
     * 代表要复制的区域的体积。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    readFromSelection(selection: Selection): void;
    /**
     * @remarks
     * Copy the contents of a rectangular volume into the Clipboard
     * Item
     * 
     * 将矩形体积的内容复制到 Clipboard Item 中。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param from
     * The world location of one corner of a bounding volume
     * 
     * 包围盒的一个角的世界位置。
     * 
     * @param to
     * The world location of the opposite corner of a bounding
     * volume
     * 
     * 包围盒的另一个相对角的世界位置。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    readFromWorld(from: minecraftserver.Vector3, to: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Apply the contents of a ClipboardItem to the world at a
     * given location using a set of write options
     * 
     * 使用一组写入选项，在给定位置将 ClipboardItem 的内容应用到世界中。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param location
     * The root point of the world location to which the
     * ClipboardItem is written (this is modified by the various
     * anchor, offset and rotation parameters of the {@link
     * ClipboardWriteOptions}
     * 
     * ClipboardItem 被写入的世界位置的基本点（这会受到各种锚点、偏移量和旋转参数的影响，这些参数属于 {@link ClipboardWriteOptions}）。
     * 
     * @param options
     * An optional set of write parameters which modify the
     * properties of the ClipboardItem as it is applied to the
     * world
     * 
     * 用于修改 ClipboardItem 应用于世界时的特性的可选写入参数集。
     * 
     * @returns
     * Success or Failure
     * 
     * 成功或失败。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    writeToWorld(location: minecraftserver.Vector3, options?: ClipboardWriteOptions): boolean;
}