/* IMPORT */ import { ItemReleaseUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to the releasing of
 * charging for a chargeable item.
 * 
 * 管理与可充电物品停止充电相关的回调。
 */
export class ItemReleaseUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * is released from charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，当可充电物品停止充电时将被调用。
     */
    subscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): (arg: ItemReleaseUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * is released from charging.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 当可充电物品停止充电时，移除一个回调使其不再被调用。
     */
    unsubscribe(callback: (arg: ItemReleaseUseAfterEvent) => void): void;
}