/* IMPORT */ import { minecraftserver } from '../index';

/**
 * The Selection represents a volume in space, which may
 * potentially be made up of one or more block locations.
 * These block locations do not need to be contiguous, and a
 * Selection represent an irregular shape.
 * It's important to note that a Selection is only a
 * representation of the volume shape space - and does NOT
 * represent the actual contents of the space.
 * 
 * Selection 表示空间中的体积，可能由一个或多个方块位置组成。
 * 这些方块位置不需要连续，Selection 代表不规则形状。
 * 需要注意的是，Selection 只是体积形状空间的表示，并不表示实际空间内容。
 */
export class Selection {
    private constructor();
    /**
     * @remarks
     * Returns a boolean representing whether or not there are any
     * volumes pushed to the selection stack
     * 
     * 返回一个布尔值，表示选择堆栈中是否有任何体积被推送。
     * 
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly isEmpty: boolean;
    /**
     * @remarks
     * Set whether or not the selection volume is visible to the
     * client user.
     * NOTE: Use this option carefully - Selection volumes are
     * generally server-only, but marking a volume as visible
     * causes the volume (and all volume operations) to be
     * synchronized with the client game which can potentially
     * generate excessive network traffic.
     * 
     * 设置客户端用户是否可见选择体积。
     * 注意：谨慎使用此选项 —— 选择体积通常是仅服务器端的，但是标记体积为可见会导致体积（及其所有操作）与客户端游戏同步，这可能会产生过多的网络流量。
     * 
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    visible: boolean;
    /**
     * @remarks
     * Clear the contents of the Selection
     * 
     * 清空 Selection 的内容。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a block iterator which can be used to step across the
     * Selection shape.  Each call to the iterator will return the
     * next block location within the Selection bounds which is
     * actually selected.
     * Block iteration is not guaranteed to be contiguous - it is
     * possible to create irregular selection shapes by adding
     * volumes to a selection which may or may not be contiguous or
     * adjacent to other volumes within the selection.
     * The Block iterator will return only selected volume
     * locations
     * 
     * 获取一个可以遍历 Selection 形状的方块迭代器。每次调用迭代器会返回 Selection 范围内下一个实际被选中的方块位置。
     * 方块迭代不一定连续 —— 可以通过向 Selection 添加可能连续也可能不连续的体积来创建不规则的选择形状。
     * 方块迭代器只会返回已选择的体积位置。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    getBlockLocationIterator(): minecraftserver.BlockLocationIterator;
    /**
     * @remarks
     * Return a bounding rectangle that contains all of the volumes
     * within the selection (the bounding rectangle does NOT
     * represent the shape of the selection, only the largest
     * rectangle that will fit all of the volumes)
     * 
     * 返回一个包含选择内所有体积的包围矩形（包围矩形并不表示选择的形状，只是能够容纳所有体积的最大矩形）。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getBoundingBox(): minecraftserver.BoundingBox;
    /**
     * @remarks
     * Return the color of the on-screen selection container hull
     * 
     * 返回屏幕上方块容器的填充颜色。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getFillColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Return the color of the on-screen selection container
     * outline
     * 
     * 返回屏幕上方块容器的轮廓颜色。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getOutlineColor(): minecraftserver.RGBA;
    /**
     * @remarks
     * Get the origin of the CompoundBlockVolume that makes up the
     * block component part of selection
     * 
     * 获取构成选择中方块组件部分的 CompoundBlockVolume 的原点。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    getVolumeOrigin(): minecraftserver.Vector3;
    /**
     * @remarks
     * Translate a selection by a given amount (this causes all of
     * the volumes within the selection to be moved by the
     * specified offset)
     * 
     * 沿给定量移动选择（这会使选择内的所有体积沿指定偏移量移动）。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param delta
     * The amount by which to move
     * 
     * 移动的量
     * 
     * @returns
     * Return the newly moved position
     * 
     * 返回新移动的位置
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    moveBy(delta: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Move the selection to an absolute world location (causing
     * all of the volumes within the selection to be moved to a
     * location relative to the world location)
     * 
     * 将选择移动到绝对的世界位置（使选择内的所有体积移动到相对于世界位置的位置）。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param location
     * The world location to which to relocate the selection
     * 
     * 重新定位选择的目标世界位置
     * 
     * @returns
     * Return the newly moved position
     * 
     * 返回新移动的位置
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    moveTo(location: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Fetch the volume information of the last compound volume
     * that was pushed to the volume stack without affecting the
     * stack itself
     * 
     * 获取最后推送到体积堆栈的复合体积的信息，而不影响堆栈本身。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param forceRelativity
     * See the description for {@link
     * @minecraft/server.CompoundBlockVolume.peekLastVolume}
     * 
     * 参见 {@link
     * @minecraft/server.CompoundBlockVolume.peekLastVolume} 的描述
     * 
     * @returns
     * Returns undefined if the stack is empty
     * 
     * 如果堆栈为空，则返回 undefined
     */
    peekLastVolume(
        forceRelativity?: minecraftserver.CompoundBlockVolumePositionRelativity,
    ): minecraftserver.CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the volume information that was last pushed to the
     * volume stack.  This will reduce the stack item length by 1
     * 
     * 删除最后推送到体积堆栈的体积信息。这会使堆栈项长度减小 1。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    popVolume(): void;
    /**
     * @remarks
     * Push a compound volume item (a volume and action pair) to
     * the volume stack.
     * 
     * 向体积堆栈推送复合体积项（一个体积和操作的组合）。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param item
     * Item to push to the stack
     * 
     * 推送至堆栈的项
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    pushVolume(item: minecraftserver.CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * Replace the contents of the current selection with a new
     * specified selection.  This operation will delete the current
     * contents and copy the contents of the new selection to the
     * target selection - it does this by content, not by
     * reference.
     * 
     * 用新的指定选择替换当前选择的内容。此操作会删除当前内容并将新选择的内容复制到目标选择 —— 这是按内容而非引用进行的。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param other
     * {@link @minecraft/server.CompoundBlockVolume} - set the
     * block component part of this selection to the specified
     * compound block volume.  This will completely replace all
     * block volume definitions in the selection.
     * 
     * {@link Selection} - 用指定的选择替换当前选择
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    set(other: minecraftserver.CompoundBlockVolume | Selection): void;
    /**
     * @remarks
     * Set the color of the hull of the selection object if it is
     * visible.
     * 
     * 如果选择对象可见，则设置其填充颜色。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setFillColor(color: minecraftserver.RGBA): void;
    /**
     * @remarks
     * Set the color of the outline around the selection object if
     * it is visible
     * 
     * 如果选择对象可见，则设置其轮廓颜色。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setOutlineColor(color: minecraftserver.RGBA): void;
}