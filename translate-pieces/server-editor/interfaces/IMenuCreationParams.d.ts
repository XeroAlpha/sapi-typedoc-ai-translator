/**
 * Properties required to create a Menu
 * 
 * 创建菜单所需的属性。
 */
export interface IMenuCreationParams {
    /**
     * @remarks
     * Whether the menu should show a checkmark
     * 
     * 是否显示菜单的勾选标记。
     */
    checked?: boolean;
    /**
     * @remarks
     * Whether the menu should be enabled or disabled
     * 
     * 菜单是否启用或禁用。
     */
    enabled?: boolean;
    /**
     * @remarks
     * Localized display text of the menu
     * 
     * 菜单的本地化显示文本。
     */
    label: string;
    /**
     * @remarks
     * Custom unique identifier that will replace random id
     * 
     * 自定义唯一标识符，将替换随机ID。
     */
    uniqueId?: string;
}