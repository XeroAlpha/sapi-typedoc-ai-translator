/* IMPORT */ import { PlayerInteractWithEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a player
 * interacts with an entity.
 * 
 * 管理玩家与实体交互后触发的回调。
 */
export class PlayerInteractWithEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with an entity.
     * 
     * 添加一个回调，在玩家与实体交互后被调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithEntityAfterEvent) => void,
    ): (arg: PlayerInteractWithEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with an entity.
     * 
     * 移除一个玩家与实体交互后触发的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerInteractWithEntityAfterEvent) => void): void;
}