/* IMPORT */ import { PlayerGameModeChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to after a players game
 * mode is changed.
 * 
 * 管理在玩家的游戏模式更改后触发的回调。
 */
export class PlayerGameModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，在玩家的游戏模式更改后被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): (arg: PlayerGameModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players game
     * mode is changed.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个回调，使其不再在玩家的游戏模式更改后被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeAfterEvent) => void): void;
}