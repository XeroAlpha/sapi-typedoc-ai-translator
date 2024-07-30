/* IMPORT */ import { WatchdogTerminateBeforeEvent } from '../index';

/**
 * @beta
 * Manages callbacks that are connected to a callback that will
 * be called when a script runtime is being terminated due to a
 * violation of the performance watchdog system.
 * 
 * 管理与性能监视系统违规导致脚本运行时终止时将被调用的回调相关的回调。
 */
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a script runtime is
     * being terminated due to a violation of the performance
     * watchdog system.
     *
     * This function can't be called in read-only mode.
     *
     * 在脚本运行时因违反性能监视系统而终止时添加将被调用的回调。
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): (arg: WatchdogTerminateBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a script runtime
     * is being terminated due to a violation of the performance
     * watchdog system.
     *
     * This function can't be called in read-only mode.
     *
     * 当脚本运行时因违反性能监视系统而终止时，从被调用的列表中移除一个回调。
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: WatchdogTerminateBeforeEvent) => void): void;
}