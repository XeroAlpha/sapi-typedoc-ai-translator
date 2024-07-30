/* IMPORT */ import { ButtonPushAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires when a button is pushed.
 * 
 * 提供了一个可适应的接口，调用者可以通过它订阅按钮被按下时触发的事件。
 */
export class IButtonPushAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 订阅此事件。
     */
    subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 取消订阅此事件。
     */
    unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void;
}