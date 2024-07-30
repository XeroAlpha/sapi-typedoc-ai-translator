/**
 * Registered item handle in the Action Bar collection.
 * 
 * 表示 Action Bar 集合中注册的项的句柄。
 */
export interface IActionBarItem {
    /**
     * @remarks
     * Returns the current enabled state of the item.
     * 
     * 返回当前项的启用状态。
     */
    getEnabled: () => boolean;
    /**
     * @remarks
     * Unique identifier of the item.
     * 
     * 项的唯一标识符。
     */
    readonly id: string;
    /**
     * @remarks
     * Text label of the item.
     * 
     * 项的文本标签。
     */
    readonly label: string;
    /**
     * @remarks
     * Modify enabled state of the item.
     * 
     * 修改项的启用状态。
     */
    setEnabled: (enabled: boolean) => void;
}