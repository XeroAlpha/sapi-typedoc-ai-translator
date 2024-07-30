/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * Contains a catalog of Minecraft Enchantment Types that are
 * available in this world.
 * 
 * 包含了世界中可用的 Minecraft 附魔类型的目录。
 */
export class EnchantmentTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an enchantment with the specified identifier.
     * 
     * 根据指定的标识符获取附魔。
     *
     * @param enchantmentId
     * Identifier of the enchantment.  For example,
     * "minecraft:flame".
     * 
     * 附魔的标识符。例如，“minecraft:flame”。
     * @returns
     * If available, returns an EnchantmentType object that
     * represents the specified enchantment.
     * 
     * 如果附魔可用，则返回代表指定附魔的 EnchantmentType 对象。
     */
    static get(enchantmentId: string): EnchantmentType | undefined;
    /**
     * @rc
     * @remarks
     * Returns a collection of all available enchantment types.
     * 
     * 返回所有可用附魔类型的集合。
     */
    static getAll(): EnchantmentType[];
}