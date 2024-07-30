/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a player breaks
 * a block.
 * 
 * 管理与玩家破坏方块时触发的回调。
 */
export class PlayerBreakBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a block is broken
     * by a player.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，在玩家破坏方块时被调用。
     *
     * 此函数不能在只读模式下调用。
     *
     */
    subscribe(
        callback: (arg: PlayerBreakBlockAfterEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a player breaks a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个在玩家破坏方块时被调用的回调。
     *
     * 此函数不能在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerBreakBlockAfterEvent) => void): void;
}