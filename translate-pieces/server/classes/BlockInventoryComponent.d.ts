/* IMPORT */ import { BlockComponent, Container, ItemStack } from '../index';

/**
 * Represents the inventory of a block in the world. Used with
 * blocks like chests.
 * @example place_items_in_chest.js
 * ```typescript
 * import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";
 *
 * // Fetch block
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * // Make it a chest
 * block.setType(MinecraftBlockTypes.chest);
 *
 * // Get the inventory
 * const inventoryComponent = block.getComponent("inventory");
 * const inventoryContainer = inventoryComponent.container;
 *
 * // Set slot 0 to a stack of 10 apples
 * inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
 *
 * ```
 * 
 * 表示世界中某个方块的库存。用于像箱子这样的方块。
 * @example place_items_in_chest.js
 * ```typescript
 * import { world, MinecraftBlockTypes, Items, ItemStack } from "@minecraft/server";
 *
 * // 获取方块
 * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
 *
 * // 将其设置为箱子
 * block.setType(MinecraftBlockTypes.chest);
 *
 * // 获取库存
 * const inventoryComponent = block.getComponent("inventory");
 * const inventoryContainer = inventoryComponent.container;
 *
 * // 设置第0格为一堆10个苹果
 * inventoryContainer.setItem(0, new ItemStack(Items.apple, 10, 0));
 *
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * The container which holds an {@link ItemStack}.
     *
     * @throws This property can throw when used.
     */
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}