/**
 * Executes a set of steps defined via chained .thenXyz
 * methods, sequentially. This facilitates a 'script' of
 * GameTest setup methods and assertions over time.
 * 
 * 按顺序执行通过链接的 .thenXyz 方法定义的一系列步骤。这有助于实现随时间推移的 GameTest 设置方法和断言的“脚本”。
 */
export class GameTestSequence {
    private constructor();
    /**
     * @remarks
     * Runs the given callback as a step within a GameTest
     * sequence. Exceptions thrown within the callback will end
     * sequence execution.
     * 
     * This function can't be called in read-only mode.
     * 
     * 在 GameTest 序列中作为一步运行给定的回调。在回调中抛出的异常将终止序列执行。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param callback
     * Callback function to execute.
     * 
     * 要执行的回调函数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenExecute(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay, runs the given callback as a step within a
     * GameTest sequence. Exceptions thrown within the callback
     * will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * 
     * 在延迟后，在 GameTest 序列中作为一步运行给定的回调。在回调中抛出的异常将终止序列执行。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param delayTicks
     * Number of ticks to wait before executing the callback.
     * 
     * 在执行回调前等待的刻数。
     * 
     * @param callback
     * Callback function to execute.
     * 
     * 要执行的回调函数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Runs the given callback every tick for the given number of
     * ticks.
     * 
     * This function can't be called in read-only mode.
     * 
     * 对于指定数量的刻，每刻都运行给定的回调。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param callback
     * Callback function to execute.
     * 
     * 要执行的回调函数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence;
    /**
     * @remarks
     * Causes the test to fail if this step in the GameTest
     * sequence is reached.
     * 
     * This function can't be called in read-only mode.
     * 
     * 如果达到 GameTest 序列中的这一步，则导致测试失败。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param errorMessage
     * Error message summarizing the failure condition.
     * 
     * 概述失败条件的错误消息。
     */
    thenFail(errorMessage: string): void;
    /**
     * @remarks
     * Idles the GameTest sequence for the specified delayTicks.
     * 
     * This function can't be called in read-only mode.
     * 
     * 让 GameTest 序列空闲指定的 delayTicks。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param delayTicks
     * Number of ticks to delay for this step in the GameTest
     * sequence.
     * 
     * GameTest 序列中此步骤要延迟的刻数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenIdle(delayTicks: number): GameTestSequence;
    /**
     * @remarks
     * Marks the GameTest a success if this step is reached in the
     * GameTest sequence.
     * 
     * This function can't be called in read-only mode.
     * 
     * 如果在 GameTest 序列中达到这一步，则标记 GameTest 成功。
     * 
     * 此函数无法在只读模式下调用。
     */
    thenSucceed(): void;
    /**
     * @remarks
     * Executes the given callback every tick until it succeeds.
     * Exceptions thrown within the callback will end sequence
     * execution.
     * 
     * This function can't be called in read-only mode.
     * 
     * 直到成功为止，每刻都执行给定的回调。在回调中抛出的异常将终止序列执行。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * 
     * 要执行的测试回调函数。通常，此函数将在其中包含 .assertXyz 函数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenWait(callback: () => void): GameTestSequence;
    /**
     * @remarks
     * After a delay from the previous step, executes the given
     * callback every tick until it succeeds. Exceptions thrown
     * within the callback will end sequence execution.
     * 
     * This function can't be called in read-only mode.
     * 
     * 在从上一步延迟后，直到成功为止，每刻都执行给定的回调。在回调中抛出的异常将终止序列执行。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param delayTicks
     * Tick (after the previous step in the GameTest sequence) to
     * run the callback at.
     * 
     * 运行回调的刻（GameTest 序列中上一步之后）。
     * 
     * @param callback
     * Testing callback function to execute. Typically, this
     * function will have .assertXyz functions within it.
     * 
     * 要执行的测试回调函数。通常，此函数将在其中包含 .assertXyz 函数。
     * 
     * @returns
     * Returns a GameTestSequence object where additional .thenXyz
     * method steps can be added.
     * 
     * 返回一个 GameTestSequence 对象，其中可以添加额外的 .thenXyz 方法步骤。
     */
    thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence;
}