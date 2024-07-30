/* IMPORT */ import { BlockEventOptions, PlayerPlaceBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a block is
 * placed by a player.
 * 
 * 管理与玩家放置方块时相关的回调。
 */
export class PlayerPlaceBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     * 
     * 添加一个回调，在玩家放置方块时调用此回调。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(
        callback: (arg: PlayerPlaceBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerPlaceBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an block is placed
     * by a player.
     *
     * This function can't be called in read-only mode.
     * 
     * 移除一个回调，当玩家放置方块时不再调用该回调。
     *
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerPlaceBlockAfterEvent) => void): void;
}