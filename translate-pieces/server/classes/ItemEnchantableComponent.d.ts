/* IMPORT */ import { Enchantment, EnchantmentLevelOutOfBoundsError, EnchantmentSlot, EnchantmentType, EnchantmentTypeNotCompatibleError, EnchantmentTypeUnknownIdError, ItemComponent } from '../index';

/**
 * 当物品拥有此组件时，可以向该物品应用附魔。
 * @example givePlayerIronFireSword.ts
 * ```typescript
 * // 生成多个物品堆叠
 * import { EnchantmentType, ItemComponentTypes, ItemStack, Player } from '@minecraft/server';
 * import { MinecraftItemTypes, MinecraftEnchantmentTypes } from '@minecraft/vanilla-data';
 *
 * function giveFireSword(player: Player) {
 *     const ironFireSword = new ItemStack(MinecraftItemTypes.DiamondSword, 1);
 *
 *     const enchantments = ironFireSword?.getComponent(ItemComponentTypes.Enchantable);
 *     if (enchantments) {
 *         enchantments.addEnchantment({ type: new EnchantmentType(MinecraftEnchantmentTypes.FireAspect), level: 1 });
 *     }
 *
 *     const inventory = player.getComponent('minecraft:inventory');
 *     if (inventory === undefined || inventory.container === undefined) {
 *         return;
 *     }
 *     inventory.container.setItem(0, ironFireSword);
 * }
 * ```
 */
// @ts-ignore 允许原生定义类的继承
export class ItemEnchantableComponent extends ItemComponent {
    private constructor();
    /**
     * @throws 使用此属性时可能抛出异常。
     */
    readonly slots: EnchantmentSlot[];
    static readonly componentId = 'minecraft:enchantable';
    /**
     * @remarks
     * 向物品堆叠添加附魔。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在，则抛出此异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果附魔等级超出给定附魔类型的允许范围，则抛出此异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果附魔与物品堆叠不兼容，则抛出此异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantment(enchantment: Enchantment): void;
    /**
     * @remarks
     * 向物品堆叠添加一系列附魔。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param enchantments
     * 要添加的附魔列表。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果任何附魔类型不存在，则抛出此异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果任何附魔等级超出给定附魔类型的允许范围，则抛出此异常。
     *
     * ScriptItemEnchantmentTypeNotCompatibleError: 如果任何附魔与物品堆叠不兼容，则抛出此异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeNotCompatibleError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    addEnchantments(enchantments: Enchantment[]): void;
    /**
     * @remarks
     * 检查是否能向物品堆叠添加附魔。
     *
     * @param enchantment
     * 要添加的附魔接口。
     * @returns
     * 如果附魔可以添加到物品堆叠，则返回true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在，则抛出此异常。
     *
     * ScriptItemEnchantmentLevelOutOfBoundsError: 如果附魔等级超出给定附魔类型的允许范围，则抛出此异常。
     *
     *
     * {@link EnchantmentLevelOutOfBoundsError}
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    canAddEnchantment(enchantment: Enchantment): boolean;
    /**
     * @remarks
     * 从物品堆叠获取指定类型的附魔。
     *
     * @param enchantmentType
     * 要获取的附魔类型。
     * @returns
     * 如果物品堆叠上存在该附魔，则返回该附魔。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在，则抛出此异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    getEnchantment(enchantmentType: EnchantmentType | string): Enchantment | undefined;
    /**
     * @remarks
     * 获取物品堆叠上的所有附魔。
     *
     * @returns
     * 返回物品堆叠上的附魔列表。
     * @throws 此函数可能抛出错误。
     */
    getEnchantments(): Enchantment[];
    /**
     * @remarks
     * 检查物品堆叠是否具有给定的附魔类型。
     *
     * @param enchantmentType
     * 要检查的附魔类型。
     * @returns
     * 如果物品堆叠具有该附魔类型，则返回true。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在，则抛出此异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     */
    hasEnchantment(enchantmentType: EnchantmentType | string): boolean;
    /**
     * @remarks
     * 移除应用于此物品堆叠的所有附魔。
     *
     * 此函数不能在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    removeAllEnchantments(): void;
    /**
     * @remarks
     * 移除指定类型的附魔。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param enchantmentType
     * 要移除的附魔类型。
     * @throws
     * ScriptItemEnchantmentUnknownIdError: 如果附魔类型不存在，则抛出此异常。
     *
     *
     * {@link EnchantmentTypeUnknownIdError}
     *
     * {@link Error}
     */
    removeEnchantment(enchantmentType: EnchantmentType | string): void;
}