/* IMPORT */ import { Dimension, Player, Vector3 } from '../index';

/**
 * Contains information related to changes to a player's
 * dimension having been changed.
 * 
 * 包含与玩家维度变化相关的信息。
 */
export class PlayerDimensionChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The dimension the player is changing from.
     * 
     * 玩家正在离开的维度。
     */
    readonly fromDimension: Dimension;
    /**
     * @remarks
     * The location the player was at before changing dimensions.
     * 
     * 在改变维度前玩家所在的位置。
     */
    readonly fromLocation: Vector3;
    /**
     * @remarks
     * Handle to the player that is changing dimensions.
     * 
     * 正在改变维度的玩家的句柄。
     */
    readonly player: Player;
    /**
     * @remarks
     * The dimension that the player is changing to.
     * 
     * 玩家正要进入的维度。
     */
    readonly toDimension: Dimension;
    /**
     * @remarks
     * The location the player will spawn to after changing
     * dimensions.
     * 
     * 在改变维度后玩家将要重生的位置。
     */
    readonly toLocation: Vector3;
}