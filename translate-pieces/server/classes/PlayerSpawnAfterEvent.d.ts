/* IMPORT */ import { Player } from '../index';

/**
 * An event that contains more information about a player
 * spawning.
 * 
 * 包含有关玩家生成的更多信息的事件。
 */
export class PlayerSpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * If true, this is the initial spawn of a player after joining
     * the game.
     * 
     * 如果为真，这是玩家加入游戏后最初的生成。
     *
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     *
     */
    initialSpawn: boolean;
    /**
     * @remarks
     * Object that represents the player that joined the game.
     * 
     * 代表加入游戏的玩家的对象。
     *
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     *
     */
    player: Player;
}