/* IMPORT */ import { ScriptEventCommandMessageAfterEventSignal } from '../index';

/**
 * Provides a set of events that fire within the broader
 * scripting system within Minecraft.
 * 
 * 提供了一组在 Minecraft 更广泛的脚本系统内触发的事件。
 */
export class SystemAfterEvents {
    private constructor();
    /**
     * @remarks
     * An event that fires when a /scriptevent command is set. This
     * provides a way for commands and other systems to trigger
     * behavior within script.
     * 
     * 当设置 `/scriptevent` 命令时触发的事件。这提供了一种方式让命令和其他系统触发脚本内的行为。
     */
    readonly scriptEventReceive: ScriptEventCommandMessageAfterEventSignal;
}