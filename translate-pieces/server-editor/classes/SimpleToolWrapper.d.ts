/* IMPORT */ import { IDisposable, IPlayerUISession, ISimpleTool, ISimpleToolOptions } from '../index';

/**
 * A simple class wrapper to inherit in your tool which
 * contains the initialization and storage of the simple tool
 * component utility. See one of the `Simple` samples to see
 * how to use this class and the wrapper framework
 * 
 * 一个简单的类包装器，用于在您的工具中继承，其中包含简单工具组件实用程序的初始化和存储。
 * 可参考其中一个 `Simple` 示例了解如何使用此类和包装框架。
 */
export declare class SimpleToolWrapper implements IDisposable {
    /**
     * @remarks
     * The player UI session that the tool is running in Use this
     * to access the player UI session, or any of the session's
     * components
     * 
     * 正在其中运行工具的玩家 UI 会话。使用此属性访问玩家 UI 会话或会话的任何组件。
     */
    get session(): IPlayerUISession;
    /**
     * @remarks
     * The simple tool instance that is created and managed by the
     * wrapper Use this to access any of the tools components, or
     * mess with the tools window visibility
     * 
     * 由包装器创建和管理的简单工具实例。使用此属性访问工具的任何组件或操作工具窗口的可见性。
     */
    get simpleTool(): ISimpleTool;
    /**
     * @remarks
     * Setup the simple tool instance with the given options This
     * will create and initialize the simple tool instance
     * 
     * 使用给定的选项设置简单工具实例。这将创建并初始化简单工具实例。
     */
    setupSimpleTool(session: IPlayerUISession, options: ISimpleToolOptions): void;
    /**
     * @remarks
     * Teardown the simple tool instance This will call the
     * teardown function on the simple tool instance This function
     * is automatically invoked by the Editor Extension system when
     * the editor is shutting down
     * 
     * 拆解简单工具实例。这将调用简单工具实例上的拆解函数。此函数会在编辑器关闭时由编辑器扩展系统自动调用。
     */
    teardown(): void;
}