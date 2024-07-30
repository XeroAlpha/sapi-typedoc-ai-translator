/* IMPORT */ import { IMenu, IPlayerUISession, ISimpleToolPaneComponent, ISimpleToolRailComponent, ISimpleToolStatusBarComponent } from '../index';

/**
 * The simple tool wrapper will create, bind and manage the
 * lifecycle of all the desired components. The wrapper is
 * designed to obfuscate and simplify the process of creating a
 * simple editor tool so that a creator can get on with the job
 * of just creating the tool functionality without getting
 * mired in the irrelevant details of component lifecycle and
 * visibility management. The wrapper will also attempt to
 * codify particular implementation patterns and requirements
 * that are common to all editor tools, and enforce them in a
 * consistent way. It should also go some way to insulating the
 * creator from underlying system and implementation changes as
 * the editor evolves.
 * 
 * 简易工具包装器将创建、绑定并管理所有所需组件的生命周期。
 * 包装器旨在使创建简易编辑工具的过程变得模糊且简化，这样创作者可以专注于创建工具功能，
 * 而不必陷入与组件生命周期和可见性管理无关的细节中。包装器还将尝试制定适用于所有编辑工具的特定实现模式和要求，
 * 并以一致的方式强制执行它们。随着编辑器的发展，这也有助于将创作者与底层系统和实现变化隔离开来。
 */
export interface ISimpleTool {
    /**
     * @remarks
     * Get a reference to the menu component that was automatically
     * created for the tool This generally only happens if the tool
     * is a global tool (i.e. has a pane and does not have a tool
     * rail component) In this case a menu item is automatically
     * created and some visibility controls are inserted. If you
     * have additional menu options you want to add, this is the
     * ideal control to add children to
     * 
     * 获取自动为工具创建的菜单组件的引用。通常，只有当工具是全局工具（即具有面板而不具有工具栏组件）
     * 时才会发生这种情况。在这种情况下，会自动生成菜单项，并插入一些可见性控制。如果您想添加额外的菜单选项，
     * 这是添加子控件的理想选择。
     */
    get menu(): IMenu | undefined;
    /**
     * @remarks
     * Get the tool name
     * 
     * 获取工具名称
     */
    get name(): string;
    /**
     * @remarks
     * Get a reference to the root (primary) property pane
     * component - if no component was requested, this function
     * will throw an error
     * 
     * 获取对根（主要）属性面板组件的引用——如果没有请求组件，此函数将抛出错误
     */
    get pane(): ISimpleToolPaneComponent;
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     * 
     * 获取 IPlayerUISession 的引用。这是编辑器 UI 和所有编辑器扩展控件的主要接口。
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the status bar component - if no
     * component was requested, this function will throw an error
     * 
     * 获取状态栏组件的引用——如果没有请求组件，此函数将抛出错误
     */
    get statusBar(): ISimpleToolStatusBarComponent;
    /**
     * @remarks
     * Get a reference to the tool rail component - if no component
     * was requested, this function will throw an error
     * 
     * 获取工具栏组件的引用——如果没有请求组件，此函数将抛出错误
     */
    get toolRail(): ISimpleToolRailComponent;
    /**
     * @remarks
     * Find a pane or subpane by it's unique ID.
     * 
     * 通过其唯一ID查找面板或子面板。
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Although the parent pane is used to execute the
     * visibility request, the hidePane function will NOT affect
     * the visibility of any sibling panes -- so it is possible to
     * hide all of the child panes of a parent using this function
     * 
     * 通过其唯一ID隐藏特定的面板或子面板。如果没有提供ID（或找不到），函数将抛出错误。
     * 尽管使用父面板执行可见性请求，但hidePane函数不会影响任何兄弟面板的可见性——因此，使用此函数有可能隐藏父面板的所有子面板。
     */
    hidePane(idString?: string): void;
    /**
     * @remarks
     * Send a tagged Debug log message to the console. The tag will
     * contain the tool name
     * 
     * 向控制台发送带有标签的调试日志消息。标签将包含工具名称。
     */
    logDebug(message: string): void;
    /**
     * @remarks
     * Send a tagged Error log message to the console. The tag will
     * contain the tool name
     * 
     * 向控制台发送带有标签的错误日志消息。标签将包含工具名称。
     */
    logError(message: string): void;
    /**
     * @remarks
     * Send a tagged Informational log message to the console. The
     * tag will contain the tool name
     * 
     * 向控制台发送带有标签的信息日志消息。标签将包含工具名称。
     */
    logInfo(message: string): void;
    /**
     * @remarks
     * Send a tagged Warning log message to the console. The tag
     * will contain the tool name
     * 
     * 向控制台发送带有标签的警告日志消息。标签将包含工具名称。
     */
    logWarn(message: string): void;
    /**
     * @remarks
     * Show a particular pane or subpane by it's unique ID. If no
     * ID is provided (or cannot be found) the function will throw
     * an error Note that the showPane function (when used with a
     * child pane) will use the parent pane to execute the
     * visibility request. In this case, if the child panes are
     * marked as mututally exclusive, then the siblings of the
     * requested pane will be hidden
     * 
     * 通过其唯一ID显示特定的面板或子面板。如果没有提供ID（或找不到），函数将抛出错误。
     * 注意，showPane函数（与子面板一起使用时）将使用父面板执行可见性请求。在这种情况下，如果子面板标记为互斥，
     * 那么所请求面板的兄弟面板将被隐藏。
     */
    showPane(idString?: string): void;
    /**
     * @remarks
     * Much like the showPane function, but will hide all other
     * panes that are not the requested pane irrespective of the
     * exclusivity setting
     * 
     * 类似于showPane函数，但无论排他性设置如何，都会隐藏除所请求面板之外的所有其他面板。
     */
    showPaneExclusively(idString: string): void;
    /**
     * @remarks
     * A teardown function implemented by the ISimpleTool
     * implementation, and is called by the system during editor
     * extension shutdown. Don't override this function - instead,
     * implement the onTeardown event in the ISimpleToolOptions
     * structure
     * 
     * 由ISimpleTool实现实现的拆解函数，由系统在编辑器扩展关闭期间调用。不要重写此函数——相反，在ISimpleToolOptions结构中实现onTeardown事件。
     */
    teardown(): void;
}