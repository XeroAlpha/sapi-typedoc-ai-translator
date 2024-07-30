/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * Contains information regarding an event after a players game
 * mode is changed.
 * 
 * 包含玩家游戏模式更改后事件的相关信息。
 */
export class PlayerGameModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The previous game mode before the change.
     * 
     * 更改前的游戏模式。
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * Source Player for this event.
     * 
     * 本事件的来源玩家。
     */
    readonly player: Player;
    /**
     * @remarks
     * The current game mode after the change.
     * 
     * 更改后的当前游戏模式。
     */
    readonly toGameMode: GameMode;
}