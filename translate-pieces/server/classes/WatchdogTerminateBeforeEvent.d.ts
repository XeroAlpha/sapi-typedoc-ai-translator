/* IMPORT */ import { WatchdogTerminateReason } from '../index';

/**
 * @beta
 * Contains information related to a script watchdog
 * termination.
 * 
 * 包含与脚本监视器终止相关的信息。
 */
export class WatchdogTerminateBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true, cancels the termination of the script
     * runtime. Note that depending on server configuration
     * settings, cancellation of the termination may not be
     * allowed.
     * 
     * 如果设置为 `true`，则取消脚本运行时的终止。请注意，
     * 根据服务器配置设置，可能不允许取消终止。
     */
    cancel: boolean;
    /**
     * @remarks
     * Contains the reason why a script runtime is to be
     * terminated.
     * 
     * 包含脚本运行时被终止的原因。
     */
    readonly terminateReason: WatchdogTerminateReason;
}