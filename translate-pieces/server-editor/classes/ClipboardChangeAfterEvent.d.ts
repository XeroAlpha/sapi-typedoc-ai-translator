export class ClipboardChangeAfterEvent {
    private constructor();
    /**
     * Indicates whether the change is for the primary clipboard slot.
     * 
     * 标识更改是否针对主要剪贴板槽位。
     */
    readonly isPrimary: boolean;
    /**
     * The item ID of the item that was placed or removed from the clipboard.
     * 
     * 被放置或从剪贴板移除的物品的物品ID。
     */
    readonly itemId: string;
}