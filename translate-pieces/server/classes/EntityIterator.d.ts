/* IMPORT */ import { Entity } from '../index';

/**
 * @beta
 * This type is usable for iterating over a set of entities.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 * 
 * 此类型可用于遍历一组实体。这意味着可以在类似 for...of 语句、Array.from(迭代器)等语句中使用它。
 */
export class EntityIterator implements Iterable<Entity> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     */
    [Symbol.iterator](): Iterator<Entity>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Entity in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     * 获取本次迭代中的下一个项。结果 IteratorResult 包含 .done 和 .value 属性，可以用来查看迭代中的下一个实体。
     *
     * 此函数无法在只读模式下调用。
     */
    next(): IteratorResult<Entity>;
}