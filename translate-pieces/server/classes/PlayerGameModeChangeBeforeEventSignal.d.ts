/* IMPORT */ import { PlayerGameModeChangeBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before a players
 * game mode is changed.
 * 
 * 管理在更改玩家游戏模式之前触发的回调。
 */
export class PlayerGameModeChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before a players game
     * mode is changed.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): (arg: PlayerGameModeChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before a players game
     * mode is changed.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: PlayerGameModeChangeBeforeEvent) => void): void;
}