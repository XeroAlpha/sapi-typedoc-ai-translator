/* IMPORT */ import { EffectAddBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to when an effect is
 * added to an entity.
 * 
 * 管理与效果添加到实体时相关的回调。
 */
export class EffectAddBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，在效果被添加到实体时调用此回调。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: EffectAddBeforeEvent) => void): (arg: EffectAddBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an effect is added
     * to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个回调，该回调原本会在效果被添加到实体时被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: EffectAddBeforeEvent) => void): void;
}