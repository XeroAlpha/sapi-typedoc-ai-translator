/* IMPORT */ import { PlayerInteractWithBlockBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a player
 * interacts with a block.
 * 
 * 管理在玩家与方块交互之前触发的回调。
 */
export class PlayerInteractWithBlockBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a player
     * interacts with a block.
     * 
     * 添加一个将在玩家与方块交互前调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(
        callback: (arg: PlayerInteractWithBlockBeforeEvent) => void,
    ): (arg: PlayerInteractWithBlockBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a player
     * interacts with a block.
     * 
     * 移除一个在玩家与方块交互前被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerInteractWithBlockBeforeEvent) => void): void;
}