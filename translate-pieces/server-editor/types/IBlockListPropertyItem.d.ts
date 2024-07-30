/* IMPORT */ import { IPropertyItem, PropertyBag } from '../index';

/**
 * A property item which supports BlockList properties
 * 
 * 支持 BlockList 属性的属性项
 */
export type IBlockListPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateBlockList(newBlockList: string[]): void;
}; 

// 在这里，注释已经直接翻译为了中文，并且遵循了原注释的格式。类型定义描述了一个同时具有属性项功能和更新方块列表能力的接口。