/* IMPORT */ import { ColorPickerVariant, IPropertyItemOptions } from '../index';

/**
 * Extends the IPropertyItemOptions interface for color picker properties.
 * 
 * 扩展 IPropertyItemOptions 接口以支持颜色选择器属性。
 */
export interface IPropertyItemOptionsColorPicker extends IPropertyItemOptions {
    showAlpha?: boolean;
    /**
     * Determines whether to display the alpha channel in the color picker.
     * 
     * 决定是否在颜色选择器中显示 alpha 通道。
     */
    variant?: ColorPickerVariant;
    /**
     * Specifies the variant of the color picker.
     * 
     * 指定颜色选择器的变体。
     */
}