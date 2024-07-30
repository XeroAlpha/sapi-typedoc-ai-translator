/* IMPORT */ import { BoundingBoxUtils, Vector3 } from '../index';

/**
 * @beta
 * A BoundingBox is an interface to an object which represents
 * an AABB aligned rectangle.
 * The BoundingBox assumes that it was created in a valid state
 * (min <= max) but cannot guarantee it (unless it was created
 * using the associated {@link BoundingBoxUtils} utility
 * functions.
 * The min/max coordinates represent the diametrically opposite
 * corners of the rectangle.
 * The BoundingBox is not a representation of blocks - it has
 * no association with any type, it is just a mathematical
 * construct - so a rectangle with
 * ( 0,0,0 ) -> ( 0,0,0 )
 * has a size of ( 0,0,0 ) (unlike the very similar {@link
 * BlockVolume} object)
 * 
 * BoundingBox 是一个接口，用于表示轴对齐的包围盒（AABB）矩形。
 * BoundingBox 假定其在有效状态（min <= max）下被创建，
 * 但无法保证这一点（除非使用相关的 {@link BoundingBoxUtils}
 * 实用程序创建）。
 * min/max 坐标代表矩形的对角线上的相对角点。
 * BoundingBox 并不是方块的表示——它与任何类型都没有关联，
 * 只是一个数学构造——因此一个从 (0,0,0) 到 (0,0,0) 的矩形
 * 具有 (0,0,0) 的尺寸（与非常类似的 {@link BlockVolume} 对象不同）。
 */
export interface BoundingBox {
    /**
     * @remarks
     * A {@link Vector3} that represents the largest corner of the
     * rectangle
     * 
     * 表示矩形最大角点的 {@link Vector3}
     */
    max: Vector3;
    /**
     * @remarks
     * A {@link Vector3} that represents the smallest corner of the
     * rectangle
     * 
     * 表示矩形最小角点的 {@link Vector3}
     */
    min: Vector3;
}