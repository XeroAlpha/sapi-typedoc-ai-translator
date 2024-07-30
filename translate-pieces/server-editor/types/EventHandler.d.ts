/**
 * A generic handler for an event sink.
 * 
 * 事件接收器的一个通用处理程序。
 */
export declare type EventHandler<T> = (eventArg: T) => void;