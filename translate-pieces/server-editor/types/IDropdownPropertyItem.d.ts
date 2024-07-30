/* IMPORT */ import { IDropdownPropertyItemMixIn, IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports Dropdown properties
 * 
 * 支持下拉选择属性的属性项。
 */
export type IDropdownPropertyItem<
    T extends Omit<PropertyBag, Prop> & {
        [key in Prop]: number;
    },
    Prop extends keyof T & string,
> = IPropertyItem<T, Prop> & IDropdownPropertyItemMixIn;