/* IMPORT */ import { CursorPropertiesChangeAfterEvent } from '../index';

/**
 * @remarks
 * This function can't be called in read-only mode.
 * 
 * 此函数在只读模式下无法调用。
 */
export class CursorPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     *
     * @param callback
     * Callback function that will be invoked when the event occurs.
     * 
     * 当事件发生时将被调用的回调函数。
     * @returns
     * Returns the callback function that was passed in.
     * 
     * 返回传递进来的回调函数。
     */
    subscribe(
        callback: (arg: CursorPropertiesChangeAfterEvent) => void,
    ): (arg: CursorPropertiesChangeAfterEvent) => void;

    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     *
     * @param callback
     * The callback function to remove from the event.
     * 
     * 要从事件中移除的回调函数。
     */
    unsubscribe(callback: (arg: CursorPropertiesChangeAfterEvent) => void): void;
}