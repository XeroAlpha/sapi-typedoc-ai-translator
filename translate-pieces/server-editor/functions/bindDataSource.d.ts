/* IMPORT */ import { IPropertyPane, PropertyBag } from '../index';

/**
 * @remarks
 * Takes the input object (a property bag of values) and bind
 * it to the pane as a data source. UI child elements of the
 * pane will be updated when the values in the object change,
 * and vice versa.
 * 
 * 将输入对象（值的属性包）作为数据源绑定到窗格上。
 * 当对象中的值发生变化时，窗格的 UI 子元素将会被更新，
 * 反之亦然。
 *
 * @param propertyPane
 * The property pane to bind the property bag to.
 * 
 * 要将属性包绑定到的属性窗格。
 * @param target
 * The property bag to bind to the pane.
 * 
 * 要绑定到窗格的属性包。
 */
export declare function bindDataSource<T extends PropertyBag, Prop extends keyof T & string>(
    propertyPane: IPropertyPane,
    target: T,
): T;