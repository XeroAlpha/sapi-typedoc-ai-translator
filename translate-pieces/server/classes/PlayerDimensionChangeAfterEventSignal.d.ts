/* IMPORT */ import { PlayerDimensionChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to successful player
 * dimension changes.
 * 
 * 管理与玩家维度变更成功后关联的回调。
 */
export class PlayerDimensionChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     * 
     * 将指定的回调订阅到玩家维度变更后事件。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): (arg: PlayerDimensionChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from a player dimension
     * change after event.
     *
     * This function can't be called in read-only mode.
     * 
     * 从玩家维度变更后事件中移除指定的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerDimensionChangeAfterEvent) => void): void;
}