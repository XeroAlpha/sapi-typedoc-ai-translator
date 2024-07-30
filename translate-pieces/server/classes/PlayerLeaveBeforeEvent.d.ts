/* IMPORT */ import { Player } from '../index';

/**
 * Contains information regarding a player that is leaving the
 * world.
 * 
 * 包含有关离开世界的玩家的信息。
 */
export class PlayerLeaveBeforeEvent {
    private constructor();
    /**
     * @remarks
     * The leaving player.
     * 
     * 正在离开的玩家。
     */
    readonly player: Player;
}