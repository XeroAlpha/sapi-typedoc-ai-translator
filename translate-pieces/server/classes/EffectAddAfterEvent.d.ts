/* IMPORT */ import { Effect, Entity } from '../index';

/**
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 * 
 * 包含与向实体添加效果（如中毒）相关的信息。
 */
export class EffectAddAfterEvent {
    private constructor();
    /**
     * @remarks
     * Additional properties and details of the effect.
     * 
     * 效果的附加属性和详细信息。
     */
    readonly effect: Effect;
    /**
     * @remarks
     * Entity that the effect is being added to.
     * 
     * 正在添加效果的实体。
     */
    readonly entity: Entity;
}