/**
 * Contains information regarding a player that has left the
 * world.
 * 
 * 包含有关已离开世界的玩家的信息。
 */
export class PlayerLeaveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Opaque string identifier of the player that has left the
     * event.
     * 
     * 已离开事件的玩家的不透明字符串标识符。
     *
     */
    readonly playerId: string;
    /**
     * @remarks
     * Player that has left the world.
     * 
     * 已离开世界的玩家。
     *
     */
    readonly playerName: string;
}