/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 * Used for accessing all potion effects, liquids, and
 * modifiers currently available for use within the world.
 * 
 * 用于访问当前世界中所有可用的药水效果、液体及修饰符。
 */
export class Potions {
    private constructor();
    /**
     * @remarks
     * Retrieves a type handle for a specified potion effect id.
     *
     * 根据指定的药水效果 ID 获取类型句柄。
     * 
     * @returns
     * A type handle wrapping the valid effect id, or undefined for
     * an invalid effect id.
     * 
     * 包含有效效果 ID 的类型句柄，或对于无效的效果 ID 返回 undefined。
     */
    static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion liquid id.
     *
     * 根据指定的药水液体 ID 获取类型句柄。
     * 
     * @returns
     * A type handle wrapping the valid liquid id, or undefined for
     * an invalid liquid id.
     * 
     * 包含有效液体 ID 的类型句柄，或对于无效的液体 ID 返回 undefined。
     */
    static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined;
    /**
     * @remarks
     * Retrieves a type handle for a specified potion modifier id.
     *
     * 根据指定的药水修饰符 ID 获取类型句柄。
     * 
     * @returns
     * A type handle wrapping the valid modifier id, or undefined
     * for an invalid modifier id.
     * 
     * 包含有效修饰符 ID 的类型句柄，或对于无效的修饰符 ID 返回 undefined。
     */
    static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined;
}