/* IMPORT */ import { Player } from '../index';

/**
 * @beta
 * A specific currently-internal event used for passing
 * messages from client to server.
 * 
 * 用于从客户端向服务器传递消息的一个特定的内部事件。
 */
export class MessageReceiveAfterEvent {
    private constructor();
    /**
     * @remarks
     * The message identifier.
     * 
     * 消息标识符。
     */
    readonly id: string;
    /**
     * @remarks
     * The message.
     * 
     * 消息内容。
     */
    readonly message: string;
    /**
     * @remarks
     * The player who sent the message.
     * 
     * 发送消息的玩家。
     */
    readonly player: Player;
}