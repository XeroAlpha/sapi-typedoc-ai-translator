/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * @rc
 * Contains information regarding an item before it is damaged
 * from hitting an entity.
 * 
 * 包含物品在因击中实体而受损前的相关信息。
 */
export class ItemComponentBeforeDurabilityDamageEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     * 
     * 攻击的实体。
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * The damage applied to the item's durability when the event
     * occurs.
     * 
     * 当事件发生时，应用于物品耐久度的损伤。
     */
    durabilityDamage: number;
    /**
     * @remarks
     * The entity being hit.
     * 
     * 被击中的实体。
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     * 
     * 用于击中实体的物品堆栈。
     */
    itemStack?: ItemStack;
}