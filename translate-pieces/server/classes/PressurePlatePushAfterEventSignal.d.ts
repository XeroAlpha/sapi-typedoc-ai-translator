/* IMPORT */ import { PressurePlatePushAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a pressure
 * plate is pushed.
 * 
 * 管理与压力板被触发时关联的回调。
 */
export class PressurePlatePushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * pushed.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，在压力板被触发时会调用此回调。
     */
    subscribe(callback: (arg: PressurePlatePushAfterEvent) => void): (arg: PressurePlatePushAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is pushed.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个回调，该回调原本会在压力板被触发时被调用。
     */
    unsubscribe(callback: (arg: PressurePlatePushAfterEvent) => void): void;
}