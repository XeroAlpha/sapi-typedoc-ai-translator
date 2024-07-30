/* IMPORT */ import { ItemUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item use event.
 * 
 * 管理与物品使用事件相关的回调。
 */
export class ItemUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在物品被使用时调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: ItemUseAfterEvent) => void): (arg: ItemUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个在物品被使用时调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: ItemUseAfterEvent) => void): void;
}