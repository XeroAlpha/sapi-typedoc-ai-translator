/* IMPORT */ import { CursorProperties } from '../index';

export class CursorPropertiesChangeAfterEvent {
    private constructor();
    /**
     * The cursor properties after the change.
     * 
     * 更改后光标的属性。
     */
    readonly properties: CursorProperties;
}