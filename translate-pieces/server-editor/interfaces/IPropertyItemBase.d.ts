/* IMPORT */ import { PropertyItemType } from '../index';

/**
 * Common base for all property items
 * 
 * 所有属性项的基础接口。
 */
export interface IPropertyItemBase {
    /**
     * @remarks
     * If the item is enabled in the UI.
     * 
     * 该属性项在用户界面中是否启用。
     */
    enable: boolean;
    /**
     * @remarks
     * Unique ID for the property item.
     * 
     * 属性项的唯一标识符。
     */
    readonly id: string;
    /**
     * @remarks
     * The parent pane id.
     * 
     * 父面板的标识符。
     */
    readonly paneId: string;
    /**
     * @remarks
     * The type name of the target property.
     * 
     * 目标属性的类型名称。
     */
    readonly typeName: PropertyItemType;
    /**
     * @remarks
     * If the item should be visible in the UI.
     * 
     * 该属性项在用户界面中是否可见。
     */
    visible: boolean;
}