/* IMPORT */ import { ScriptEventCommandMessageAfterEvent, ScriptEventMessageFilterOptions } from '../index';

/**
 * Allows for registering an event handler that responds to
 * inbound /scriptevent commands.
 * 
 * 允许注册响应入站 /scriptevent 命令的事件处理器。
 */
export class ScriptEventCommandMessageAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Registers a new ScriptEvent handler.
     * 
     * This function can't be called in read-only mode.
     * 
     * 注册一个新的 ScriptEvent 处理器。
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(
        callback: (arg: ScriptEventCommandMessageAfterEvent) => void,
        options?: ScriptEventMessageFilterOptions,
    ): (arg: ScriptEventCommandMessageAfterEvent) => void;
    /**
     * @remarks
     * Unsubscribes a particular handler for a ScriptEvent event.
     * 
     * This function can't be called in read-only mode.
     * 
     * 取消订阅特定的 ScriptEvent 事件处理器。
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void;
}