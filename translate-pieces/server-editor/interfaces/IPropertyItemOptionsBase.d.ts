/**
 * Common optional properties for property items
 * 
 * 属性项通用的可选属性
 */
export interface IPropertyItemOptionsBase {
    /**
     * @remarks
     * Initial enabled state of property item. If undefined, it
     * will default to true.
     * 
     * 属性项初始的启用状态。如果不定义，默认为 `true`。
     */
    enable?: boolean;
    /**
     * @remarks
     * Initial visibility state of property item. If undefined, it
     * will default to true.
     * 
     * 属性项初始的可见状态。如果不定义，默认为 `true`。
     */
    visible?: boolean;
}