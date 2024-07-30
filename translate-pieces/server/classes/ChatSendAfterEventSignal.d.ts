/* IMPORT */ import { ChatSendAfterEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to chat messages being
 * sent.
 * 
 * 管理与发送聊天消息相关的回调。
 */
export class ChatSendAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * @example custom_command.js
     * ```typescript
     * const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {
     *   if (eventData.message.includes("cancel")) {
     *     // Cancel event if the message contains "cancel"
     *     eventData.canceled = true;
     *   } else {
     *     // Modify chat message being sent
     *     eventData.message = `Modified '${eventData.message}'`;
     *   }
     * });
     * ```
     * 
     * 添加一个将在发送新的聊天消息时调用的回调。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @example custom_command.js
     * ```typescript
     * const chatCallback = World.beforeEvents.chatSend.subscribe((eventData) => {
     *   if (eventData.message.includes("cancel")) {
     *     // 如果消息包含 "cancel"，取消事件
     *     eventData.canceled = true;
     *   } else {
     *     // 修改正在发送的聊天消息
     *     eventData.message = `Modified '${eventData.message}'`;
     *   }
     * });
     * ```
     */
    subscribe(callback: (arg: ChatSendAfterEvent) => void): (arg: ChatSendAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when new chat messages
     * are sent.
     *
     * This function can't be called in read-only mode.
     *
     * 
     * 从发送新的聊天消息时的调用中移除一个回调。
     * 
     * 此函数无法在只读模式下调用。
     * 
     */
    unsubscribe(callback: (arg: ChatSendAfterEvent) => void): void;
}