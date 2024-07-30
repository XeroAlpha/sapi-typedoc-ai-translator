/* IMPORT */ import { LogProperties } from '../index';

/**
 * The logger class is a utility class which allows editor
 * extensions to communicate with the player from the server to
 * the client log window.
 * The logger class presents 4 different output channels which
 * can be used to send information to the client/player,
 * depending on the context of the information.
 * 
 * 日志记录器类是一个实用工具类，允许编辑器扩展从服务器向客户端日志窗口与玩家进行通信。
 * 日志记录器类提供了4种不同的输出通道，可以根据信息的上下文向客户端/玩家发送信息。
 */
export class Logger {
    private constructor();
    /**
     * @remarks
     * A `debug` output channel generally used during the
     * development process of editor extensions.  This channel
     * defaults to `hidden` in the log window (unless explicitly
     * enabled).
     * Once your editor extension development process is complete,
     * and you're ready to ship/share your extension - we generally
     * recommend that you remove any references to this log channel
     * to avoid a noisy experience for other users
     * 
     * 一个“debug”输出通道，通常在编辑器扩展的开发过程中使用。此通道默认在日志窗口中为“隐藏”（除非明确启用）。
     * 当你的编辑器扩展开发过程完成，并且你准备发布/分享你的扩展时，我们通常建议你删除对这个日志通道的所有引用，以避免给其他用户带来嘈杂的体验。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param message
     * The message string to send to the log window
     * 
     * 要发送到日志窗口的消息字符串
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    debug(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The error channel is generally used when the editor
     * extension experiences an error (either a program error in
     * executing logic unexpectedly, or an error in the input or
     * output to/from a player).  Use this channel sparingly - it's
     * meant to communicate important problems to the player
     * 
     * 错误通道通常在编辑器扩展遇到错误时使用（无论是执行逻辑时的程序错误，还是来自/向玩家输入或输出的错误）。谨慎使用此通道，其目的是向玩家传达重要问题。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param message
     * The message string to send to the log window
     * 
     * 要发送到日志窗口的消息字符串
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    error(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The info channel is intended to communicate general,
     * non-fatal or non-erroneous information to the player that
     * can generally be safely ignored if they choose to do so.
     * 
     * 信息通道旨在向玩家传达一般性、非致命或非错误的信息，如果他们选择这样做，通常可以安全地忽略这些信息。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param message
     * The message string to send to the log window
     * 
     * 要发送到日志窗口的消息字符串
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    info(message: string, properties?: LogProperties): void;
    /**
     * @remarks
     * The warning channel is intended to inform the user of
     * "potential" issues (missing inputs, values out of range,
     * things that cannot be found) but are not fatal and execution
     * can still be completed.
     * 
     * 警告通道旨在告知用户“潜在”的问题（缺失输入、超出范围的值、找不到的东西），但这些问题不是致命的，执行仍然可以完成。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param message
     * The message string to send to the log window
     * 
     * 要发送到日志窗口的消息字符串
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    warning(message: string, properties?: LogProperties): void;
}