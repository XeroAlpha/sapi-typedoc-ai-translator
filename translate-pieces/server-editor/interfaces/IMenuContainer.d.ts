/* IMPORT */ import { IMenu, IMenuCreationParams } from '../index';

/**
 * Manager and container for IMenu objects
 * 
 * IMenu 对象的管理器和容器
 */
export interface IMenuContainer {
    /**
     * @remarks
     * Create a top level item in the container.
     * 
     * 在容器中创建顶级项。
     *
     * @param props
     * Configuration for the menu to create
     * 
     * 要创建菜单的配置信息
     */
    createMenu(props: IMenuCreationParams): IMenu;
    /**
     * @remarks
     * Search for a menu item, if it's not found defer it to next
     * tick.
     * 
     * 搜索菜单项，如果没有找到则将其延迟到下一刻执行。
     *
     * @param id
     * Menu identifier
     * 
     * 菜单标识符
     */
    getMenu(id: string): Promise<IMenu>;
}