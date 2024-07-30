/* IMPORT */ import { EnchantmentType } from '../index';

/**
 * This interface represents a specific leveled enchantment
 * that is applied to an item.
 * 
 * 此接口表示应用于物品的具体附魔等级。
 */
export interface Enchantment {
    /**
     * @remarks
     * The level of this enchantment instance.
     * 
     * 此附魔实例的等级。
     */
    level: number;
    /**
     * @remarks
     * The enchantment type of this instance.
     * 
     * 此实例的附魔类型。
     */
    type: EnchantmentType;
}