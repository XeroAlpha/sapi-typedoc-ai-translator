/**
 * Properties of dropdown property item children
 * 
 * 下拉选项属性项的子项属性
 */
export interface IDropdownItem {
    /**
     * @remarks
     * Localized display text of the dropdown item.
     * 
     * 下拉选项的本地化显示文本。
     */
    readonly label: string;
    /**
     * @remarks
     * The selectable value of the dropdown item.
     * 
     * 下拉选项的可选值。
     */
    readonly value: number;
}