/* IMPORT */ import { IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports Vector3 properties
 * 
 * 支持 Vector3 属性的属性项
 */
export type IVector3PropertyItem_deprecated<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<
    T,
    Prop
> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
}; 

// 说明：由于这段代码主要是定义了一个类型，其中包含的方法和属性的含义较为直接，因此在翻译时主要关注了语法结构和术语的准确转换，以确保代码的逻辑和功能得以正确传达。