/* IMPORT */ import { IPlayerUISession, ISimpleTool, IStatusBarItem } from '../index';

/**
 * Represents a component for a simple tool's status bar.
 * 
 * 表示简单工具状态栏组件。
 */
export interface ISimpleToolStatusBarComponent {
    get session(): IPlayerUISession;
    /**
     * Gets the player UI session.
     * 
     * 获取玩家 UI 会话。
     */
    
    get simpleTool(): ISimpleTool;
    /**
     * Gets the simple tool.
     * 
     * 获取简单工具。
     */

    get statusBarItem(): IStatusBarItem;
    /**
     * Gets the status bar item.
     * 
     * 获取状态栏项。
     */

    hide(): void;
    /**
     * Hides the status bar.
     * 
     * 隐藏状态栏。
     */

    show(): void;
    /**
     * Shows the status bar.
     * 
     * 显示状态栏。
     */
}