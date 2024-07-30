/* IMPORT */ import { EntityLoadAfterEvent } from '../index';

/**
 * Registers a script-based event handler for handling what
 * happens when an entity loads.
 * 
 * 注册基于脚本的事件处理器来处理实体加载时发生的动作。
 */
export class EntityLoadAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity loads.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function that handles the load event.
     * 
     * 注册处理实体加载时发生动作的事件处理器的方法。
     *
     * 此函数无法在只读模式下调用。
     *
     * @param callback
     * 处理加载事件的函数。
     */
    subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * 
     * 取消注册之前已订阅到订阅事件的方法。
     *
     * 此函数无法在只读模式下调用。
     *
     * @param callback
     * 要取消注册的、最初传递给订阅事件的函数。
     */
    unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void;
}