/* IMPORT */ import { Entity } from '../index';

/**
 * Contains additional information about an entity that was
 * hit.
 * 
 * 包含关于被击中的实体的附加信息。
 */
export interface EntityHitInformation {
    /**
     * @remarks
     * Entity that was hit.
     * 
     * 被击中的实体。
     */
    entity?: Entity;
}