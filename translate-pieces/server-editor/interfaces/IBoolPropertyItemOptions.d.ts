/* IMPORT */ import { BoolPropertyItemVariant, IPropertyItemOptionsBase, LocalizedString } from '../index';

/**
 * Optional properties for Bool property item
 * 
 * Bool 属性项的可选属性
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     * 
     * 如果为 true，则隐藏标签文本。默认情况下可见。
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * This callback is called when UI control value is changed.
     * 
     * 当 UI 控件值发生改变时调用此回调。
     */
    onChange?: (newValue: boolean, oldValue: boolean) => void;
    /**
     * @remarks
     * Localized title of the text item.
     * 
     * 文本项的本地化标题。
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     * 
     * 属性项的工具提示描述
     */
    tooltip?: LocalizedString;
    /**
     * @remarks
     * Determines how we display bool as a UI element. If
     * undefined, it will default to Checkbox.
     * 
     * 决定如何显示布尔值作为 UI 元素。如果未定义，默认为复选框。
     */
    variant?: BoolPropertyItemVariant;
}