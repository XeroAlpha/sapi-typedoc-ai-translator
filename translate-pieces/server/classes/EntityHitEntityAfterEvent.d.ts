/* IMPORT */ import { Entity } from '../index';

/**
 * Contains information related to an entity hitting (melee
 * attacking) another entity.
 * 
 * 包含关于一个实体打击（近战攻击）另一个实体的相关信息。
 */
export class EntityHitEntityAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that made a hit/melee attack.
     * 
     * 发起打击/近战攻击的实体。
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Entity that was hit by the attack.
     * 
     * 被攻击命中的实体。
     */
    readonly hitEntity: Entity;
}