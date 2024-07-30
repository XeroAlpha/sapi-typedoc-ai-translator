/* IMPORT */ import { EntityEventOptions, EntityHurtAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an entity is
 * hurt.
 * 
 * 管理与实体受伤时触发的回调。
 */
export class EntityHurtAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity is hurt.
     * 
     * 添加一个将在实体受伤时被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(
        callback: (arg: EntityHurtAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHurtAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity is hurt.
     * 
     * 移除一个实体受伤时被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void;
}