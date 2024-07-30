/* IMPORT */ import { ItemCooldownComponent, ItemDurabilityComponent, ItemEnchantableComponent, ItemFoodComponent, ItemPotionComponent } from '../index';

/**
 * @beta
 * 
 * 一个映射类型，用于关联物品组件类型到其对应的组件实例。
 * 这包括冷却时间、耐久度、可附魔性、食物属性以及药水效果等组件。
 */
export type ItemComponentTypeMap = {
    cooldown: ItemCooldownComponent;
    durability: ItemDurabilityComponent;
    enchantable: ItemEnchantableComponent;
    food: ItemFoodComponent;
    'minecraft:cooldown': ItemCooldownComponent;
    'minecraft:durability': ItemDurabilityComponent;
    'minecraft:enchantable': ItemEnchantableComponent;
    'minecraft:food': ItemFoodComponent;
    'minecraft:potion': ItemPotionComponent;
    potion: ItemPotionComponent;
};