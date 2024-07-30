/* IMPORT */ import { EntityEventOptions, EntityHitEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an entity makes
 * a melee attack on another entity.
 * 
 * 管理实体对另一个实体进行近战攻击时触发的回调。
 */
export class EntityHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits
     * another entity.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当一个实体击中另一个实体时将被调用。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(
        callback: (arg: EntityHitEntityAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity makes a
     * melee attack on another entity.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个实体对另一个实体进行近战攻击时调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: EntityHitEntityAfterEvent) => void): void;
}