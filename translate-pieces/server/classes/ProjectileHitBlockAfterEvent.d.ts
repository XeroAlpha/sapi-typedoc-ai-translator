/* IMPORT */ import { BlockHitInformation, Dimension, Entity, Vector3 } from '../index';

/**
 * Contains information related to a projectile hitting a
 * block.
 * 
 * 包含与射弹击中方块相关的信息。
 */
export class ProjectileHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension where this projectile hit took place.
     * 
     * 发生射弹击中的维度。
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Direction vector of the projectile as it hit a block.
     * 
     * 射弹击中方块时的方向向量。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * Location where the projectile hit occurred.
     * 
     * 射弹击中的位置。
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Entity for the projectile that hit a block.
     * 
     * 击中方块的射弹实体。
     */
    readonly projectile: Entity;
    /**
     * @remarks
     * Optional source entity that fired the projectile.
     * 
     * 可选的发射射弹的源实体。
     */
    readonly source?: Entity;
    /**
     * @remarks
     * Contains additional information about the block that was hit
     * by the projectile.
     * 
     * This function can't be called in read-only mode.
     * 
     * 包含关于被射弹击中的方块的附加信息。
     * 
     * 此函数无法在只读模式下调用。
     */
    getBlockHit(): BlockHitInformation;
}