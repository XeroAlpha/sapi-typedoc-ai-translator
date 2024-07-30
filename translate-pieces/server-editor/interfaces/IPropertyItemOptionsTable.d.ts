/* IMPORT */ import { IPropertyItemOptions, IPropertyTableCellItem } from '../index';

/**
 * Extends the IPropertyItemOptions interface by adding a
 * table-specific data structure and an optional title ID.
 * 
 * 扩展了 IPropertyItemOptions 接口，添加了一个针对表格的特有数据结构及可选的标题 ID。
 */
export interface IPropertyItemOptionsTable extends IPropertyItemOptions {
    defaultData: IPropertyTableCellItem[][];
    titleId?: string;
}