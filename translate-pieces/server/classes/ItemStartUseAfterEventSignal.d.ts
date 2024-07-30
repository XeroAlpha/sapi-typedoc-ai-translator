/* IMPORT */ import { ItemStartUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to the start of
 * charging for a chargeable item.
 * 
 * 管理与可充电物品开始充电时关联的回调。
 */
export class ItemStartUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * starts charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，当可充电物品开始充电时将被调用。
     */
    subscribe(callback: (arg: ItemStartUseAfterEvent) => void): (arg: ItemStartUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * starts charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个回调，该回调原本会在可充电物品开始充电时被调用。
     */
    unsubscribe(callback: (arg: ItemStartUseAfterEvent) => void): void;
}