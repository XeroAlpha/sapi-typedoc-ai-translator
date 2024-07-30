/* IMPORT */ import { PropertyBag } from '../index';

/**
 * Callback to execute when a value of a property item is
 * updated.
 * 
 * 当属性项的值被更新时执行的回调。
 */
export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (
    obj: T,
    property: Prop,
    oldValue: object,
    newValue: object,
) => void;