/**
 * The types of item components that are accessible via
 * function ItemStack.getComponent.
 * 
 * 可通过 ItemStack.getComponent 函数访问的物品组件类型。
 */
export enum ItemComponentTypes {
    /**
     * @remarks
     * The minecraft:cooldown component.
     * 
     * `minecraft:cooldown` 组件。
     */
    Cooldown = 'minecraft:cooldown',
    /**
     * @remarks
     * The minecraft:durability component.
     * 
     * `minecraft:durability` 组件。
     */
    Durability = 'minecraft:durability',
    /**
     * @remarks
     * The minecraft:enchantable component.
     * 
     * `minecraft:enchantable` 组件。
     */
    Enchantable = 'minecraft:enchantable',
    /**
     * @remarks
     * The minecraft:food component.
     * 
     * `minecraft:food` 组件。
     */
    Food = 'minecraft:food',
    /**
     * @beta
     */
    Potion = 'minecraft:potion',
}