/* IMPORT */ import { EntityDieAfterEvent, EntityEventOptions } from '../index';

/**
 * Supports registering for an event that fires after an entity
 * has died.
 * 
 * 支持注册在实体死亡后触发的事件。
 */
export class EntityDieAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes to an event that fires when an entity dies.
     * 
     * 订阅在实体死亡时触发的事件。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param callback
     * Function to call when an entity dies.
     * 
     * 当实体死亡时要调用的函数。
     * @param options
     * Additional filtering options for when the subscription
     * fires.
     * 
     * 订阅触发时的额外过滤选项。
     * @returns
     * Returns the closure that can be used in future downstream
     * calls to unsubscribe.
     * 
     * 返回可用于未来下游调用来取消订阅的闭包。
     */
    subscribe(
        callback: (arg: EntityDieAfterEvent) => void,
        options?: EntityEventOptions,
    ): (arg: EntityDieAfterEvent) => void;
    /**
     * @remarks
     * Stops this event from calling your function when an entity
     * dies.
     * 
     * 阻止此事件在实体死亡时调用你的函数。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void;
}