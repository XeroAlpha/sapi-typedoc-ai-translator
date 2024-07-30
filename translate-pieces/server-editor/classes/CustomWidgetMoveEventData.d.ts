/* IMPORT */ import { CustomWidget, WidgetGroup, minecraftserver } from '../index';

/**
 * Represents data for a custom widget move event.
 * 
 * 表示自定义小部件移动事件的数据。
 */
export class CustomWidgetMoveEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly location?: minecraftserver.Vector3;
    readonly rotation?: minecraftserver.Vector2;
    readonly widget: CustomWidget;
}