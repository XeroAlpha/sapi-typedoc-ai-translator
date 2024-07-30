/* IMPORT */ import { Entity, EntityDamageSource } from '../index';

/**
 * Contains data related to the death of an entity in the game.
 * 
 * 包含游戏中实体死亡相关数据。
 */
export class EntityDieAfterEvent {
    private constructor();
    /**
     * @remarks
     * If specified, provides more information on the source of
     * damage that caused the death of this entity.
     * 
     * 如果指定了，提供导致此实体死亡的伤害来源的更多信息。
     */
    readonly damageSource: EntityDamageSource;
    /**
     * @remarks
     * Now-dead entity object.
     * 
     * 现已死亡的实体对象。
     */
    readonly deadEntity: Entity;
}