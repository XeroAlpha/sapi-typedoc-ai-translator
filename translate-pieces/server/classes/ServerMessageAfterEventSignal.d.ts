/* IMPORT */ import { MessageReceiveAfterEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are message passing to a server. This
 * event is not currently fully implemented, and should not be
 * used.
 * 
 * 管理传递到服务器的消息回调。此事件当前尚未完全实现，不应使用。
 */
export class ServerMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an internal message
     * is passed.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个将在内部消息传递时被调用的回调。
     */
    subscribe(callback: (arg: MessageReceiveAfterEvent) => void): (arg: MessageReceiveAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an internal
     * message is passed.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个在内部消息传递时被调用的回调。
     */
    unsubscribe(callback: (arg: MessageReceiveAfterEvent) => void): void;
}