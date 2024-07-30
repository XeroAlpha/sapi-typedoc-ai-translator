export interface IStatusBarItem {
    /**
     * @remarks
     * Unique ID for the item.
     * 
     * 项目的唯一ID。
     */
    readonly id: string;
    /**
     * @remarks
     * Text to display.
     * 
     * 要显示的文本。
     */
    text: string;
    /**
     * 隐藏状态栏项目。
     */
    hide(): void;
    /**
     * 显示状态栏项目。
     */
    show(): void;
}