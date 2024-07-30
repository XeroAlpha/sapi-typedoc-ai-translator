/* IMPORT */ import { LeverActionAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a lever is used.
 * 
 * 提供了一个可适应的接口，调用者可以通过它订阅在拉杆被使用后触发的事件。
 */
export class ILeverActionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     * 
     * This function can't be called in read-only mode.
     * 
     * 订阅此事件。
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: LeverActionAfterEvent) => void): (arg: LeverActionAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     * 
     * This function can't be called in read-only mode.
     * 
     * 取消订阅此事件。
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: LeverActionAfterEvent) => void): void;
}