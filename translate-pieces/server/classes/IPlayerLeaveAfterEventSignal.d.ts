/* IMPORT */ import { PlayerLeaveAfterEvent } from '../index';

/**
 * Provides an adaptable interface for callers to subscribe to
 * an event that fires after a player leaves a world.
 * 
 * 提供一个可适应的接口，允许调用者订阅玩家离开世界的事件。
 */
export class IPlayerLeaveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to the event.
     * 
     * This function can't be called in read-only mode.
     * 
     * 订阅此事件。
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: PlayerLeaveAfterEvent) => void): (arg: PlayerLeaveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes from the event.
     * 
     * This function can't be called in read-only mode.
     * 
     * 取消订阅此事件。
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerLeaveAfterEvent) => void): void;
}