/* IMPORT */ import { CustomWidgetMoveEventData, WidgetCreateOptions, minecraftserver } from '../index';

/**
 * CustomWidgetCreateOptions 继承自 WidgetCreateOptions，
 * 并添加了一些特定于自定义小部件的选项。
 * 
 * CustomWidgetCreateOptions 接口扩展了 WidgetCreateOptions，
 * 并添加了一些针对自定义小部件的特定选项。
 */
export interface CustomWidgetCreateOptions extends WidgetCreateOptions {
    /**
     * moveEvent?
     * A callback function that is called when the widget is moved.
     * 
     * 当小部件被移动时调用的回调函数。
     */
    moveEvent?: (arg: CustomWidgetMoveEventData) => void;

    /**
     * showTextOnlyWhenSelected?
     * Specifies whether text should only be displayed when the widget is selected.
     * 
     * 指定是否仅当小部件被选中时才显示文本。
     */
    showTextOnlyWhenSelected?: boolean;

    /**
     * text?
     * The text to display on the widget.
     * 
     * 小部件上要显示的文本。
     */
    text?: string;

    /**
     * visualOffset?
     * An offset applied to the widget's position for visual purposes.
     * 
     * 用于视觉目的的小部件位置的偏移量。
     */
    visualOffset?: minecraftserver.Vector3;
}