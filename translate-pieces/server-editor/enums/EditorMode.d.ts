/**
 * Enumeration representing the different modes Editor can be
 * in.
 * 
 * 枚举表示 Editor 可以处于的不同模式。
 */
export enum EditorMode {
    /**
     * @remarks
     * Mode for single-block editing.
     * 
     * 单个方块编辑模式。
     */
    Crosshair = 'Crosshair',
    /**
     * @remarks
     * Mode for multi-block editing UI and tools.
     * 
     * 多方块编辑界面和工具模式。
     */
    Tool = 'Tool',
}