/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * Contains information related to an entity getting hurt.
 * 
 * 包含有关实体受到伤害的信息。
 */
export class EntityHurtAfterEvent {
    private constructor();
    /**
     * @remarks
     * Describes the amount of damage caused.
     * 
     * 描述造成的伤害量。
     */
    readonly damage: number;
    /**
     * @remarks
     * Source information on the entity that may have applied this
     * damage.
     * 
     * 可能造成此伤害的实体的来源信息。
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Entity that was hurt.
     * 
     * 受到伤害的实体。
     */
    readonly hurtEntity: Entity;
}