/* IMPORT */ import { ISimpleToolRailComponent } from '../index';

/**
 * The tool rail component allows the tool to register an icon
 * and button (and dynamic tooltip) in the tool rail on the
 * left side of the display. Adding a tool rail component to a
 * tool will cause the tool to be considered a `modal tool`,
 * and only one single modal tool can be active at any one
 * time. Modal tools are generally tools which take focus and
 * control of the cursor (e.g. selection, clipboards, entity
 * selection, etc) Global tools (tools which do not have a tool
 * rail) are generally things like property pages, settings,
 * etc - things that do not require an active cursor or
 * gameplay interaction
 * 
 * 工具栏组件允许工具在显示屏幕左侧的工具栏中注册图标、按钮（以及动态提示信息）。
 * 向工具添加工具栏组件会使该工具被视为“模态工具”，并且任何时候只能有一个模态工具处于活动状态。
 * 模态工具通常是指接管光标焦点和控制（例如：选择、剪贴板、实体选择等）的工具。
 * 全局工具（没有工具栏的工具）通常是属性页面、设置等不需要主动光标或游戏交互的工具。
 */
export interface ISimpleToolRailOptions {
    /**
     * @remarks
     * The icon for the tool rail button. This is generally a URL
     * to an image file in the editor extension resource pack e.g.
     * `pack://textures/my-tool-icon.png`
     * 
     * 工具栏按钮的图标。这通常是位于编辑器扩展资源包中的图像文件的 URL，例如：
     * `pack://textures/my-tool-icon.png`
     */
    icon: string;
    onActivate?: (component: ISimpleToolRailComponent) => void;
    onDeactivate?: (component: ISimpleToolRailComponent) => void;
    onFinalize?: (component: ISimpleToolRailComponent) => void;
    onTeardown?: (component: ISimpleToolRailComponent) => void;
    /**
     * @remarks
     * The text for the tool title
     * 
     * 工具标题的文字内容
     */
    title: string;
    /**
     * @remarks
     * The tooltip description for the tool. Note: if an activation
     * key binding was added to `ISimpleToolOptions`, then the key
     * binding will be appended to the tooltip string.
     * 
     * 工具的提示信息描述。注意：如果向 `ISimpleToolOptions` 添加了激活键绑定，则该键绑定将附加到提示字符串上。
     */
    tooltip: string;
}