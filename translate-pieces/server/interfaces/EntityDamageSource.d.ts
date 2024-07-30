/* IMPORT */ import { Entity, EntityDamageCause } from '../index';

/**
 * Provides information about how damage has been applied to an
 * entity.
 * 
 * 提供有关实体受到伤害方式的信息。
 */
export interface EntityDamageSource {
    /**
     * @remarks
     * Cause enumeration of damage.
     * 
     * 伤害原因的枚举。
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     * 
     * 可选的造成伤害的实体。
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Optional projectile that may have caused damage.
     * 
     * 可能造成伤害的可选投射物。
     */
    damagingProjectile?: Entity;
}