/* IMPORT */ import { PlayerSpawnAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player spawns.
 * 
 * 提供了一个可适应的接口，供调用者订阅在玩家生成后触发的事件。
 */
export class IPlayerSpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 订阅事件。
     */
    subscribe(callback: (arg: PlayerSpawnAfterEvent) => void): (arg: PlayerSpawnAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 取消订阅事件。
     */
    unsubscribe(callback: (arg: PlayerSpawnAfterEvent) => void): void;
}