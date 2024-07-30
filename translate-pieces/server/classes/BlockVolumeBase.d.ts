/* IMPORT */ import { BlockLocationIterator, BoundingBox, Vector3 } from '../index';

/**
 * Base type for BlockVolumes.
 * 
 * BlockVolume 的基类。
 */
export class BlockVolumeBase {
    private constructor();
    /**
     * @beta
     * @remarks
     * Fetch a {@link BlockLocationIterator} that represents all of
     * the block world locations within the specified volume
     * 
     * 获取一个 {@link BlockLocationIterator}，它表示指定体积内所有方块的世界位置。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @beta
     * @remarks
     * Return a {@link BoundingBox} object which represents the
     * validated min and max coordinates of the volume
     * 
     * 返回一个 {@link BoundingBox} 对象，它表示验证过的体积的最小和最大坐标。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    getBoundingBox(): BoundingBox;
    /**
     * @remarks
     * Return the capacity (volume) of the BlockVolume (W*D*H)
     * 
     * 返回 BlockVolume 的容量（体积），即宽、深、高（W*D*H）的乘积。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    getCapacity(): number;
    /**
     * @remarks
     * Get the largest corner position of the volume (guaranteed to
     * be >= min)
     * 
     * 获取体积的最大角位置（保证大于等于最小值）。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * Get the smallest corner position of the volume (guaranteed
     * to be <= max)
     * 
     * 获取体积的最小角位置（保证小于等于最大值）。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * Get a {@link Vector3} object where each component represents
     * the number of blocks along that axis
     * 
     * 获取一个 {@link Vector3} 对象，其中每个分量代表沿该轴的方块数量。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    getSpan(): Vector3;
    /**
     * @remarks
     * Check to see if a given world block location is inside a
     * BlockVolume
     * 
     * 检查给定的世界方块位置是否在 BlockVolume 内部。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    isInside(location: Vector3): boolean;
    /**
     * @remarks
     * Move a BlockVolume by a specified amount
     * 
     * 沿着指定的数量移动 BlockVolume。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param delta
     * Amount of blocks to move by
     * 
     * 需要移动的方块数量。
     */
    translate(delta: Vector3): void;
}