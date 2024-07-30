/* IMPORT */ import { EditorStatusBarAlignment, ISimpleToolStatusBarComponent, SimpleToolStatusBarVisibility } from '../index';

/**
 * A set of options which define the basic properties of a
 * status bar item for a simple tool.
 * 
 * 一组选项，定义了简单工具状态栏项的基本属性。
 */
export interface ISimpleToolStatusBarOptions {
    /**
     * @remarks
     * The alignment of the status bar item within the parent
     * status bar container
     * 
     * 状态栏项在其父状态栏容器中的对齐方式。
     */
    alignment: EditorStatusBarAlignment;
    /**
     * @remarks
     * The text for the status bar item
     * 
     * 状态栏项的文本。
     */
    displayAltText: string;
    onFinalize?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onHide?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onShow?: (statusBar: ISimpleToolStatusBarComponent) => void;
    onTeardown?: (statusBar: ISimpleToolStatusBarComponent) => void;
    /**
     * @remarks
     * The size of the status bar item within the parent status bar
     * container
     * 
     * 状态栏项在其父状态栏容器中的大小。
     */
    size: number;
    /**
     * @remarks
     * Determine the status bar visibility based on the existence
     * and visibility of the tool's root property pane
     * 
     * 根据工具根属性窗格的存在和可见性确定状态栏的可见性。
     */
    visibility?: SimpleToolStatusBarVisibility;
}