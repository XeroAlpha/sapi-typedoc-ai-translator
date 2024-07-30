/* IMPORT */ import { EventHandler, IEventToken } from '../index';

/**
 *  An event that can be subscribed to. You can use the token,
 * returned from the subscribe method, to clean up handlers.
 * 
 * 可订阅的事件。您可以使用从 `subscribe` 方法返回的令牌来清理事件处理程序。
 */
export declare interface EventSink<T> {
    /**
     * @remarks
     * Subscribes an event handler to a particular subscription.
     * 
     * 将事件处理程序订阅到特定的订阅。
     *
     * @param handler
     * Handler function to subscribe with.
     * 
     * 要订阅的处理程序函数。
     * @returns
     * An event handler subscription token that can be used to
     * unsubscribe and clean-up handlers.
     * 
     * 一个可用于取消订阅和清理处理程序的事件处理程序订阅令牌。
     */
    subscribe(handler: EventHandler<T>): IEventToken;
}