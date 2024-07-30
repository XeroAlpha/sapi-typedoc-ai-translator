/* IMPORT */ import { IPlayerUISession, IPropertyPane, ISimpleTool } from '../index';

/**
 * The Simple Tool pane component represents the main window
 * (or sub-window) for an editor tool. The pane components are
 * stored as a hierarchy (see the `ISimpleToolPaneOptions`
 * interface for more details) and are the main containers for
 * all of the UI controls used by the editor tool. Panes are
 * optional (a tool doesn't necessarily need to have a pane),
 * but if a pane is present, then it is one of two type - Modal
 * Pane (appears on the left side of the display; visibility is
 * tied to the `ISimpleToolRail` component) (Note that there
 * can be only one modal pane visible at a time) - Global Pane
 * (appears on the right side of the display; visibility is up
 * to the creator/user)
 * 
 * Simple Tool 窗格组件表示编辑器工具的主要窗口（或子窗口）。
 * 窗格组件以层级结构存储（更多详情参见 `ISimpleToolPaneOptions` 接口），
 * 是编辑器工具所有 UI 控件的主要容器。窗格是可选的（工具不一定需要有窗格），
 * 但如果存在窗格，则有两种类型：- 模态窗格（显示在屏幕左侧；可见性与
 * `ISimpleToolRail` 组件相关联）（注意：一次只能有一个模态窗格可见）
 * - 全局窗格（显示在屏幕右侧；可见性由创建者/用户决定）
 */
export interface ISimpleToolPaneComponent {
    /**
     * @remarks
     * Get a list of the unique ID's of all of the child panes
     * 
     * 获取所有子窗格的唯一ID列表
     */
    get childPaneList(): string[];
    /**
     * @remarks
     * Get the unique ID of the pane
     * 
     * 获取窗格的唯一ID
     */
    get id(): string;
    /**
     * @remarks
     * Check the visibility of the pane
     * 
     * 检查窗格的可见性
     */
    get isVisible(): boolean;
    /**
     * @remarks
     * Get a reference to actual property pane implementation that
     * was constructed by the tool. This reference is used to
     * construct the UI components that are displayed in the pane.
     * 
     * 获取由工具构建的实际属性窗格实现的引用。此引用用于构建显示在窗格中的UI组件。
     */
    get pane(): IPropertyPane;
    /**
     * @remarks
     * Get a reference to the IPlayerUISession. This is the primary
     * interface to the editor UI and all of the editor extension
     * controls
     * 
     * 获取 IPlayerUISession 的引用。这是编辑器UI及所有编辑器扩展控件的主要接口。
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * Get a reference to the parent tool.
     * 
     * 获取父工具的引用。
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Find a pane reference by unique ID
     * 
     * 通过唯一ID查找窗格引用
     */
    findPane(idString: string): ISimpleToolPaneComponent | undefined;
    /**
     * @remarks
     * Hide the pane. Although the parent pane is used to execute
     * the visibility request, the hidePane function will NOT
     * affect the visibility of any sibling panes -- so it is
     * possible to hide all of the child panes of a parent using
     * this function
     * 
     * 隐藏窗格。虽然使用父窗格来执行可见性请求，但 hidePane 函数不会影响任何兄弟窗格的可见性，
     * 因此可以使用此函数隐藏父窗格的所有子窗格。
     */
    hidePane(): void;
    /**
     * @remarks
     * This causes the reconstruction of the pane (and the child
     * panes) as if the tool was being constructed for the first
     * time. This is unfortunately necessary until such time that
     * all of our UI components are able to communicate dynamically
     * with their client counterparts. Certain controls require a
     * full teardown and reconstruction to properly update their
     * state. This is undergoing code changes and should become
     * unnecessary in the future.
     * 
     * 这会导致窗格（及其子窗格）像工具首次构建一样进行重建。不幸的是，在所有UI组件能够与其客户端对应项动态通信之前，
     * 这是必要的。某些控件要求完全拆解和重建以正确更新其状态。这正在经历代码更改，并且将来应变得不再必要。
     */
    reconstructPane(): void;
    /**
     * @remarks
     * Show the pane. Note, if this is a sub-pane, then this
     * function will ask the parent for permission to show, and may
     * result in the visibility of any sibling panes to change as a
     * result (depending on the `mutually exclusive visibility`
     * flag)
     * 
     * 显示窗格。注意，如果这是一个子窗格，则此函数会向父窗格请求显示许可，并可能导致任何兄弟窗格的可见性发生变化（取决于“互斥可见性”标志）。
     */
    showPane(): void;
}