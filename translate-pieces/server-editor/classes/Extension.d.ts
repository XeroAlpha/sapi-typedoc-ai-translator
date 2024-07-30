/* IMPORT */ import { ExtensionContext, registerEditorExtension } from '../index';

/**
 * Editor Extensions are the basis for all player specific,
 * editor specific functionality within the game.  Almost all
 * editor functionality is exported and available within the
 * context of an {@link ExtensionContext}
 * When the script manager initializes during level loading,
 * the scripts are loaded from the behavior packs and executed.
 * As part of the global execution context, the scripts are
 * free to register any number of extensions.
 * An Editor Extension is defined a name, an activation
 * function and a shutdown function.
 * 
 * It is not recommended to directly use this function as the
 * contract is not guaranteed to be stable, instead prefer
 * {@link registerEditorExtension} as it provides additional
 * functionality and a stable contract.
 * 
 * 编辑器扩展是游戏内所有玩家特定、编辑器特定功能的基础。
 * 几乎所有的编辑器功能都在 {@link ExtensionContext} 的上下文中导出并可用。
 * 当脚本管理器在加载关卡时初始化，脚本从行为包加载并执行。
 * 作为全局执行上下文的一部分，脚本可以自由注册任意数量的扩展。
 * 编辑器扩展由名称、激活函数和关闭函数定义。
 * 
 * 不推荐直接使用此函数，因为其契约不能保证稳定；
 * 相反，建议使用 {@link registerEditorExtension}，因为它提供了额外的功能和稳定的契约。
 */
export class Extension {
    private constructor();
    /**
     * @remarks
     * Default identifier for tool rail grouping. All modal tools
     * created from the extension will use this.
     * 
     * 工具栏分组的默认标识符。从扩展创建的所有模态工具都将使用此标识符。
     */
    readonly defaultToolGroupId: string;
    /**
     * @remarks
     * Description specified during registration for the extension.
     * 
     * 注册扩展时指定的描述。
     */
    readonly description: string;
    /**
     * @remarks
     * Name of the extension.
     * 
     * 扩展的名称。
     */
    readonly name: string;
    /**
     * @remarks
     * Notes specified during registration for the extension.
     * 
     * 注册扩展时指定的备注。
     */
    readonly notes: string;
}