/* IMPORT */ import { ChatSendBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to an event that fires
 * before chat messages are sent.
 * 
 * 管理与发送聊天消息前触发的事件相关联的回调。
 */
export class ChatSendBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before new chat messages
     * are sent.
     * 
     * 在新聊天消息发送前添加一个将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: ChatSendBeforeEvent) => void): (arg: ChatSendBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before new chat
     * messages are sent.
     * 
     * 移除在新聊天消息发送前调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ChatSendBeforeEvent) => void): void;
}