/* IMPORT */ import { IPropertyItemBase, LocalizedString } from '../index';

/**
 * A property item which supports Vector3 properties
 * 
 * 支持 Vector3 属性的属性项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IBoolPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     * 
     * 属性项的当前值。
     */
    readonly value: boolean;
    /**
     * @remarks
     * Sets title of the property item.
     * 
     * 设置属性项的标题。
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Sets tooltip description of the property item.
     * 
     * 设置属性项的工具提示描述。
     */
    setTooltip(title: LocalizedString | undefined): void;
}