/* IMPORT */ import { ItemUseOnBeforeEvent } from '../index';

/**
 * Manages callbacks that fire before an item being used on a
 * block event.
 * 
 * 管理在物品被用于方块事件之前触发的回调。
 */
export class ItemUseOnBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before an item is used
     * on a block.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个将在物品用于方块之前被调用的回调。
     */
    subscribe(callback: (arg: ItemUseOnBeforeEvent) => void): (arg: ItemUseOnBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an item is used
     * on a block.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个在物品用于方块之前被调用的回调。
     */
    unsubscribe(callback: (arg: ItemUseOnBeforeEvent) => void): void;
}