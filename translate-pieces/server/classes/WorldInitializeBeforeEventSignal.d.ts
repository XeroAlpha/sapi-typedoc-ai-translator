/* IMPORT */ import { WorldInitializeBeforeEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are run at the initialization of the
 * scripting environment for a World. Do note that this event
 * may run multiple times within a session in the case that the
 * /reload command is used.
 * 
 * 管理在世界脚本环境初始化时运行的回调。请注意，在会话中如果使用了/reload命令，此事件可能会多次运行。
 */
export class WorldInitializeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * 在世界脚本环境初始化时添加一个将被调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: WorldInitializeBeforeEvent) => void): (arg: WorldInitializeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * 移除在世界脚本环境初始化时将要调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: WorldInitializeBeforeEvent) => void): void;
}