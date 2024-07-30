/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsDataPicker extends IPropertyItemOptions {
    /**
     * @remarks
     * Used to hold the entries allowed in the block/entity picker
     * 
     * 用于保存在方块/实体选择器中允许的条目
     */
    allowedEntries?: string[];
}