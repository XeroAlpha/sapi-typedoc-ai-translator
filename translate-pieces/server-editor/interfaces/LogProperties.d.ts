/* IMPORT */ import { minecraftserver } from '../index';

/**
 * A properties class for the global instance of the logger
 * object.
 * While the logger object is available through the {@link
 * ExtensionContext} - using the global instance allows the
 * creator to use this properties class to perform direct
 * server->client messaging and broadcasts.
 * 
 * 日志对象全局实例的属性类。
 * 虽然可以通过 {@link ExtensionContext} 访问日志对象，
 * 但是使用全局实例允许创建者使用此属性类来执行直接的服务器到客户端消息传递和广播。
 */
export interface LogProperties {
    /**
     * @remarks
     * Direct a log message to a specific player.  If no player is
     * specified, then all players will receive the message
     * 
     * 将日志消息定向到特定玩家。如果没有指定玩家，则所有玩家都会收到消息。
     */
    player?: minecraftserver.Player;
    /**
     * @remarks
     * Add additional tags to the log message which can be used by
     * the client session to filter/search in the log window
     * 
     * 向日志消息添加额外的标签，这些标签可以被客户端会话用于在日志窗口中过滤/搜索。
     */
    tags?: string[];
}