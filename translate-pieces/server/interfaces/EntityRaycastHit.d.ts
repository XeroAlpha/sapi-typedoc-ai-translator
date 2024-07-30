/* IMPORT */ import { Entity } from '../index';

/**
 * Contains information for entity raycast hit results.
 * 
 * 包含实体光线投射命中结果的信息。
 */
export interface EntityRaycastHit {
    /**
     * @remarks
     * Distance from ray origin to entity bounds.
     * 
     * 从光线起源到实体边界的距离。
     */
    distance: number;
    /**
     * @remarks
     * Entity that was hit.
     * 
     * 被命中的实体。
     */
    entity: Entity;
}