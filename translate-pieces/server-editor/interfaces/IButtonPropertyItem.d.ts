/* IMPORT */ import { IPropertyItemBase, LocalizedString, NoArgsAction, RegisteredAction } from '../index';

/**
 * A property item which supports Button properties
 * 
 * 支持按钮属性的属性项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IButtonPropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Replace action assigned to the button.
     * 
     * 替换分配给按钮的操作。
     *
     * @param action
     * New action to replace the existing with.
     * 
     * 要替换现有操作的新操作。
     */
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    /**
     * @remarks
     * Updates icon of the button.
     * 
     * 更新按钮的图标。
     *
     * @param icon
     * New button icon.
     * 
     * 新的按钮图标。
     */
    setIcon(icon: string | undefined): void;
    /**
     * @remarks
     * Updates title of the button.
     * 
     * 更新按钮的标题。
     *
     * @param title
     * New button title.
     * 
     * 新的按钮标题。
     */
    setTitle(title: LocalizedString | undefined): void;
    /**
     * @remarks
     * Updates tooltip description of the button.
     * 
     * 更新按钮的工具提示描述。
     *
     * @param tooltip
     * New button tooltip.
     * 
     * 新的按钮工具提示。
     */
    setTooltip(tooltip: LocalizedString | undefined): void;
}