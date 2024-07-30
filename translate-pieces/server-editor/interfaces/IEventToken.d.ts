/**
 * Returned from an event subscription. Provides functionality
 * for cleaning up listeners
 * 
 * 从事件订阅返回的对象。提供了清理监听器的功能。
 */
export declare interface IEventToken {
    /**
     * @remarks
     * Removes registered listener from an event
     * 
     * 从事件中移除已注册的监听器。
     */
    unsubscribe(): void;
}