/* IMPORT */ import { IPropertyItemBase, LayoutAlignment, LocalizedString } from '../index';

/**
 * A property item which supports Vector3 properties
 * 
 * 支持 Vector3 属性的属性项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface ITextPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     * 
     * 属性项的当前值。
     */
    readonly value: Readonly<LocalizedString>;
    /**
     * @remarks
     * Gets layout alignment of the property item.
     * 
     * 获取属性项的布局对齐方式。
     */
    setAlignment(alignment: LayoutAlignment): void;
    /**
     * @remarks
     * Sets title of the property item.
     * 
     * 设置属性项的标题。
     */
    setTitle(title: LocalizedString | undefined): void;
}