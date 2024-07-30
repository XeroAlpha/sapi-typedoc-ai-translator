/* IMPORT */ import { Widget, WidgetGroup } from '../index';

/**
 * Represents event data for a widget state change.
 * 
 * 表示 widget 状态改变的事件数据。
 */
export class WidgetStateChangeEventData {
    private constructor();
    readonly group: WidgetGroup;
    readonly isSelected?: boolean;
    readonly isVisible?: boolean;
    readonly widget: Widget;
}