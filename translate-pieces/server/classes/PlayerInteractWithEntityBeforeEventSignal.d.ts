/* IMPORT */ import { PlayerInteractWithEntityBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a player
 * interacts with an entity.
 * 
 * 管理在玩家与实体互动前触发的回调。
 */
export class PlayerInteractWithEntityBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 在玩家与实体互动之前添加一个将被调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(
        callback: (arg: PlayerInteractWithEntityBeforeEvent) => void,
    ): (arg: PlayerInteractWithEntityBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 从玩家与实体互动前的回调列表中移除一个回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityBeforeEvent) => void): void;
}