/* IMPORT */ import { ItemUseOnAfterEvent } from '../index';

/**
 * Contains information related to an item being used on a
 * block.
 * 
 * 包含物品在方块上使用的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemUseOnBeforeEvent extends ItemUseOnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, this will cancel the item use behavior.
     *
     * 如果设置为 `true`，这将取消物品使用行为。
     */
    cancel: boolean;
}