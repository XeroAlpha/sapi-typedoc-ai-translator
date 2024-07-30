/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * An event that fires as players enter chat messages.
 * 
 * 当玩家输入聊天消息时触发的事件。
 */
export class ChatSendAfterEvent {
    private constructor();
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
     * 发送聊天消息的玩家。
     */
    readonly sender: Player;
    /**
     * @remarks
     * Optional list of players that will receive this message. If
     * defined, this message is directly targeted to one or more
     * players (i.e., is not broadcast.)
     * 
     * 可选的接收此消息的玩家列表。如果定义了此列表，则此消息直接针对一个或多个玩家（即不进行广播）。
     */
    readonly targets?: Player[];
}