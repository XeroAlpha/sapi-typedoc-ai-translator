/* IMPORT */ import { GameMode, Player } from '../index';

/**
 * Contains information regarding an event before a player
 * interacts with an entity.
 * 
 * 包含玩家与实体交互前事件的相关信息。
 */
export class PlayerGameModeChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the game mode change will be cancelled.
     * 
     * 如果设置为 `true`，则取消游戏模式的更改。
     */
    cancel: boolean;
    /**
     * @remarks
     * The current game mode.
     * 
     * 当前的游戏模式。
     */
    readonly fromGameMode: GameMode;
    /**
     * @remarks
     * Source Player for this event.
     * 
     * 本事件的触发玩家。
     */
    readonly player: Player;
    /**
     * @remarks
     * The game mode being changed to.
     * 
     * 要更改为的游戏模式。
     */
    toGameMode: GameMode;
}