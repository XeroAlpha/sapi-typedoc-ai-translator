/* IMPORT */ import { Entity, ItemStack } from '../index';

/**
 * @rc
 * Contains information regarding when an item is used to hit
 * an entity.
 * 
 * 包含当物品用于击打实体时的相关信息。
 */
export class ItemComponentHitEntityEvent {
    private constructor();
    /**
     * @remarks
     * The attacking entity.
     *
     * 攻击实体。
     */
    readonly attackingEntity: Entity;
    /**
     * @remarks
     * Whether the hit landed or had any effect.
     *
     * 击打是否生效或产生任何效果。
     */
    readonly hadEffect: boolean;
    /**
     * @remarks
     * The entity being hit.
     *
     * 被击打的实体。
     */
    readonly hitEntity: Entity;
    /**
     * @remarks
     * The item stack used to hit the entity.
     *
     * 用于击打实体的物品堆栈。
     */
    readonly itemStack?: ItemStack;
}