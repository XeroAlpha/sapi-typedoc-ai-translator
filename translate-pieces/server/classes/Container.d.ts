/* IMPORT */ import { ContainerSlot, ItemStack } from '../index';

/**
 * Represents a container that can hold sets of items. Used
 * with entities such as Players, Chest Minecarts, Llamas, and
 * more.
 * @example containers.js
 * ```typescript
 * let leftLocation = test.worldLocation({ x: 2, y: 2, z: 2 }); // left chest location
 * let rightLocation = test.worldLocation({ x: 4, y: 2, z: 2 }); // right chest location
 *
 * const chestCart = test.spawn("chest_minecart", { x: 6, y: 2, z: 2 });
 *
 * let leftChestBlock = defaultDimension.getBlock(leftLocation);
 * let rightChestBlock = defaultDimension.getBlock(rightLocation);
 *
 * leftChestBlock.setType(MinecraftBlockTypes.chest);
 * rightChestBlock.setType(MinecraftBlockTypes.chest);
 *
 * const rightChestInventoryComp = rightChestBlock.getComponent("inventory");
 * const leftChestInventoryComp = leftChestBlock.getComponent("inventory");
 * const chestCartInventoryComp = chestCart.getComponent("inventory");
 *
 * const rightChestContainer = rightChestInventoryComp.container;
 * const leftChestContainer = leftChestInventoryComp.container;
 * const chestCartContainer = chestCartInventoryComp.container;
 *
 * rightChestContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
 * test.assert(rightChestContainer.getItem(0).id === "apple", "Expected apple in right container slot index 0");
 *
 * rightChestContainer.setItem(1, new ItemStack(Items.emerald, 10, 0));
 * test.assert(rightChestContainer.getItem(1).id === "emerald", "Expected emerald in right container slot index 1");
 *
 * test.assert(rightChestContainer.size === 27, "Unexpected size: " + rightChestContainer.size);
 * test.assert(
 *   rightChestContainer.emptySlotsCount === 25,
 *   "Unexpected emptySlotsCount: " + rightChestContainer.emptySlotsCount
 * );
 *
 * const itemStack = rightChestContainer.getItem(0);
 * test.assert(itemStack.id === "apple", "Expected apple");
 * test.assert(itemStack.amount === 10, "Expected 10 apples");
 * test.assert(itemStack.data === 0, "Expected 0 data");
 *
 * leftChestContainer.setItem(0, new ItemStack(Items.cake, 10, 0));
 *
 * rightChestContainer.transferItem(0, 4, chestCartContainer); // transfer the apple from the right chest to a chest cart
 * rightChestContainer.swapItems(1, 0, leftChestContainer); // swap the cake and emerald
 *
 * test.assert(chestCartContainer.getItem(4).id === "apple", "Expected apple in left container slot index 4");
 * test.assert(leftChestContainer.getItem(0).id === "emerald", "Expected emerald in left container slot index 0");
 * test.assert(rightChestContainer.getItem(1).id === "cake", "Expected cake in right container slot index 1");
 *
 * ```
 * 
 * 表示可以存放物品集合的容器。用于诸如玩家、装有箱子的小矿车、羊驼等实体。
 */
export class Container {
    private constructor();
    /**
     * @remarks
     * Count of the slots in the container that are empty.
     *
     * @throws
     * Throws if the container is invalid.
     * 
     * 空槽位的数量。
     * 
     * 如果容器无效，则抛出异常。
     */
    readonly emptySlotsCount: number;
    /**
     * @remarks
     * The number of slots in this container. For example, a
     * standard single-block chest has a size of 27. Note, a
     * player's inventory container contains a total of 36 slots, 9
     * hotbar slots plus 27 inventory slots.
     *
     * @throws
     * Throws if the container is invalid.
     * 
     * 容器中的槽位数量。例如，标准单格箱子的容量为27。注意，玩家的物品栏容器总共包含36个槽位，其中9个热键槽加上27个物品栏槽位。
     * 
     * 如果容器无效，则抛出异常。
     */
    readonly size: number;
    /**
     * @remarks
     * Adds an item to the container. The item is placed in the
     * first available slot(s) and can be stacked with existing
     * items of the same type. Note, use {@link Container.setItem}
     * if you wish to set the item in a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param itemStack
     * The stack of items to add.
     * @throws This function can throw errors.
     * 
     * 将物品添加到容器中。物品被放置在第一个可用的槽位，并且可以与相同类型的现有物品堆叠。注意，如果希望在特定槽位设置物品，请使用 {@link Container.setItem}。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param itemStack
     * 要添加的物品堆。
     * @throws 此函数可能会抛出错误。
     */
    addItem(itemStack: ItemStack): ItemStack | undefined;
    /**
     * @remarks
     * Clears all inventory items in the container.
     *
     * This function can't be called in read-only mode.
     *
     * @throws
     * Throws if the container is invalid.
     * 
     * 清空容器内的所有物品。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 如果容器无效，则抛出异常。
     */
    clearAll(): void;
    /**
     * @remarks
     * Gets an {@link ItemStack} of the item at the specified slot.
     * If the slot is empty, returns `undefined`. This method does
     * not change or clear the contents of the specified slot. To
     * get a reference to a particular slot, see {@link
     * Container.getSlot}.
     *
     * @param slot
     * Zero-based index of the slot to retrieve items from.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * @example getItem.ts
     * ```typescript
     * // A function that gets a copy of the first item in the player's hotbar
     * import { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';
     *
     * function getFirstHotbarItem(player: Player): ItemStack | undefined {
     *     const inventory = player.getComponent(EntityInventoryComponent.componentId);
     *     if (inventory && inventory.container) {
     *         return inventory.container.getItem(0);
     *     }
     *     return undefined;
     * }
     * ```
     * 
     * 获取指定槽位中的物品的 {@link ItemStack}。如果该槽位为空，则返回 `undefined`。此方法不会更改或清除指定槽位的内容。要获取指向特定槽位的引用，请参阅 {@link Container.getSlot}。
     * 
     * @param slot
     * 从该槽位获取物品的基于零的索引。
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
     * 
     * @example getItem.ts
     * ```typescript
     * // A function that gets a copy of the first item in the player's hotbar
     * import { Player, EntityInventoryComponent, ItemStack } from '@minecraft/server';
     *
     * function getFirstHotbarItem(player: Player): ItemStack | undefined {
     *     const inventory = player.getComponent(EntityInventoryComponent.componentId);
     *     if (inventory && inventory.container) {
     *         return inventory.container.getItem(0);
     *     }
     *     return undefined;
     * }
     * ```
     */
    getItem(slot: number): ItemStack | undefined;
    /**
     * @remarks
     * Returns a container slot. This acts as a reference to a slot
     * at the given index for this container.
     *
     * @param slot
     * The index of the slot to return. This index must be within
     * the bounds of the container.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * 
     * 返回容器的一个槽位。这作为对容器给定索引处的槽位的引用。
     * 
     * @param slot
     * 要返回的槽位的索引。此索引必须在容器的范围内。
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
     */
    getSlot(slot: number): ContainerSlot;
    /**
     * @remarks
     * Returns whether a container object (or the entity or block
     * that this container is associated with) is still available
     * for use in this context.
     *
     * 
     * 返回容器对象（或与该容器相关联的实体或方块）是否仍可用于当前上下文。
     */
    isValid(): boolean;
    /**
     * @remarks
     * Moves an item from one slot to another, potentially across
     * containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toSlot
     * Zero-based index of the slot to transfer an item to, on
     * `toContainer`.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example moveItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.moveItem(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     * 
     * 将物品从一个槽位移动到另一个槽位，可能跨容器进行。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param fromSlot
     * 从本容器的槽位中转移物品的基于零的索引。
     * @param toSlot
     * 在 `toContainer` 中转移物品的目标槽位的基于零的索引。
     * @param toContainer
     * 目标容器以转移物品。注意，这可以是与源相同的容器。
     * @throws
     * 如果本容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
     * 
     * @example moveItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.moveItem(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    /**
     * @remarks
     * Sets an item stack within a particular slot.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to set an item at.
     * @param itemStack
     * Stack of items to place within the specified slot. Setting
     * `itemStack` to undefined will clear the slot.
     * @throws
     * Throws if the container is invalid or if the `slot` index is
     * out of bounds.
     * 
     * 在特定槽位设置物品堆。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param slot
     * 设置物品的槽位的基于零的索引。
     * @param itemStack
     * 放置在指定槽位中的物品堆。将 `itemStack` 设置为 `undefined` 将清空该槽位。
     * @throws
     * 如果容器无效或 `slot` 索引超出范围，则抛出异常。
     */
    setItem(slot: number, itemStack?: ItemStack): void;
    /**
     * @remarks
     * Swaps items between two different slots within containers.
     *
     * This function can't be called in read-only mode.
     *
     * @param slot
     * Zero-based index of the slot to swap from this container.
     * @param otherSlot
     * Zero-based index of the slot to swap with.
     * @param otherContainer
     * Target container to swap with. Note this can be the same
     * container as this source.
     * @throws
     * Throws if either this container or `otherContainer` are
     * invalid or if the `slot` or `otherSlot` are out of bounds.
     * @example swapItems.ts
     * ```typescript
     * // A function that swaps an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.swapItems(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     * 
     * 在容器内两个不同的槽位之间交换物品。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param slot
     * 从本容器的槽位进行交换的基于零的索引。
     * @param otherSlot
     * 与其他容器交换的槽位的基于零的索引。
     * @param otherContainer
     * 进行交换的目标容器。注意，这可以是与源相同的容器。
     * @throws
     * 如果本容器或 `otherContainer` 无效，或者 `slot` 或 `otherSlot` 索引超出范围，则抛出异常。
     * 
     * @example swapItems.ts
     * ```typescript
     * // A function that swaps an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function swapBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.swapItems(slotId, slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    /**
     * @remarks
     * Moves an item from one slot to another container, or to the
     * first available slot in the same container.
     *
     * This function can't be called in read-only mode.
     *
     * @param fromSlot
     * Zero-based index of the slot to transfer an item from, on
     * this container.
     * @param toContainer
     * Target container to transfer to. Note this can be the same
     * container as the source.
     * @returns
     * An itemStack with the items that couldn't be transferred.
     * Returns undefined if all items were transferred.
     * @throws
     * Throws if either this container or `toContainer` are invalid
     * or if the `fromSlot` or `toSlot` indices out of bounds.
     * @example transferItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.transferItem(slotId, toInventory.container);
     *     }
     * }
     * ```
     * 
     * 将物品从一个槽位移动到另一个容器，或移动到同一容器中的第一个可用槽位。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param fromSlot
     * 从本容器的槽位转移物品的基于零的索引。
     * @param toContainer
     * 目标容器以转移物品。注意，这可以是与源相同的容器。
     * @returns
     * 包含未能转移的物品的物品堆。如果所有物品都已转移，则返回 `undefined`。
     * @throws
     * 如果本容器或 `toContainer` 无效，或者 `fromSlot` 或 `toSlot` 索引超出范围，则抛出异常。
     * 
     * @example transferItem.ts
     * ```typescript
     * // A function that moves an item from one slot of the player's inventory to another player's inventory
     * import { Player, EntityComponentTypes } from '@minecraft/server';
     *
     * function moveBetweenPlayers(slotId: number, fromPlayer: Player, toPlayer: Player) {
     *     const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory);
     *     const toInventory = toPlayer.getComponent(EntityComponentTypes.Inventory);
     *
     *     if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
     *         fromInventory.container.transferItem(slotId, toInventory.container);
     *     }
     * }
     * ```
     */
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}