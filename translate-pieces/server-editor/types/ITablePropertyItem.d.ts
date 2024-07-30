/* IMPORT */ import { IPropertyItem, IPropertyTableCellItem, PropertyBag } from '../index';

/**
 * A property item which supports Table properties
 * 
 * 支持表格属性的属性项
 */
export type ITablePropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    /**
     * Updates a specific cell within the table
     * 
     * 更新表格中的特定单元格
     * 
     * @param dataCell - The cell to be updated
     * @param row - The row index of the cell
     * @param column - The column index of the cell
     */
    updateCell(dataCell: IPropertyTableCellItem, row: number, column: number): void;
    /**
     * Updates a specific row within the table
     * 
     * 更新表格中的特定行
     * 
     * @param dataRow - The row to be updated
     * @param row - The row index
     */
    updateRow(dataRow: IPropertyTableCellItem[], row: number): void;
    /**
     * Replaces all existing data in the table with new data
     * 
     * 使用新数据替换表格中所有现有数据
     * 
     * @param newData - The new data for the table
     */
    updateTable(newData: IPropertyTableCellItem[][]): void;
};