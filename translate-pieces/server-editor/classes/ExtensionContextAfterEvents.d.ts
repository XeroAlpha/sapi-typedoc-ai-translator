/* IMPORT */ import { ClipboardChangeAfterEventSignal, CursorAttachmentPropertyChangeAfterEventSignal, CursorPropertyChangeAfterEventSignal, ModeChangeAfterEventSignal, PrimarySelectionChangeAfterEventSignal } from '../index';

/**
 * Contains a set of events that are available across the scope
 * of the ExtensionContext.
 * 
 * 包含一组在整个 ExtensionContext 范围内可用的事件。
 */
export class ExtensionContextAfterEvents {
    private constructor();
    /**
     * 可读属性：当剪贴板内容发生变化时的事件信号。
     */
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    /**
     * 可读属性：当光标附件属性发生变化时的事件信号。
     */
    readonly cursorAttachmentPropertyChange: CursorAttachmentPropertyChangeAfterEventSignal;
    /**
     * 可读属性：当光标属性发生变化时的事件信号。
     */
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    /**
     * @remarks
     * This event triggers when the editor mode changes for the
     * player.
     *
     * 当玩家的编辑模式发生改变时触发此事件。
     */
    readonly modeChange: ModeChangeAfterEventSignal;
    /**
     * 可读属性：当主要选择内容发生变化时的事件信号。
     */
    readonly primarySelectionChange: PrimarySelectionChangeAfterEventSignal;
}