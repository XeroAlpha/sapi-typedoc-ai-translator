/* IMPORT */ import { ISimpleTool, ISimpleToolKeyBinding, ISimpleToolPaneOptions, ISimpleToolRailOptions, ISimpleToolStatusBarOptions } from '../index';

/**
 * A set of options which define the basic properties of a
 * simple tool, and the optional components that are desired.
 * 
 * 一组定义简单工具的基本属性及其所需可选组件的选项。
 */
export interface ISimpleToolOptions {
    /**
     * @remarks
     * A key binding that will activate the tool. Note that if the
     * tool is a modal tool, then the key binding will be tied to
     * the tool rail activation, and appear as a tooltip on the
     * tool rail button. If the tool is a global tool, then the key
     * binding will be tied to a menu item in the View menu, and
     * appear as a stateful menu item which will control the pane
     * visibility. If there's no pane required, then the key
     * binding is ignored
     * 
     * 激活工具的按键绑定。注意，如果工具是模态工具，则按键绑定会与工具栏激活绑定，并作为工具栏按钮上的提示显示。如果工具是全局工具，则按键绑定会与视图菜单中的菜单项绑定，并作为控制面板可见性的状态式菜单项显示。如果没有需要的面板，则忽略按键绑定。
     */
    activationKeyBinding?: ISimpleToolKeyBinding;
    /**
     * @remarks
     * The name of the tool. This will be used to identify the tool
     * in the UI and logs and will be used in the View \> [Tool
     * Name] menu item (if it's a global tool)
     * 
     * 工具的名称。这将在用户界面和日志中用于识别工具，并在“视图 > [工具名称]”菜单项（如果是全局工具）中使用。
     */
    name: string;
    /**
     * @remarks
     * The finalize function is executed after each of the
     * components have been created and finalized during
     * construction
     * 
     * 构建过程中，在各个组件创建并最终化后执行的最终化函数。
     */
    onFinalize?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The teardown function is executed when the tool is being
     * torn down and only after the individual components have
     * executed their own teardown functions
     * 
     * 当工具被拆除时执行的拆除函数，且仅在各个组件执行了自身的拆除函数之后。
     */
    onTeardown?: (tool: ISimpleTool) => void;
    /**
     * @remarks
     * The options structure for an optional property pane
     * component
     * 
     * 可选属性面板组件的选项结构。
     */
    propertyPaneOptions?: ISimpleToolPaneOptions;
    /**
     * @remarks
     * The options structure for an optional status bar component
     * 
     * 可选状态栏组件的选项结构。
     */
    statusBarOptions?: ISimpleToolStatusBarOptions;
    /**
     * @remarks
     * The options structure for an optional tool rail component
     * 
     * 可选工具栏组件的选项结构。
     */
    toolRailOptions?: ISimpleToolRailOptions;
}