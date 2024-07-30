/* IMPORT */ import { CursorAttachmentPropertiesChangeAfterEvent } from '../index';

/**
 * @remarks
 * This function can't be called in read-only mode.
 * 
 * 此函数在只读模式下无法调用。
 */
export class CursorAttachmentPropertyChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     *
     */
    subscribe(
        callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void,
    ): (arg: CursorAttachmentPropertiesChangeAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     *
     */
    unsubscribe(callback: (arg: CursorAttachmentPropertiesChangeAfterEvent) => void): void;
}