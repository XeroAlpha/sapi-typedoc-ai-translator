/* IMPORT */ import { WorldInitializeAfterEvent } from '../index';

/**
 * Manages callbacks that are run on the first tick of the
 * World. Do note that this event may run multiple times within
 * a session in the case that the /reload command is used.
 * 
 * 管理在世界首次刻度运行的回调。需要注意的是，在使用/reload命令的情况下，
 * 此事件可能在同一会话内多次触发。
 */
export class WorldInitializeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当为世界初始化脚本环境时将调用此回调。
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: WorldInitializeAfterEvent) => void): (arg: WorldInitializeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called the scripting
     * environment is initialized for a World.
     *
     * This function can't be called in read-only mode.
     *
     * 从世界脚本环境初始化时被调用的回调列表中移除一个回调。
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: WorldInitializeAfterEvent) => void): void;
}