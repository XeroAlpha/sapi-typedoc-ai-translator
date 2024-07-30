/* IMPORT */ import { BlockEvent, Player } from '../index';

/**
 * Contains information regarding an event where a player
 * places a block.
 * 
 * 包含玩家放置方块事件的相关信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerPlaceBlockAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Player that placed the block for this event.
     * 
     * 触发此事件时放置方块的玩家。
     */
    readonly player: Player;
}