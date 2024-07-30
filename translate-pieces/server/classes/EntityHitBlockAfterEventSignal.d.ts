/* IMPORT */ import { EntityEventOptions, EntityHitBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an entity hits
 * a block.
 * 
 * 管理与实体撞击方块事件关联的回调。
 */
export class EntityHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an entity hits a
     * block.
     * 
     * 添加一个回调，当实体撞击方块时会调用此回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下被调用。
     *
     */
    subscribe(
        callback: (arg: EntityHitBlockAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an entity hits a
     * block.
     * 
     * 移除一个实体撞击方块时会被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下被调用。
     *
     */
    unsubscribe(callback: (arg: EntityHitBlockAfterEvent) => void): void;
}