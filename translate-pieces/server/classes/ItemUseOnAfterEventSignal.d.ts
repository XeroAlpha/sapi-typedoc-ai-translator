/* IMPORT */ import { ItemUseOnAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to an item being used
 * on a block event.
 * 
 * 管理与物品在方块上使用事件相关的回调。
 */
export class ItemUseOnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an item is used on
     * a block.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，当物品在方块上使用时会调用此回调。
     */
    subscribe(callback: (arg: ItemUseOnAfterEvent) => void): (arg: ItemUseOnAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an item is used on
     * a block.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个当物品在方块上使用时被调用的回调。
     */
    unsubscribe(callback: (arg: ItemUseOnAfterEvent) => void): void;
}