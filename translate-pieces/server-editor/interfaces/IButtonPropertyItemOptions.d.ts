/* IMPORT */ import { ButtonPropertyItemVariant, IPropertyItemOptionsBase, LocalizedString } from '../index';

/**
 * Optional properties for Button property item
 * 
 * Button 属性项的可选属性
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     * 
     * 若为 true，则隐藏标签文本。默认情况下，标签文本可见。
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * Icon image of the property item.
     * 
     * 属性项的图标图像。
     */
    icon?: string;
    /**
     * @remarks
     * Localized title of the property item.
     * 
     * 属性项的本地化标题。
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item.
     * 
     * 属性项的提示信息描述。
     */
    tooltip?: LocalizedString;
    /**
     * @remarks
     * The variant for the button. By default it is Primary.
     * 
     * 按钮的样式。默认为 Primary。
     */
    variant?: ButtonPropertyItemVariant;
}