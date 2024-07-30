/* IMPORT */ import { EntityComponent, ItemStack } from '../index';

/**
 * If added onto the entity, this indicates that the entity
 * represents a free-floating item in the world. Lets you
 * retrieve the actual item stack contents via the itemStack
 * property.
 * 
 * 如果添加到实体上，这表明实体代表世界中自由漂浮的物品。
 * 可以通过 itemStack 属性获取实际的物品堆栈内容。
 * 
 * @example checkFeatherNearby.ts
 * ```typescript
 * import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";
 *
 * // Returns true if a feather item entity is within 'distance' blocks of 'location'.
 * // 如果 'location' 位置周围 'distance' 格内有羽毛物品实体，返回 true。
 * function isFeatherNear(location: DimensionLocation, distance: number): boolean {
 *     const items = location.dimension.getEntities({
 *         location: location,
 *         maxDistance: 20,
 *     });
 *
 *     for (const item of items) {
 *         const itemComp = item.getComponent(EntityComponentTypes.Item);
 *
 *         if (itemComp) {
 *             if (itemComp.itemStack.typeId.endsWith('feather')) {
 *                 return true;
 *             }
 *         }
 *     }
 *
 *     return false;
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityItemComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Item stack represented by this entity in the world.
     * 
     * 此实体在世界中所代表的物品堆栈。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly itemStack: ItemStack;
    static readonly componentId = 'minecraft:item';
}