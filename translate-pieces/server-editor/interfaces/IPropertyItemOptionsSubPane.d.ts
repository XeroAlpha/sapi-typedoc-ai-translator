/* IMPORT */ import { IPropertyItemOptions, IPropertyPane } from '../index';

/**
 * @remarks
 * The sub pane to render in UI.
 * 
 * 在用户界面中渲染的子面板。
 */
export interface IPropertyItemOptionsSubPane extends IPropertyItemOptions {
    /**
     * @remarks
     * The sub pane to render in UI.
     * 
     * 在用户界面中渲染的子面板。
     */
    pane: IPropertyPane;
}