/* IMPORT */ import { ClipboardChangeAfterEvent } from '../index';

export class ClipboardChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: ClipboardChangeAfterEvent) => void): (arg: ClipboardChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ClipboardChangeAfterEvent) => void): void;
}