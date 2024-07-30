/* IMPORT */ import { Block, Entity, ScriptEventSource } from '../index';

/**
 * Returns additional data about a /scriptevent command
 * invocation.
 * 
 * 返回关于 /scriptevent 命令调用的附加数据。
 */
export class ScriptEventCommandMessageAfterEvent {
    private constructor();
    /**
     * @remarks
     * Identifier of this ScriptEvent command message.
     * 
     * 此 ScriptEvent 命令消息的标识符。
     */
    readonly id: string;
    /**
     * @remarks
     * If this command was initiated via an NPC, returns the entity
     * that initiated the NPC dialogue.
     * 
     * 如果此命令是通过 NPC 发起的，则返回发起 NPC 对话的实体。
     */
    readonly initiator?: Entity;
    /**
     * @remarks
     * Optional additional data passed in with the script event
     * command.
     * 
     * 与脚本事件命令一起传递的可选附加数据。
     */
    readonly message: string;
    /**
     * @remarks
     * Source block if this command was triggered via a block
     * (e.g., a commandblock.)
     * 
     * 如果此命令是通过方块触发的，则返回源方块（例如，命令方块）。
     */
    readonly sourceBlock?: Block;
    /**
     * @remarks
     * Source entity if this command was triggered by an entity
     * (e.g., a NPC).
     * 
     * 如果此命令是由实体触发的，则返回源实体（例如，NPC）。
     */
    readonly sourceEntity?: Entity;
    /**
     * @remarks
     * Returns the type of source that fired this command.
     * 
     * 返回触发此命令的源类型。
     */
    readonly sourceType: ScriptEventSource;
}