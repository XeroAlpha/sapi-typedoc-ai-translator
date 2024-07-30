/* IMPORT */ import { EntityType } from '../index';

/**
 * @beta
 * An iterator that loops through available entity types.
 * 
 * 遍历可用实体类型的迭代器。
 */
export class EntityTypeIterator implements Iterable<EntityType> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    [Symbol.iterator](): Iterator<EntityType>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    next(): IteratorResult<EntityType>;
}