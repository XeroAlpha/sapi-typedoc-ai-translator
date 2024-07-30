/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to before a block is
 * placed by a player.
 * 
 * 管理在方块被玩家放置前触发的回调。
 */
export class PlayerPlaceBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is placed
     * by a player.
     * 
     * 在方块被玩家放置前添加一个将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before an block is
     * placed by a player.
     * 
     * 移除在方块被玩家放置前将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockBeforeEvent) => void): void;
}