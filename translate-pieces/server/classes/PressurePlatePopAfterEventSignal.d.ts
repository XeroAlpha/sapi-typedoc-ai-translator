/* IMPORT */ import { PressurePlatePopAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a pressure
 * plate is popped.
 * 
 * 管理与压力板弹起时关联的回调。
 */
export class PressurePlatePopAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a pressure plate is
     * popped.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个回调，当压力板被弹起时将调用此回调。
     */
    subscribe(callback: (arg: PressurePlatePopAfterEvent) => void): (arg: PressurePlatePopAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a pressure plate
     * is popped.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 从压力板弹起时的回调列表中移除一个回调。
     */
    unsubscribe(callback: (arg: PressurePlatePopAfterEvent) => void): void;
}