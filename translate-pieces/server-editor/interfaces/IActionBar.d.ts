/* IMPORT */ import { IActionBarItem, IActionBarItemCreationParams, NoArgsAction, RegisteredAction } from '../index';

/**
 * Manager for IActionBarItem objects.
 * 
 * IActionBarItem 对象的管理器。
 */
export interface IActionBar {
    /**
     * @remarks
     * Add a new action bar item to the collection.
     * 
     * 向集合中添加一个新的操作栏项。
     *
     * @param id
     * Unique item identifier.
     * 
     * 唯一项目标识符。
     * @param action
     * Action to be invoked.
     * 
     * 要调用的操作。
     * @param props
     * Configuration for the item to create.
     * 
     * 创建项目的配置。
     */
    registerItem(
        id: string,
        action: RegisteredAction<NoArgsAction>,
        props: IActionBarItemCreationParams,
    ): IActionBarItem;
    /**
     * @remarks
     * Remove an action item from the collection.
     * 
     * 从集合中移除一个操作项。
     *
     * @param id
     * Unique item identifier.
     * 
     * 唯一项目标识符。
     */
    unregisterItem(id: string): void;
}