/* IMPORT */ import { SelectionEventAfterEvent } from '../index';

/**
 * @remarks
 * This function can't be called in read-only mode.
 * 
 * 此函数在只读模式下无法调用。
 */

export class PrimarySelectionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    subscribe(callback: (arg: SelectionEventAfterEvent) => void): (arg: SelectionEventAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    unsubscribe(callback: (arg: SelectionEventAfterEvent) => void): void;
}