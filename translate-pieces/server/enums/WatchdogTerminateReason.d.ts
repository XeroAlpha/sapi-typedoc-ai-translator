/**
 * @beta
 * An enumeration with the reason that a watchdog is deciding
 * to terminate execution of a behavior packs' script.
 * 
 * 当看门狗决定终止行为包脚本的执行时的原因枚举。
 */
export enum WatchdogTerminateReason {
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to
     * non-responsiveness from script (a hang or infinite loop).
     *
     * 由于脚本无响应（挂起或无限循环），行为包的脚本运行被终止。
     */
    Hang = 'Hang',
    /**
     * @remarks
     * Script runtime for a behavior pack is terminated due to a
     * stack overflow (a long, and potentially infinite) chain of
     * function calls.
     *
     * 由于堆栈溢出（一个长的，可能无限的）函数调用链，行为包的脚本运行被终止。
     */
    StackOverflow = 'StackOverflow',
}