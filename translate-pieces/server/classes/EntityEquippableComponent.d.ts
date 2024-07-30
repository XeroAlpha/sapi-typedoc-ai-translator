/* IMPORT */ import { ContainerSlot, EntityComponent, EquipmentSlot, ItemStack } from '../index';

/**
 * Provides access to a mob's equipment slots. This component
 * exists for all mob entities.
 * @example givePlayerElytra.ts
 * ```typescript
 * // 给玩家配备elytra披风
 * import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function giveEquipment(player: Player) {
 *     const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
 *     if (equipmentCompPlayer) {
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
 *     }
 * }
 * ```
 * @example givePlayerEquipment.ts
 * ```typescript
 * // 给玩家一些装备
 * import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
 * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
 *
 * function giveEquipment(player: Player) {
 *     const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
 *     if (equipmentCompPlayer) {
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
 *         equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
 *     } else {
 *         console.warn('在玩家身上未找到装备组件');
 *     }
 * }
 * ```
 */
// @ts-ignore 允许原生定义类继承
export class EntityEquippableComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:equippable';
    /**
     * @remarks
     * Gets the equipped item for the given EquipmentSlot.
     *
     * 获取给定 EquipmentSlot 的装备物品。
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand"
     * 装备槽位。例如，“头”，“胸”，“副手”
     * @returns
     * Returns the item equipped to the given EquipmentSlot. If
     * empty, returns undefined.
     * 返回装备到给定 EquipmentSlot 的物品。如果为空，返回 undefined。
     * @throws This function can throw errors.
     * 此函数可能抛出错误。
     */
    getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined;
    /**
     * @remarks
     * Gets the ContainerSlot corresponding to the given
     * EquipmentSlot.
     *
     * 获取对应于给定 EquipmentSlot 的 ContainerSlot。
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand".
     * 装备槽位。例如，“头”，“胸”，“副手”。
     * @returns
     * Returns the ContainerSlot corresponding to the given
     * EquipmentSlot.
     * 返回对应于给定 EquipmentSlot 的 ContainerSlot。
     * @throws This function can throw errors.
     * 此函数可能抛出错误。
     */
    getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot;
    /**
     * @remarks
     * Replaces the item in the given EquipmentSlot.
     *
     * 替换给定 EquipmentSlot 中的物品。
     *
     * This function can't be called in read-only mode.
     * 此函数无法在只读模式下调用。
     *
     * @param equipmentSlot
     * The equipment slot. e.g. "head", "chest", "offhand".
     * 装备槽位。例如，“头”，“胸”，“副手”。
     * @param itemStack
     * The item to equip. If undefined, clears the slot.
     * 要装备的物品。如果为 undefined，则清除槽位。
     * @throws This function can throw errors.
     * 此函数可能抛出错误。
     */
    setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean;
}