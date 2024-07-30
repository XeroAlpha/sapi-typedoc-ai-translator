/* IMPORT */ import { ISimpleToolPaneComponent } from '../index';

/**
 * A set of options which define the basic properties of a
 * window pane (or sub-pane) for a simple tool. This pane can
 * be a top level pane, or a child pane of the top level pane,
 * and is the content container for all of the UI controls used
 * by the editor tool. Each pane is uniquely identified by the
 * `id` property, and has a number of optional function
 * closures which are called at various points in the pane's
 * lifecycle. Note that instead of having a single `onFinalize`
 * function, panes implement a pair of `onBeginFinalize` and
 * `onEndFinalize` functions. This is to allow for the pane to
 * be partially constructed BEFORE any child panes are
 * constructed. Once all child panes have been fully finalized,
 * then the `onEndFinalize` function is called to allow the
 * pane to finalize itself.
 * 
 * 定义简单工具中窗口面板（或子面板）基本属性的一组选项。此面板可以是顶级面板，
 * 或者是顶级面板的子面板，并且是编辑器工具使用的所有UI控件的内容容器。
 * 每个面板通过其 `id` 属性唯一标识，并具有多个可选函数闭包，
 * 这些闭包在面板生命周期的不同阶段被调用。注意，面板不是实现单一的 `onFinalize`
 * 函数，而是实现了 `onBeginFinalize` 和 `onEndFinalize` 函数对。
 * 这是为了允许面板在任何子面板构建之前先进行部分构建。
 * 当所有子面板完全完成构建后，然后调用 `onEndFinalize` 函数，
 * 允许面板完成自身的构建。
 */
export interface ISimpleToolPaneOptions {
    /**
     * @remarks
     * The id of the child pane that should be visible when the
     * parent pane is first shown, or the editor tool is
     * constructed and finalized
     * 
     * 当父面板首次显示，或者编辑器工具构建并完成时，
     * 应该可见的子面板的id。
     */
    childPaneInitiallyVisible?: string;
    /**
     * @remarks
     * An optional array of child panes. These panes are set up
     * exactly the same as the top level pane, but are displayed as
     * children inside the parent pane.
     * 
     * 可选的子面板数组。这些面板与顶级面板设置完全相同，
     * 但在父面板内作为子面板显示。
     */
    childPanes?: ISimpleToolPaneOptions[];
    /**
     * @remarks
     * An optional flag to indicate whether the child panes are
     * mutually exclusive. If this is true, then only one child
     * pane can be visible at a time. If this is false, then
     * multiple child panes can be visible at the same time.
     * Visibility is controlled either through `showPane` or
     * `hidePane` functions of the `ISimpleToolPaneComponent` or
     * through the visibility methods in the top level tool
     * (`ISimpleTool`)
     * 
     * 可选标志，指示子面板是否互斥。如果为真，则一次只能看到一个子面板。
     * 如果为假，则多个子面板可以同时可见。可见性可以通过 `ISimpleToolPaneComponent`
     * 的 `showPane` 或 `hidePane` 函数控制，也可以通过顶级工具 (`ISimpleTool`)
     * 中的可见性方法控制。
     */
    childPanesMutuallyExclusive?: boolean;
    /**
     * @remarks
     * The unique identifier for this pane. This is used to
     * identify the pane in the tool's pane hierarchy.
     * 
     * 此面板的唯一标识符。用于在工具的面板层次结构中识别面板。
     */
    id: string;
    onBeginFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onEndFinalize?: (pane: ISimpleToolPaneComponent) => void;
    onHide?: (pane: ISimpleToolPaneComponent) => void;
    onShow?: (pane: ISimpleToolPaneComponent) => void;
    onTeardown?: (pane: ISimpleToolPaneComponent) => void;
    /**
     * @remarks
     * The title of the pane. This will be displayed in the title
     * bar of the pane.
     * 
     * 面板的标题。这将在面板的标题栏中显示。
     */
    title: string;
}