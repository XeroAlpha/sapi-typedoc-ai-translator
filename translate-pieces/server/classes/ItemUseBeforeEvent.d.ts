/* IMPORT */ import { ItemUseAfterEvent } from '../index';

/**
 * Contains information related to an item being used.
 * 
 * 包含与正在使用物品相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseBeforeEvent extends ItemUseAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     * 
     * 如果设置为 true，这将取消物品使用行为。
     */
    cancel: boolean;
}