/* IMPORT */ import { BlockPaletteManager, BrushShapeManager, ClipboardManager, Cursor, ExportManager, Extension, ExtensionContextAfterEvents, PlaytestManager, SelectionManager, SettingsManager, TransactionManager, WidgetManager, minecraftserver } from '../index';

/**
 * The extension context is a native (C++) object created for
 * each registered Editor Extension, when a player connection
 * is established with the server.
 * A registered extension activation or deactivation closure is
 * accompanied by an [ExtensionContext] object, which provides
 * a player specific, editor extension specific context.
 * The Extension Context is the main interface to all the bound
 * Editor Services.
 * As more player services are added to the editor, they will
 * be exposed through this object
 * 
 * 扩展上下文是为每个注册的编辑器扩展创建的原生（C++）对象，
 * 当玩家与服务器建立连接时。已注册扩展的激活或停用闭包会伴随一个
 * [ExtensionContext] 对象，它提供了一个针对特定玩家、特定编辑器扩展的上下文。
 * 扩展上下文是绑定到所有编辑器服务的主要接口。
 * 随着更多玩家服务被添加到编辑器中，它们将通过此对象进行暴露。
 */
export class ExtensionContext {
    private constructor();
    /**
     * @remarks
     * Contains a set of events that are applicable to the editor
     * player.  Event callbacks are called in a deferred manner.
     * Event callbacks are executed in read-write mode.
     * 
     * 包含适用于编辑器玩家的一组事件。事件回调以延迟方式调用，并在读写模式下执行。
     */
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly brushShapeManager: BrushShapeManager;
    /**
     * @remarks
     * This is used to access the players Clipboard Manager and the
     * main interface through which the player can create, modify
     * and apply clipboard items
     * 
     * 用于访问玩家的剪贴板管理器，以及玩家创建、修改和应用剪贴板项的主要接口。
     */
    readonly clipboardManager: ClipboardManager;
    /**
     * @remarks
     * This is used to access the players 3D block cursor and it's
     * properties
     * 
     * 用于访问玩家的3D方块光标及其属性。
     */
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    /**
     * @remarks
     * Contains information about the registered extension
     * instance.
     * 
     * 包含关于已注册扩展实例的信息。
     */
    readonly extensionInfo: Extension;
    /**
     * @remarks
     * The current player which is the subject of the extension
     * invocation
     * 
     * 当前作为扩展调用主题的玩家。
     */
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    /**
     * @remarks
     * The instance of the players Selection Manager and the main
     * interface through which the player can create/modify
     * selections
     * 
     * 玩家的选择管理器实例及玩家创建/修改选择项的主要接口。
     */
    readonly selectionManager: SelectionManager;
    /**
     * @remarks
     * The instance of the players Settings Manager and the
     * contract through which the settings for the player can be
     * modified.
     * 
     * 玩家的设置管理器实例及通过该接口可以修改玩家设置的契约。
     */
    readonly settings: SettingsManager;
    /**
     * @remarks
     * The instance of the players Transaction Manager and the main
     * interface through which the creator can create transaction
     * records, and undo/redo previous transactions
     * 
     * 玩家的交易管理器实例及创建者可以通过该接口创建交易记录、撤销/重做先前交易的主要接口。
     */
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}