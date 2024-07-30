/* IMPORT */ import { Logger, SimulationState } from '../index';

/**
 * The MinecraftEditor class is a namespace container for
 * Editor functionality which does not have any player context.
 * 
 * MinecraftEditor 类是一个命名空间容器，用于存放没有玩家上下文的编辑器功能。
 */
export class MinecraftEditor {
    private constructor();
    /**
     * @remarks
     * A global instance of the log output class object.  This is
     * not contextualized to any particular player, and any
     * messages sent to this instance will be broadcast to all
     * connected editor client sessions
     * 
     * 日志输出类对象的全局实例。这不针对任何特定玩家，
     * 发送到此实例的任何消息都将广播到所有连接的编辑器客户端会话。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly log: Logger;
    /**
     * @remarks
     * Allows querying and modifying some properties of the
     * simulation.
     * 
     * 允许查询和修改模拟的一些属性。
     */
    readonly simulation: SimulationState;
}