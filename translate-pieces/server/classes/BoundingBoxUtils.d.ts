/* IMPORT */ import { BoundingBox, Vector3 } from '../index';

/**
 * @beta
 * Bounding Box Utils is a utility class that provides a number
 * of useful functions for the creation and utility of {@link
 * BoundingBox} objects
 * 
 * BoundingBoxUtils 是一个实用类，提供了用于创建和操作
 * {@link BoundingBox} 对象的多个有用函数。
 */
export class BoundingBoxUtils {
    private constructor();
    /**
     * @remarks
     * Create a validated instance of a {@link BoundingBox} where
     * the min and max components are guaranteed to be (min <= max)
     * 
     * 创建一个经过验证的 {@link BoundingBox} 实例，其中
     * min 和 max 组件被确保为 (min <= max)。
     *
     * 此函数无法在只读模式下调用。
     *
     * @param min
     * A corner world location
     * 
     * 一个角落的世界位置
     * @param max
     * A corner world location diametrically opposite
     * 
     * 相对的另一个角落的世界位置
     */
    static createValid(min: Vector3, max: Vector3): BoundingBox;
    /**
     * @remarks
     * Expand a {@link BoundingBox} by a given amount along each
     * axis.
     * Sizes can be negative to perform contraction.
     * Note: corners can be inverted if the contraction size is
     * greater than the span, but the min/max relationship will
     * remain correct
     * 
     * 沿着每个轴将一个 {@link BoundingBox} 扩大指定的数量。
     * 大小可以为负数以执行收缩。
     * 注意：如果收缩的大小大于范围，角点可能会反转，但是
     * min/max 关系仍然正确。
     *
     * 此函数无法在只读模式下调用。
     *
     * @returns
     * Return a new {@link BoundingBox} object representing the
     * changes
     * 
     * 返回一个新的 {@link BoundingBox} 对象，表示变化后的情况。
     */
    static dilate(box: BoundingBox, size: Vector3): BoundingBox;
    /**
     * @remarks
     * Check if two {@link BoundingBox} objects are identical
     * 
     * 检查两个 {@link BoundingBox} 对象是否相同。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static equals(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Expand the initial box object bounds to include the 2nd box
     * argument.  The resultant {@link BoundingBox} object will be
     * a BoundingBox which exactly encompasses the two boxes.
     * 
     * 扩大初始的 BoundingBox 对象边界以包含第二个 BoundingBox 参数。
     * 结果的 {@link BoundingBox} 对象将是一个正好覆盖这两个盒子的
     * BoundingBox。
     *
     * 此函数无法在只读模式下调用。
     *
     * @returns
     * A new {@link BoundingBox} instance representing the smallest
     * possible bounding box which can encompass both
     * 
     * 返回一个新的 {@link BoundingBox} 实例，代表能够覆盖两者
     * 的最小可能的包围盒。
     */
    static expand(box: BoundingBox, other: BoundingBox): BoundingBox;
    /**
     * @remarks
     * Calculate the center block of a given {@link BoundingBox}
     * object.
     * 
     * 计算给定的 {@link BoundingBox} 对象的中心方块。
     *
     * 此函数无法在只读模式下调用。
     *
     * @returns
     * Note that {@link BoundingBox} objects represent whole
     * blocks, so the center of boxes which have odd numbered
     * bounds are not mathematically centered...
     * i.e. a BoundingBox( 0,0,0 -> 3,3,3 )  would have a center of
     * (1,1,1)  (not (1.5, 1.5, 1.5) as expected)
     * 
     * 注意，{@link BoundingBox} 对象表示的是整数方块，因此具有奇数
     * 边界的盒子的中心在数学上并不是居中的……
     * 即，一个 BoundingBox(0,0,0 -> 3,3,3) 将有一个中心点为
     * (1,1,1)（而不是预期的 (1.5, 1.5, 1.5)）。
     */
    static getCenter(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Calculate the BoundingBox which represents the union area of
     * two intersecting BoundingBoxes
     * 
     * 计算表示两个相交的 BoundingBoxes 联合区域的 BoundingBox。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static getIntersection(box: BoundingBox, other: BoundingBox): BoundingBox | undefined;
    /**
     * @remarks
     * Get the Span of each of the BoundingBox Axis components
     * 
     * 获取每个 BoundingBox 轴组件的跨度。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static getSpan(box: BoundingBox): Vector3;
    /**
     * @remarks
     * Check to see if two BoundingBox objects intersect
     * 
     * 检查两个 BoundingBox 对象是否相交。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static intersects(box: BoundingBox, other: BoundingBox): boolean;
    /**
     * @remarks
     * Check to see if a given coordinate is inside a BoundingBox
     * 
     * 检查给定坐标是否在 BoundingBox 内部。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static isInside(box: BoundingBox, pos: Vector3): boolean;
    /**
     * @remarks
     * Check to see if a BoundingBox is valid (i.e. (min <= max))
     * 
     * 检查 BoundingBox 是否有效（即 (min <= max)）。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    static isValid(box: BoundingBox): boolean;
    /**
     * @remarks
     * Move a BoundingBox by a given amount
     * 
     * 移动 BoundingBox 指定的距离。
     *
     * 此函数无法在只读模式下调用。
     *
     * @returns
     * Return a new BoundingBox object which represents the change
     * 
     * 返回一个新的 BoundingBox 对象，表示移动后的情况。
     */
    static translate(box: BoundingBox, delta: Vector3): BoundingBox;
}