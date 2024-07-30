/* IMPORT */ import { ItemStopUseAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to the stopping of
 * charging for an item that has a registered
 * minecraft:chargeable component.
 * 
 * 管理与具有注册的 minecraft:chargeable 组件的物品停止充能相关的回调。
 */
export class ItemStopUseAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a chargeable item
     * stops charging.
     * 
     * 添加一个回调，当可充能物品停止充能时会调用此回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(callback: (arg: ItemStopUseAfterEvent) => void): (arg: ItemStopUseAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a chargeable item
     * stops charging.
     * 
     * 从可充能物品停止充能时被调用的回调列表中移除一个回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: ItemStopUseAfterEvent) => void): void;
}