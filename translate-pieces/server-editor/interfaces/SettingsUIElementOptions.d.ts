/**
 * Options for a UI element in the settings.
 * 
 * 设置 UI 元素的选项。
 */
export interface SettingsUIElementOptions {
    dropdownItems?: string[];
    /**
     * An array of strings representing the items in a dropdown menu.
     * 
     * 下拉菜单中的项组成的字符串数组。
     */
    max?: number;
    /**
     * Maximum value for a numeric input.
     * 
     * 数值输入的最大值。
     */
    min?: number;
    /**
     * Minimum value for a numeric input.
     * 
     * 数值输入的最小值。
     */
    refreshOnChange?: boolean;
    /**
     * Whether to refresh the UI when the value changes.
     * 
     * 当值改变时是否刷新 UI。
     */
}