/* IMPORT */ import { PlayerJoinAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player joins a world.
 * 
 * 提供了一个可适应的接口，允许调用者订阅玩家加入世界后触发的事件。
 */
export class IPlayerJoinAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 订阅此事件。
     */
    subscribe(callback: (arg: PlayerJoinAfterEvent) => void): (arg: PlayerJoinAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 取消订阅此事件。
     */
    unsubscribe(callback: (arg: PlayerJoinAfterEvent) => void): void;
}