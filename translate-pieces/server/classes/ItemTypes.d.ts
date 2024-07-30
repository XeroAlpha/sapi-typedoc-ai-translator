/* IMPORT */ import { ItemType } from '../index';

/**
 * @rc
 * Returns the set of item types registered within Minecraft.
 * 
 * 返回 Minecraft 中注册的所有物品类型集合。
 */
export class ItemTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific item type, if available within Minecraft.
     * 
     * 如果 Minecraft 中存在，返回指定的物品类型。
     */
    static get(itemId: string): ItemType | undefined;
    /**
     * @remarks
     * Retrieves all available item types registered within
     * Minecraft.
     * 
     * 获取 Minecraft 中注册的所有可用物品类型。
     */
    static getAll(): ItemType[];
}