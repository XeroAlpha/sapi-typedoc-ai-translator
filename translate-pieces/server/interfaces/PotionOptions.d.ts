/* IMPORT */ import { PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 * Options for use in creating potions. See
 * ItemStack.createPotion.
 * 
 * 用于制作药水的选项。参见 ItemStack.createPotion。
 */
export interface PotionOptions {
    /**
     * @remarks
     * The type of potion effect to create. See
     * @minecraft/vanilla-data.MinecraftPotionEffectTypes.
     * 
     * 要创建的药水效果类型。参见 @minecraft/vanilla-data.MinecraftPotionEffectTypes。
     */
    effect: PotionEffectType | string;
    /**
     * @remarks
     * Optional potion liquid, defaults to 'Regular'. See
     * @minecraft/vanilla-data.MinecraftPotionLiquidTypes.
     * 
     * 可选的药水液体，默认为 'Regular'。参见 @minecraft/vanilla-data.MinecraftPotionLiquidTypes。
     */
    liquid?: PotionLiquidType | string;
    /**
     * @remarks
     * Optional potion modifier, defaults to 'Normal'. See
     * @minecraft/vanilla-data.MinecraftPotionModifierTypes.
     * 
     * 可选的药水强化，默认为 'Normal'。参见 @minecraft/vanilla-data.MinecraftPotionModifierTypes。
     */
    modifier?: PotionModifierType | string;
}