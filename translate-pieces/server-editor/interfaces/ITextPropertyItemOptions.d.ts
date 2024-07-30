/* IMPORT */ import { IPropertyItemOptionsBase, LayoutAlignment, LocalizedString } from '../index';

/**
 * Optional properties for Text property item
 * 
 * Text 属性项的可选属性
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITextPropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Determines alignment of the text. If undefined, it will
     * default to left aligned.
     * 
     * 确定文本的对齐方式。如果未定义，则默认为左对齐。
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Adds a border around the text. If undefined, it will default
     * to true.
     * 
     * 在文本周围添加边框。如果未定义，则默认为 true。
     */
    border?: boolean;
    /**
     * @remarks
     * Localized title of the text item.
     * 
     * 文本项的本地化标题。
     */
    title?: LocalizedString;
}