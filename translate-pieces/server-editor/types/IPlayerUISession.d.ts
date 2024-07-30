/* IMPORT */ import { ActionManager, BedrockEventSubscriptionCache, BuiltInUIManager, EditorStatusBarAlignment, ExtensionContext, IActionBar, IGlobalInputManager, IMenuContainer, IModalToolContainer, IPlayerLogger, IPropertyPane, IPropertyPaneOptions, IStatusBarItem } from '../index';

/**
 * The IPlayerUISession represents the editor user interface
 * for a given player and given extension. Extensions
 * registered with Minecraft are instantiated for each player
 * which joins a server, and this interface provides the set of
 * functionality needed to create and modify the editor UI for
 * that player. The associated Editor Context for this session
 * object is also player specific. From a given
 * IPlayerUISession object, there is no way to interact with
 * the UI of another player, that must be done from global
 * extension scope registration and/or data sharing independent
 * of the UI object.
 * 
 * IPlayerUISession 代表给定玩家和扩展的编辑器用户界面。注册到 Minecraft 的扩展针对加入服务器的每个玩家实例化，
 * 此接口提供了一套创建和修改该玩家编辑器 UI 所需的功能。与此会话对象关联的编辑器上下文也是特定于玩家的。
 * 从给定的 IPlayerUISession 对象，无法与另一个玩家的 UI 进行交互，这必须通过全局扩展作用域注册和/或独立于 UI 对象的数据共享来完成。
 */
export type IPlayerUISession<PerPlayerStorage = Record<string, never>> = {
    /**
     * 创建状态栏项。
     */
    createStatusBarItem(alignment: EditorStatusBarAlignment, size: number): IStatusBarItem;
    
    /**
     * 创建属性面板。
     */
    createPropertyPane(options: IPropertyPaneOptions): IPropertyPane;
    
    /**
     * 访问动作管理器。
     */
    readonly actionManager: ActionManager;
    
    /**
     * 访问全局输入管理器。
     */
    readonly inputManager: IGlobalInputManager;
    
    /**
     * 访问菜单栏容器。
     */
    readonly menuBar: IMenuContainer;
    
    /**
     * 访问操作栏。
     */
    readonly actionBar: IActionBar;
    
    /**
     * 访问工具栏容器。
     */
    readonly toolRail: IModalToolContainer;
    
    /**
     * 访问玩家日志记录器。
     */
    readonly log: IPlayerLogger;
    
    /**
     * 访问扩展上下文。
     */
    readonly extensionContext: ExtensionContext;
    
    /**
     * 访问内置UI管理器。
     */
    readonly builtInUIManager: BuiltInUIManager;
    
    /**
     * 访问Bedrock事件订阅缓存。
     */
    readonly eventSubscriptionCache: BedrockEventSubscriptionCache;
    
    /**
     * 每个玩家的存储空间，可选。
     */
    scratchStorage: PerPlayerStorage | undefined;
};