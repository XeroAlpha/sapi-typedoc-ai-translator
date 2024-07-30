/* IMPORT */ import { BlockEventOptions, PlayerBreakBlockBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a player
 * breaks a block.
 * 
 * 管理玩家破坏方块前的回调。
 */
export class PlayerBreakBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a block is broken
     * by a player.
     * 
     * 在玩家破坏方块前添加一个将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     */
    subscribe(
        callback: (arg: PlayerBreakBlockBeforeEvent) => void,
        options?: BlockEventOptions,
    ): (arg: PlayerBreakBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player breaks
     * a block.
     * 
     * 移除在玩家破坏方块前被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerBreakBlockBeforeEvent) => void): void;
}