/* IMPORT */ import { Entity } from '../index';

/**
 * Additional options for when damage has been applied via a
 * projectile.
 * 
 * 当通过投射物造成伤害时的额外选项。
 */
export interface EntityApplyDamageByProjectileOptions {
    /**
     * @remarks
     * Optional entity that fired the projectile.
     * 
     * 可选的发射了投射物的实体。
     */
    damagingEntity?: Entity;
    /**
     * @remarks
     * Projectile that caused damage.
     * 
     * 造成伤害的投射物。
     */
    damagingProjectile: Entity;
}