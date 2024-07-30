/* IMPORT */ import { IMenuCreationParams, NoArgsAction, RegisteredAction } from '../index';

export interface IMenu {
    /**
     * @remarks
     * If defined, the menu will show a checked or unchecked
     * checkbox.
     * 
     * 如果定义了，菜单会显示一个选中或未选中的复选框。
     */
    checked?: boolean;
    /**
     * @remarks
     * The menu will be in either an enabled or disabled state
     * 
     * 菜单将处于启用或禁用状态之一。
     */
    enabled: boolean;
    /**
     * @remarks
     * Unique ID for the menu
     * 
     * 菜单的唯一ID。
     */
    readonly id: string;
    /**
     * @remarks
     * Sub menus of this menu
     * 
     * 此菜单的子菜单。
     */
    readonly submenu: IMenu[];
    addItem(params: IMenuCreationParams, action?: RegisteredAction<NoArgsAction>): IMenu;
    dispose(): void;
    hide(): void;
    replaceAction(action: RegisteredAction<NoArgsAction>): void;
    show(): void;
}