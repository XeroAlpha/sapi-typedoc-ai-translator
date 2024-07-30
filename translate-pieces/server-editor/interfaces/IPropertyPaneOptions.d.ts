/* IMPORT */ import { LayoutDirection } from '../index';

/**
 * The options to create a pane.
 * 
 * 创建窗格的选项。
 */
export interface IPropertyPaneOptions {
    /**
     * @remarks
     * Layout direction for sub panes
     * 
     * 子窗格的布局方向。
     */
    direction?: LayoutDirection;
    /**
     * @remarks
     * Localized title of the property pane
     * 
     * 属性窗格的本地化标题。
     */
    title: string;
}