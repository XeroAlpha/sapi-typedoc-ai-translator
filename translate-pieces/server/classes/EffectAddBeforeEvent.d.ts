/* IMPORT */ import { Entity } from '../index';

/**
 * Contains information related to changes to an effect - like
 * poison - being added to an entity.
 * 
 * 包含与向实体添加效果（如中毒）相关的信息。
 */
export class EffectAddBeforeEvent {
    private constructor();
    /**
     * @remarks
     * When set to true will cancel the event.
     * 
     * 当设置为 true 时，会取消事件。
     */
    cancel: boolean;
    /**
     * @remarks
     * Effect duration.
     * 
     * 效果持续时间。
     */
    duration: number;
    /**
     * @remarks
     * The type of the effect that is being added.
     * 
     * 正在添加的效果的类型。
     */
    readonly effectType: string;
    /**
     * @remarks
     * Entity that the effect is being added to.
     * 
     * 效果正在被添加到的实体。
     */
    readonly entity: Entity;
}