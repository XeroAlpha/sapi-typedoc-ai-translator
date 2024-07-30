/* IMPORT */ import { ItemComponent, PotionEffectType, PotionLiquidType, PotionModifierType } from '../index';

/**
 * @beta
 * When present on an item, this item is a potion item.
 * 
 * 当物品具有此组件时，该物品是一种药水。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemPotionComponent extends ItemComponent {
    private constructor();
    /**
     * @remarks
     * The PotionEffectType associated with the potion item.
     *
     * @throws This property can throw when used.
     * 
     * @remarks
     * 与药水物品相关联的 PotionEffectType。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly potionEffectType: PotionEffectType;
    /**
     * @remarks
     * The PotionLiquidType associated with the potion item.
     *
     * @throws This property can throw when used.
     * 
     * @remarks
     * 与药水物品相关联的 PotionLiquidType。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly potionLiquidType: PotionLiquidType;
    /**
     * @remarks
     * The PotionModifierType associated with the potion item.
     *
     * @throws This property can throw when used.
     * 
     * @remarks
     * 与药水物品相关联的 PotionModifierType。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly potionModifierType: PotionModifierType;
    static readonly componentId = 'minecraft:potion';
}