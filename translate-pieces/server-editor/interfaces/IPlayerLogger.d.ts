/**
 * Log helper interface for Player.
 * 
 * 用于玩家的日志辅助接口。
 */
export interface IPlayerLogger {
    /**
     * @remarks
     * Dispatch a player log message with Debug log level
     *
     * @param message
     * Message content
     * 
     * 使用 Debug 日志级别发送玩家日志消息。
     * 
     * @param message
     * 消息内容
     */
    debug(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Error log level
     *
     * @param message
     * Message content
     * 
     * 使用 Error 日志级别发送玩家日志消息。
     * 
     * @param message
     * 消息内容
     */
    error(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Info log level
     *
     * @param message
     * Message content
     * 
     * 使用 Info 日志级别发送玩家日志消息。
     * 
     * @param message
     * 消息内容
     */
    info(message: string): void;
    /**
     * @remarks
     * Dispatch a player log message with Warning log level
     *
     * @param message
     * Message content
     * 
     * 使用 Warning 日志级别发送玩家日志消息。
     * 
     * @param message
     * 消息内容
     */
    warning(message: string): void;
}