/* IMPORT */ import { BlockVolumeBase, Vector3 } from '../index';

/**
 * Volume composed of an unordered container of unique block
 * locations.
 * 
 * 由唯一方块位置组成的无序容器构成的体积。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ListBlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * Creates a new instance of ListBlockVolume.
     *
     * @param locations
     * Initial array of block locations that ListBlockVolume will
     * be constructed with.
     * 
     * 创建一个新的 ListBlockVolume 实例。
     *
     * @param locations
     * 构造 ListBlockVolume 时使用的初始方块位置数组。
     */
    constructor(locations: Vector3[]);
    /**
     * @remarks
     * Insert block locations into container.
     *
     * This function can't be called in read-only mode.
     *
     * @param locations
     * Array of block locations to be inserted into container.
     * 
     * 将方块位置插入到容器中。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param locations
     * 要插入到容器中的方块位置数组。
     */
    add(locations: Vector3[]): void;
    /**
     * @remarks
     * Remove block locations from container.
     *
     * This function can't be called in read-only mode.
     *
     * @param locations
     * Array of block locations to be removed from container.
     * 
     * 从容器中移除方块位置。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param locations
     * 要从容器中移除的方块位置数组。
     */
    remove(locations: Vector3[]): void;
}