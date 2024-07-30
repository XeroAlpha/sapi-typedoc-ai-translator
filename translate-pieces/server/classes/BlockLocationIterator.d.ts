/* IMPORT */ import { Vector3 } from '../index';

/**
 * @beta
 * A BlockLocationIterator returns the next block location of
 * the block volume across which it is iterating.
 * The BlockLocationIterator is used to abstract the shape of
 * the block volume it was fetched from (so it can represent
 * all the block locations that make up rectangles, cubes,
 * spheres, lines and complex shapes).
 * Each iteration pass returns the next valid block location in
 * the parent shape.
 * Unless otherwise specified by the parent shape - the
 * BlockLocationIterator will iterate over a 3D space in the
 * order of increasing X, followed by increasing Z followed by
 * increasing Y.
 * (Effectively stepping across the XZ plane, and when all the
 * locations in that plane are exhausted, increasing the Y
 * coordinate to the next XZ slice)
 * 
 * BlockLocationIterator 返回其迭代的方块体中下一个方块位置。
 * BlockLocationIterator 用于抽象化其获取自的方块体形状（因此它可以表示构成矩形、立方体、球体、线条和复杂形状的所有方块位置）。
 * 每次迭代都会返回父形状中的下一个有效方块位置。
 * 除非父形状另有指定，否则 BlockLocationIterator 将按 X 增加、随后 Z 增加、最后 Y 增加的顺序遍历三维空间。
 * （实际上，这相当于跨过 XZ 平面，并且当平面上所有位置都遍历完后，将 Y 坐标增加到下一个 XZ 切片）
 */
export class BlockLocationIterator implements Iterable<Vector3> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    [Symbol.iterator](): Iterator<Vector3>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     */
    next(): IteratorResult<Vector3>;
}