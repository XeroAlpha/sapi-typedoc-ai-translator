/* IMPORT */ import { ItemStartUseOnAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item starting
 * being used on a block event.
 * 
 * 管理与物品开始在方块上使用的事件相关的回调。
 */
export class ItemStartUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当物品在方块上使用时会调用此回调。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): (arg: ItemStartUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * 从物品在方块上使用时的调用列表中移除一个回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ItemStartUseOnAfterEvent) => void): void;
}