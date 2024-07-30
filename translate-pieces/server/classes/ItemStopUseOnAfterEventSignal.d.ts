/* IMPORT */ import { ItemStopUseOnAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item stops used
 * on a block event.
 * 
 * 管理与物品在方块上停止使用事件相关的回调。
 */
export class ItemStopUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item stops being
     * used on a block.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当物品在方块上停止使用时会被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): (arg: ItemStopUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * 从物品在方块上使用时被调用的回调列表中移除一个回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: ItemStopUseOnAfterEvent) => void): void;
}