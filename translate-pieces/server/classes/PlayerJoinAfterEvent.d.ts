/**
 * Contains information regarding a player that has joined.
 * See the playerSpawn event for more detailed information that
 * could be returned after the first time a player has spawned
 * within the game.
 * 
 * 包含有关已加入游戏的玩家的信息。
 * 查看 playerSpawn 事件以获取更详细的信息，这些信息可能在玩家首次在游戏中生成后返回。
 */
export class PlayerJoinAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that joined the game.
     * 
     * 加入游戏的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Name of the player that has joined.
     * 
     * 已加入的玩家的名称。
     *
     */
    readonly playerName: string;
}