/* IMPORT */ import { EntityEventOptions, EntityHealthChangedAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when the health of
 * an entity changes.
 * 
 * 管理与实体生命值变化相关的回调。
 */
export class EntityHealthChangedAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当实体的生命值发生变化时会被调用。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(
        callback: (arg: EntityHealthChangedAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHealthChangedAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when the health of an
     * entity changes.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个回调，该回调原本会在实体的生命值发生变化时被调用。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: EntityHealthChangedAfterEvent) => void): void;
}