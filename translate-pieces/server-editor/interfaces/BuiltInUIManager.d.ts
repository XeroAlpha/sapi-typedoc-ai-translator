/**
 * Represents a UI session for a given player
 * 
 * 表示给定玩家的 UI 会话。
 */
export interface BuiltInUIManager {
    /**
     * @remarks
     * Navigates to the documentation site.
     * 
     * 导航至文档站点。
     */
    navigateToDocumentation(): void;
    /**
     * @remarks
     * Navigates to the feedback site
     * 
     * 导航至反馈站点。
     */
    navigateToFeedback(): void;
    /**
     * @remarks
     * Navigates to the pause screen
     * 
     * 导航至暂停屏幕。
     */
    navigateToPauseScreen(): void;
    /**
     * @remarks
     * Updates the visibility of the log panel
     * 
     * 更新日志面板的可见性。
     */
    updateLogPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the control demo
     * 
     * 更新控制演示的可见性。
     */
    updateUISettingsPanelVisibility(visibility: boolean): void;
    /**
     * @remarks
     * Updates the visibility of the welcome panel
     * 
     * 更新欢迎面板的可见性。
     */
    updateWelcomePanelVisibility(visibility: boolean): void;
}