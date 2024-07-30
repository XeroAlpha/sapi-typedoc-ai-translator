/* IMPORT */ import { Entity, EntityDamageCause } from '../index';

/**
 * Additional descriptions and metadata for a damage event.
 * 
 * 对伤害事件的附加描述和元数据。
 */
export interface EntityApplyDamageOptions {
    /**
     * @remarks
     * Underlying cause of the damage.
     * 
     * 造成伤害的根本原因。
     */
    cause: EntityDamageCause;
    /**
     * @remarks
     * Optional entity that caused the damage.
     * 
     * 可选的造成伤害的实体。
     */
    damagingEntity?: Entity;
}