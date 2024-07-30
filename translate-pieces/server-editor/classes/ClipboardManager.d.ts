/* IMPORT */ import { ClipboardItem } from '../index';

/**
 * The ClipboardManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link ClipboardItem} objects, and provides the user the
 * ability to create new {@link ClipboardItem} objects for use
 * within an extension.
 * 
 * ClipboardManager（可通过 {@link ExtensionContext} 访问）负责管理所有
 * {@link ClipboardItem} 对象，并提供用户在扩展中创建新的
 * {@link ClipboardItem} 对象的能力。
 */
export class ClipboardManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link ClipboardItem} object is always present
     * (even if it's empty) and cannot be deleted.  This object
     * represents the main ClipboardItem object which is always
     * accessible through the UI for cut/paste operations
     * 
     * 主要的 {@link ClipboardItem} 对象始终存在（即使它是空的）且无法删除。
     * 此对象代表主要的 ClipboardItem 对象，始终可以通过 UI 进行剪切/粘贴操作。
     * 
     * @throws This property can throw when used.
     */
    readonly clipboard: ClipboardItem;
    /**
     * @remarks
     * Create a new  {@link ClipboardItem} object
     * 
     * 创建一个新的 {@link ClipboardItem} 对象
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     */
    create(): ClipboardItem;
}