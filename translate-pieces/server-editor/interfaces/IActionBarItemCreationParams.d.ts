/**
 * Properties required to create an Action Bar item.
 * 
 * 创建 ActionBar 项目所需属性。
 */
export interface IActionBarItemCreationParams {
    /**
     * @remarks
     * Initial enabled state of the item. If not defined, default
     * is true.
     * 
     * 项目的初始启用状态。如果没有定义，默认值为 true。
     */
    enabled?: boolean;
    /**
     * @remarks
     * Icon resource for the item.
     * 
     * 项目图标资源。
     */
    icon: string;
    /**
     * @remarks
     * Text label for item.
     * 
     * 项目文本标签。
     */
    label: string;
    /**
     * @remarks
     * Tooltip description for the item.
     * 
     * 项目工具提示描述。
     */
    tooltipDescription?: string;
    /**
     * @remarks
     * Tooltip title for the item.
     * 
     * 项目工具提示标题。
     */
    tooltipTitle?: string;
}