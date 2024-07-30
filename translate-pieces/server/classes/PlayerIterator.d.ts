/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * This type is usable for iterating over a set of players.
 * This means it can be used in statements like for...of
 * statements, Array.from(iterator), and more.
 * 
 * 此类型可用于遍历一组玩家。这意味着它可以用于 for...of 语句、Array.from(iterator) 和更多场景中。
 */
export class PlayerIterator implements Iterable<Player> {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     */
    [Symbol.iterator](): Iterator<Player>;
    /**
     * @remarks
     * Retrieves the next item in this iteration. The resulting
     * IteratorResult contains .done and .value properties which
     * can be used to see the next Player in the iteration.
     *
     * This function can't be called in read-only mode.
     *
     * 获取本次迭代的下一个项。生成的 IteratorResult 包含 .done 和 .value 属性，这些属性可用于查看迭代中的下一个玩家。
     *
     * 此函数无法在只读模式下调用。
     */
    next(): IteratorResult<Player>;
}