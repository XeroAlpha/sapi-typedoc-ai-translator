/* IMPORT */ import { EntityEventOptions, EntityRemoveAfterEvent } from '../index';

/**
 * Allows registration for an event that fires when an entity
 * is removed from the game (for example, unloaded, or a few
 * seconds after they are dead.)
 * 
 * 允许注册当实体从游戏中移除（例如，卸载，或者死亡几秒后）时触发的事件。
 */
export class EntityRemoveAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Will call your function every time an entity is removed from
     * the game.
     * 
     * 每次实体从游戏中移除时都会调用您的函数。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param callback
     * Function to call.
     * 
     * 要调用的函数。
     * @param options
     * Additional filtering options for this event.
     * 
     * 为该事件提供的额外过滤选项。
     * @returns
     * Returns a closure that can be used in subsequent unsubscribe
     * operations.
     * 
     * 返回一个可用于后续取消订阅操作的闭包。
     */
    subscribe(
        callback: (arg: EntityRemoveAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityRemoveAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes your function from subsequent calls when an
     * entity is removed.
     * 
     * 当实体被移除时，取消订阅您的函数以接收后续调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: EntityRemoveAfterEvent) => void): void;
}