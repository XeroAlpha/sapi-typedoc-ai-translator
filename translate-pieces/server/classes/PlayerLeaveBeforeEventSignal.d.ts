/* IMPORT */ import { PlayerLeaveBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to a player leaving the
 * world.
 * 
 * 管理与玩家离开世界相关的回调。
 */
export class PlayerLeaveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a player leaves the
     * world.
     * 
     * 添加一个在玩家离开世界时将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    subscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): (arg: PlayerLeaveBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called when a player leaves
     * the world.
     * 
     * 移除一个在玩家离开世界时将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerLeaveBeforeEvent) => void): void;
}