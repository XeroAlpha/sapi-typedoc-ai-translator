/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * An event that fires as players enter chat messages.
 * 
 * 当玩家输入聊天信息时触发的事件。
 */
export class ChatSendBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true in a beforeChat event handler, this message
     * is not broadcast out.
     * 
     * 如果在 beforeChat 事件处理器中设置为 true，此消息不会被广播出去。
     */
    cancel: boolean;
    /**
     * @remarks
     * Message that is being broadcast.
     * 
     * 正在广播的消息。
     */
    readonly message: string;
    /**
     * @remarks
     * Player that sent the chat message.
     * 
     * 发送聊天信息的玩家。
     */
    readonly sender: Player;
    /**
     * @remarks
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     * 
     * 可选的玩家列表，这些玩家将收到此消息。如果定义了此列表，此消息将直接针对一个或多个玩家（即，不进行广播）。
     */
    readonly targets?: Player[];
}