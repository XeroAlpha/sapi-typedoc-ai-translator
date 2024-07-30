/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsBlockList extends IPropertyItemOptions {
    /**
     * @remarks
     * A list of block identifiers.
     * 
     * 方块标识符列表。
     */
    blockList: string[];
}