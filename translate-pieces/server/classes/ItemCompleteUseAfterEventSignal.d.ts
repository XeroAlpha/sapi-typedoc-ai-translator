/* IMPORT */ import { ItemCompleteUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to the completion of
 * charging for a chargeable item.
 * 
 * 管理与可充电物品完成充电相关的回调。
 */
export class ItemCompleteUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * completes charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，当可充电物品完成充电时将调用此回调。
     */
    subscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): (arg: ItemCompleteUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * completes charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 当可充电物品完成充电时，移除一个不再需要调用的回调。
     */
    unsubscribe(callback: (arg: ItemCompleteUseAfterEvent) => void): void;
}