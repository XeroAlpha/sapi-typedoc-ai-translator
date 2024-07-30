/* IMPORT */ import { CursorAttachmentProperties } from '../index';

export class CursorAttachmentPropertiesChangeAfterEvent {
    private constructor();
    /**
     * The updated cursor attachment properties after the change.
     * 
     * 变更后更新的光标附件属性。
     */
    readonly properties: CursorAttachmentProperties;
}