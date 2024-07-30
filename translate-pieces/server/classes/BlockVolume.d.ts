/* IMPORT */ import { BlockVolumeBase, BlockVolumeIntersection, Vector3 } from '../index';

/**
 * @beta
 * A BlockVolume is a simple interface to an object which
 * represents a 3D rectangle of a given size (in blocks) at a
 * world block location.
 * Note that these are not analogous to "min" and "max" values,
 * in that the vector components are not guaranteed to be in
 * any order.
 * In addition, these vector positions are not interchangeable
 * with BlockLocation.
 * If you want to get this volume represented as range of of
 * BlockLocations, you can use the getBoundingBox utility
 * function.
 * This volume class will maintain the ordering of the corner
 * indexes as initially set. Imagine that each corner is
 * assigned in Editor - as you move the corner around
 * (potentially inverting the min/max relationship of the
 * bounds) - what
 * you had originally selected as the top/left corner would
 * traditionally become the bottom/right.
 * When manually editing these kinds of volumes, you need to
 * maintain the identity of the corner as you edit - the
 * BlockVolume utility functions do this.
 *
 * Important to note that this measures block sizes (to/from) -
 * a normal AABB (0,0,0) to (0,0,0) would traditionally be of
 * size (0,0,0)
 * However, because we're measuring blocks - the size or span
 * of a BlockVolume would actually be (1,1,1)
 * 
 * BlockVolume 是一个简单的接口，用于表示给定大小（以方块计）
 * 的三维矩形在世界方块位置上的对象。
 * 注意，这些不是类似于“min”和“max”的值，即向量组件不保证按顺序排列。
 * 此外，这些向量位置不可与 BlockLocation 互换。
 * 如果您想将此体积表示为一系列 BlockLocation，可以使用 getBoundingBox 实用函数。
 * 此体积类会保持角索引的初始排序。想象每个角都在编辑器中被分配——当您移动角时
 * （可能颠倒了边界的最大/最小关系），原本选中的顶部/左侧角将传统上变为底部/右侧角。
 * 当手动编辑此类体积时，需要在编辑过程中保持角的身份不变——BlockVolume 实用函数会做到这一点。
 *
 * 需要注意的是，此体积测量的是方块尺寸（from/to）——
 * 一个正常的 AABB（0,0,0）到（0,0,0）通常被认为是尺寸为（0,0,0）
 * 但是因为我们测量的是方块，BlockVolume 的大小或跨度实际上是（1,1,1）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockVolume extends BlockVolumeBase {
    /**
     * @remarks
     * A world block location that represents a corner in a 3D
     * rectangle
     *
     * This property can't be edited in read-only mode.
     *
     * 代表三维矩形中的一个角的世界方块位置。
     *
     * 此属性在只读模式下无法编辑。
     */
    'from': Vector3;
    /**
     * @remarks
     * A world block location that represents the opposite corner
     * in a 3D rectangle
     *
     * This property can't be edited in read-only mode.
     *
     * 代表三维矩形中相对角的世界方块位置。
     *
     * 此属性在只读模式下无法编辑。
     */
    to: Vector3;
    constructor(from: Vector3, to: Vector3);
    /**
     * @remarks
     * Check to see if the given location is directly adjacent to
     * the outer surface of a BlockVolume.
     *
     *
     * This function can't be called in read-only mode.
     *
     * @param pos
     * The world block location to test
     * @returns
     * If the location is either inside or more than 0 blocks away,
     * the function will return false.
     * If the location is directly contacting the outer surface of
     * the BlockVolume, the function will return true.
     * 
     * 检查给定位置是否直接与 BlockVolume 的外表面相邻。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param pos
     * 待检测的世界方块位置
     * @returns
     * 如果位置位于内部或距离超过0个方块，则函数返回 false。
     * 如果位置直接接触 BlockVolume 的外表面，则函数返回 true。
     */
    doesLocationTouchFaces(pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a two block volumes are directly adjacent
     * and two faces touch.
     *
     * This function can't be called in read-only mode.
     *
     * @param other
     * The volume to test
     * @returns
     * If the outer faces of both block volumes touch and are
     * directly adjacent at any point, return true.
     * 
     * 检查两个 BlockVolume 是否直接相邻且两面接触。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param other
     * 待检测的体积
     * @returns
     * 如果两个 BlockVolume 的外表面接触并且在任意一点直接相邻，则返回 true。
     */
    doesVolumeTouchFaces(other: BlockVolume): boolean;
    /**
     * @remarks
     * Return an enumeration which represents the intersection
     * between two BlockVolume objects
     *
     * This function can't be called in read-only mode.
     *
     * 返回表示两个 BlockVolume 对象之间相交情况的枚举。
     *
     * 此函数在只读模式下无法调用。
     */
    intersects(other: BlockVolume): BlockVolumeIntersection;
}