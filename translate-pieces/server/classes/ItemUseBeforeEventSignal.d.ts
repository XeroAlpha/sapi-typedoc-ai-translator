/* IMPORT */ import { ItemUseBeforeEvent } from '../index';

/**
 * Manages callbacks that fire before an item is used.
 * 
 * 管理在物品被使用前触发的回调。
 */
export class ItemUseBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在物品被使用前调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: ItemUseBeforeEvent) => void): (arg: ItemUseBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个在物品被使用前调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: ItemUseBeforeEvent) => void): void;
}