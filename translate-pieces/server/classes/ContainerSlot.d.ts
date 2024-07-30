/* IMPORT */ import { InvalidContainerSlotError, ItemLockMode, ItemStack, ItemType, Vector3, minecraftcommon } from '../index';

/**
 * Represents a slot within a broader container (e.g., entity
 * inventory.)
 * 
 * 表示容器内的一个槽位（例如实体的物品栏）。
 */
export class ContainerSlot {
    private constructor();
    /**
     * @remarks
     * Number of the items in the stack. Valid values range between
     * 1-255. The provided value will be clamped to the item's
     * maximum stack size.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the value is outside the range of 1-255.
     * 
     * 物品堆叠的数量。有效值范围在1-255之间。提供的值会被限制在物品的最大堆叠尺寸内。
     * 
     * 此属性在只读模式下无法编辑。
     *
     * @throws
     * 如果值超出1-255的范围，则抛出异常。
     */
    amount: number;
    /**
     * @remarks
     * Returns whether the item is stackable. An item is considered
     * stackable if the item's maximum stack size is greater than 1
     * and the item does not contain any custom data or properties.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回物品是否可堆叠。若物品的最大堆叠尺寸大于1且物品不包含任何自定义数据或属性，则认为该物品可堆叠。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly isStackable: boolean;
    /**
     * @remarks
     * Gets or sets whether the item is kept on death.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     * 
     * 获取或设置物品在死亡时是否保留。
     *
     * 此属性在只读模式下无法编辑。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     */
    keepOnDeath: boolean;
    /**
     * @remarks
     * Gets or sets the item's lock mode. The default value is
     * `ItemLockMode.none`.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid.
     * 
     * 获取或设置物品的锁定模式。默认值为 `ItemLockMode.none`。
     *
     * 此属性在只读模式下无法编辑。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     */
    lockMode: ItemLockMode;
    /**
     * @remarks
     * The maximum stack size. This value varies depending on the
     * type of item. For example, torches have a maximum stack size
     * of 64, while eggs have a maximum stack size of 16.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 最大堆叠尺寸。此值根据物品类型而变化。例如，火把的最大堆叠尺寸为64，而鸡蛋的最大堆叠尺寸为16。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly maxAmount: number;
    /**
     * @remarks
     * Given name of this stack of items. The name tag is displayed
     * when hovering over the item. Setting the name tag to an
     * empty string or `undefined` will remove the name tag.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * the length exceeds 255 characters.
     * 
     * 这组物品的名称。当鼠标悬停在物品上时会显示名称标签。将名称标签设置为空字符串或 `undefined` 将移除名称标签。
     *
     * 此属性在只读模式下无法编辑。
     *
     * @throws
     * 若槽位的容器无效，或者长度超过255字符，则抛出异常。
     */
    nameTag?: string;
    /**
     * @remarks
     * The type of the item.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     * 
     * 物品的类型。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link InvalidContainerSlotError}
     */
    readonly 'type': ItemType;
    /**
     * @remarks
     * Identifier of the type of items for the stack. If a
     * namespace is not specified, 'minecraft:' is assumed.
     * Examples include 'wheat' or 'apple'.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 物品堆叠的类型标识符。如果没有指定命名空间，则假定为 'minecraft:'。示例包括 'wheat' 或 'apple'。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    readonly typeId: string;
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * item stack.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 清除物品堆叠上设置的所有动态属性。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Returns whether the item within this container slot can be
     * destroyed.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回容器槽位内的物品是否可以被摧毁。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanDestroy(): string[];
    /**
     * @remarks
     * Returns if the item in this container slot can be placed on.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回容器槽位内的物品是否可以放置。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    getCanPlaceOn(): string[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果属性未设置则返回 undefined。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this item stack.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回此物品堆叠上使用的可用动态属性标识符集合。
     *
     * @returns
     * 设置在此实体上的动态属性的字符串数组。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回为此实体当前存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告标志很有用——例如，如果实体有数兆字节的关联动态属性，那么它在各种设备上加载可能会很慢。
     *
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Creates an exact copy of the item stack, including any
     * custom data or properties.
     *
     * @returns
     * Returns a copy of the item in the slot. Returns undefined if
     * the slot is empty.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 创建物品堆叠的精确副本，包括任何自定义数据或属性。
     *
     * @returns
     * 返回槽位中物品的副本。如果槽位为空，则返回 undefined。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getItem(): ItemStack | undefined;
    /**
     * @remarks
     * Returns the lore value - a secondary display string - for an
     * ItemStack.
     *
     * @returns
     * An array of lore strings. If the item does not have lore,
     * returns an empty array.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回 ItemStack 的描述值——一个辅助显示字符串。
     *
     * @returns
     * 描述字符串数组。如果物品没有描述，则返回空数组。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getLore(): string[];
    /**
     * @remarks
     * Returns all tags for the item in the slot.
     *
     * @returns
     * Returns all tags for the item in the slot. Return an empty
     * array if the the slot is empty.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回槽位中物品的所有标签。
     *
     * @returns
     * 返回槽位中物品的所有标签。如果槽位为空，则返回空数组。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns true if this slot has an item.
     *
     * @throws This function can throw errors.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 如果此槽位有物品，则返回 true。
     *
     * @throws 此函数可能抛出错误。
     *
     * {@link InvalidContainerSlotError}
     */
    hasItem(): boolean;
    /**
     * @remarks
     * Returns whether the item in the slot slot has the given tag.
     *
     * @param tag
     * The item tag.
     * @returns
     * Returns false when the slot is empty or the item in the slot
     * does not have the given tag.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回槽位中的物品是否具有给定的标签。
     *
     * @param tag
     * 物品标签。
     * @returns
     * 如果槽位为空，或者槽位中的物品没有给定的标签，则返回 false。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether this item stack can be stacked with the
     * given `itemStack`. This is determined by comparing the item
     * type and any custom data and properties associated with the
     * item stacks. The amount of each item stack is not taken into
     * consideration.
     *
     * @param itemStack
     * The ItemStack that is being compared.
     * @returns
     * Returns whether this item stack can be stacked with the
     * given `itemStack`.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {@link InvalidContainerSlotError}
     * 
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。这是通过比较物品类型和与物品堆叠关联的任何自定义数据和属性来确定的。每个物品堆叠的数量不作为考虑因素。
     *
     * @param itemStack
     * 要进行比较的 ItemStack。
     * @returns
     * 返回此物品堆叠是否可以与给定的 `itemStack` 堆叠。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {@link InvalidContainerSlotError}
     */
    isStackableWith(itemStack: ItemStack): boolean;
    /**
     * @remarks
     * Returns whether the ContainerSlot is valid. The container
     * slot is valid if the container exists and is loaded, and the
     * slot index is valid.
     *
     */
    isValid(): boolean;
    /**
     * @remarks
     * The list of block types this item can break in Adventure
     * mode. The block names are displayed in the item's tooltip.
     * Setting the value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {@link InvalidContainerSlotError}
     * 
     * 冒险模式下此物品可以破坏的方块类型列表。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param blockIdentifiers
     * 由其标识符给出的方块列表。
     * @throws
     * 若槽位的容器无效，或者提供的任何方块标识符无效，则抛出异常。
     *
     * {@link Error}
     *
     * {\link InvalidContainerSlotError}
     */
    setCanDestroy(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * The list of block types this item can be placed on in
     * Adventure mode. This is only applicable to block items. The
     * block names are displayed in the item's tooltip. Setting the
     * value to undefined will clear the list.
     *
     * This function can't be called in read-only mode.
     *
     * @param blockIdentifiers
     * The list of blocks, given by their identifiers.
     * @throws
     * Throws if the slot's container is invalid. Also throws if
     * any of the provided block identifiers are invalid.
     *
     * {@link Error}
     *
     * {\link InvalidContainerSlotError}
     * 
     * 冒险模式下此物品可以放置的方块类型列表。这仅适用于方块物品。方块名称会显示在物品的工具提示中。将值设置为 undefined 将清除列表。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param blockIdentifiers
     * 由其标识符给出的方块列表。
     * @throws
     * 若槽位的容器无效，或者提供的任何方块标识符无效，则抛出异常。
     *
     * {\link Error}
     *
     * {\link InvalidContainerSlotError}
     */
    setCanPlaceOn(blockIdentifiers?: string[]): void;
    /**
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {\link Error}
     *
     * {\link InvalidContainerSlotError}
     * 
     * 将指定属性设置为值。
     *
     * @param identifier
     * 属性标识符。
     * @param value
     * 要设置的属性的数据值。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {\link Error}
     *
     * {\link InvalidContainerSlotError}
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets the given ItemStack in the slot, replacing any existing
     * item.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The ItemStack to be placed in the slot.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {\link InvalidContainerSlotError}
     * 
     * 在槽位中设置给定的 ItemStack，替换任何现有物品。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param itemStack
     * 要放置在槽位中的 ItemStack。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {\link InvalidContainerSlotError}
     */
    setItem(itemStack?: ItemStack): void;
    /**
     * @remarks
     * Sets the lore value - a secondary display string - for an
     * ItemStack.
     *
     * This function can't be called in read-only mode.
     *
     * @param loreList
     * A list of lore strings. Setting this argument to undefined
     * will clear the lore.
     * @throws
     * Throws if the slot's container is invalid.
     *
     * {\link Error}
     *
     * {\link InvalidContainerSlotError}
     * 
     * 设置 ItemStack 的描述值——一个辅助显示字符串。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param loreList
     * 描述字符串列表。将此参数设置为 undefined 将清除描述。
     * @throws
     * 若槽位的容器无效，则抛出异常。
     *
     * {\link Error}
     *
     * {\link InvalidContainerSlotError}
     */
    setLore(loreList?: string[]): void;
}