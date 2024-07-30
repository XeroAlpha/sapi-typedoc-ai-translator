/* IMPORT */ import { WidgetStateChangeEventData } from '../index';

/**
 * Options for creating a widget.
 * 
 * 创建 Widget 的选项。
 */
export interface WidgetCreateOptions {
    initialVisibility?: boolean;
    isSelectable?: boolean;
    stateChangeEvent?: (arg: WidgetStateChangeEventData) => void;
}