/* IMPORT */ import { IDropdownItem } from '../index';

/**
 * Dropdown property item specific functionality
 * 
 * 下拉属性项特有的功能。
 */
export interface IDropdownPropertyItemMixIn {
    /**
     * @remarks
     * Used to update the Dropdown options in the control. Will
     * trigger onChange with -1 as the old value due to the list
     * changing entries.
     * 
     * 用于更新控件中的下拉选项。由于列表条目的更改，会触发 `onChange` 事件，并将旧值设置为 -1。
     */
    updateDropdownItems(dropdownItems: IDropdownItem[], newValue: number): void;
}