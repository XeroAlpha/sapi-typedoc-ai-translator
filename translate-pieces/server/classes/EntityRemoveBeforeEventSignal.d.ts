/* IMPORT */ import { EntityRemoveBeforeEvent } from '../index';

/**
 * Allows registration for an event that fires when an entity
 * is being removed from the game (for example, unloaded, or a
 * few seconds after they are dead.)
 * 
 * 允许注册一个事件，当实体从游戏中移除时触发（例如，卸载，或者在它们死亡几秒后）。
 */
export class EntityRemoveBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is being
     * removed from the game.
     * 
     * 每次实体从游戏中移除时，都会调用你的函数。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param callback
     * Function to call.
     * 
     * 要调用的函数。
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     * 
     * 返回一个闭包，可以在后续的退订操作中使用。
     */
    subscribe(callback: (arg: EntityRemoveBeforeEvent) => void): (arg: EntityRemoveBeforeEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is being removed.
     * 
     * 当实体被移除时，取消订阅你的函数，使其不再接收后续调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: EntityRemoveBeforeEvent) => void): void;
}