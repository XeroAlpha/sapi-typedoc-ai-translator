/* IMPORT */ import { Dimension, Entity, EntityHitInformation, Vector3 } from '../index';

/**
 * Contains information related to a projectile hitting an
 * entity.
 * 
 * 包含与弹射物击中实体相关的信息。
 */
export class ProjectileHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     * 
     * 发生弹射物击中的维度。
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit an entity.
     * 
     * 弹射物击中实体时的方向向量。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     * 
     * 弹射物击中发生的位置。
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit an entity.
     * 
     * 击中实体的弹射物实体。
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     * 
     * 可选的发射弹射物的来源实体。
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about an entity that was
     * hit.
     * 
     * This function can't be called in read-only mode.
     * 
     * 包含被击中实体的附加信息。
     * 
     * 此函数无法在只读模式下调用。
     */
    getEntityHit(): EntityHitInformation;
}