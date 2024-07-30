/* IMPORT */ import { PlayerInteractWithBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a player
 * interacts with a block.
 * 
 * 管理在玩家与方块交互后触发的回调。
 */
export class PlayerInteractWithBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a player interacts
     * with a block.
     * 
     * 添加一个回调，在玩家与方块交互后调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(
        callback: (arg: PlayerInteractWithBlockAfterEvent) => void,
    ): (arg: PlayerInteractWithBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a player
     * interacts with a block.
     * 
     * 移除在玩家与方块交互后调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockAfterEvent) => void): void;
}