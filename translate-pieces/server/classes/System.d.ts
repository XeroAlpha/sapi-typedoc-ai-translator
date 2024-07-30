/* IMPORT */ import { SystemAfterEvents, SystemBeforeEvents, minecraftcommon } from '../index';

/**
 * A class that provides system-level events and functions.
 * 
 * 提供系统级事件和功能的类。
 */
export class System {
    private constructor();
    /**
     * @remarks
     * Returns a collection of after-events for system-level
     * operations.
     * 
     * 返回一组系统级操作的后置事件。
     */
    readonly afterEvents: SystemAfterEvents;
    /**
     * @beta
     * @remarks
     * Returns a collection of before-events for system-level
     * operations.
     * 
     * 返回一组系统级操作的前置事件。
     */
    readonly beforeEvents: SystemBeforeEvents;
    /**
     * @remarks
     * Represents the current world tick of the server.
     * 
     * 表示服务器当前的世界刻数。
     */
    readonly currentTick: number;
    /**
     * @rc
     * @remarks
     * Cancels the execution of a job queued via {@link
     * System.runJob}.
     * 
     * 取消通过 {@link System.runJob} 排队的任务执行。
     * 
     * @param jobId
     * The job ID returned from {@link System.runJob}.
     * 
     * 通过 {@link System.runJob} 返回的任务 ID。
     */
    clearJob(jobId: number): void;
    /**
     * @remarks
     * Cancels the execution of a function run that was previously
     * scheduled via {@link System.run}.
     * 
     * 取消之前通过 {@link System.run} 计划的功能运行。
     */
    clearRun(runId: number): void;
    /**
     * @remarks
     * Runs a specified function at the next available future time.
     * This is frequently used to implement delayed behaviors and
     * game loops. When run within the context of an event handler,
     * this will generally run the code at the end of the same tick
     * where the event occurred. When run in other code (a
     * system.run callout), this will run the function in the next
     * tick. Note, however, that depending on load on the system,
     * running in the same or next tick is not guaranteed.
     * 
     * 在下一个可用的时间运行指定的函数。这通常用于实现延迟行为和游戏循环。
     * 当在事件处理器的上下文中运行时，通常会在事件发生的同一刻的末尾运行代码。
     * 当在其他代码（system.run 调用）中运行时，将在下一刻运行函数。但是需要注意的是，
     * 根据系统的负载情况，在同一刻或下一刻运行不是保证的。
     * 
     * @param callback
     * Function callback to run at the next game tick.
     * 
     * 下一游戏刻要运行的函数回调。
     * @returns
     * An opaque identifier that can be used with the `clearRun`
     * function to cancel the execution of this run.
     * 
     * 一个不透明的标识符，可以与 `clearRun` 函数一起使用来取消此运行的执行。
     * @example trapTick.ts
     * ```typescript
     * import { system, world } from '@minecraft/server';
     *
     * function printEveryMinute() {
     *     try {
     *         // Minecraft runs at 20 ticks per second.
     *         if (system.currentTick % 1200 === 0) {
     *             world.sendMessage('Another minute passes...');
     *         }
     *     } catch (e) {
     *         console.warn('Error: ' + e);
     *     }
     *
     *     system.run(printEveryMinute);
     * }
     *
     * printEveryMinute();
     * ```
     */
    run(callback: () => void): number;
    /**
     * @remarks
     * Runs a set of code on an interval.
     * 
     * 在指定间隔运行一段代码。
     * 
     * @param callback
     * Functional code that will run when this interval occurs.
     * 
     * 当此间隔发生时将运行的功能代码。
     * @param tickInterval
     * An interval of every N ticks that the callback will be
     * called upon.
     * 
     * 回调将在每 N 刻被调用的间隔。
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * 
     * 一个不透明的句柄，可以与 clearRun 方法一起使用以停止此函数在指定间隔内的运行。
     * @example every30Seconds.ts
     * ```typescript
     * import { system, world } from '@minecraft/server';
     *
     * const intervalRunIdentifier = Math.floor(Math.random() * 10000);
     *
     * system.runInterval(() => {
     *     world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
     * }, 600);
     * ```
     */
    runInterval(callback: () => void, tickInterval?: number): number;
    /**
     * @rc
     * @remarks
     * Queues a generator to run until completion.  The generator
     * will be given a time slice each tick, and will be run until
     * it yields or completes.
     * 
     * 将生成器排队直到完成。生成器将在每一刻分配时间片，并一直运行到它产生结果或完成。
     * 
     * @param generator
     * The instance of the generator to run.
     * 
     * 要运行的生成器实例。
     * @returns
     * An opaque handle that can be used with {@link
     * System.clearJob} to stop the run of this generator.
     * 
     * 一个不透明的句柄，可以与 {@link System.clearJob} 一起使用以停止此生成器的运行。
     * @example cubeGenerator.ts
     * ```typescript
     * import { BlockPermutation, DimensionLocation, world, ButtonPushAfterEvent, system } from '@minecraft/server';
     *
     * // A simple generator that places blocks in a cube at a specific location
     * // with a specific size, yielding after every block place.
     * function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
     *     for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
     *         for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
     *             for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
     *                 const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
     *                 if (block) {
     *                     block.setPermutation(blockPerm);
     *                 }
     *                 yield;
     *             }
     *         }
     *     }
     * }
     *
     * // When a button is pushed, we will place a 15x15x15 cube of cobblestone 10 blocks above it
     * world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
     *     const cubePos = buttonPushEvent.block.location;
     *     cubePos.y += 10;
     *
     *     const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');
     *
     *     system.runJob(blockPlacingGenerator(blockPerm, { dimension: buttonPushEvent.dimension, ...cubePos }, 15));
     * });
     * ```
     */
    runJob(generator: Generator<void, void, void>): number;
    /**
     * @remarks
     * Runs a set of code at a future time specified by tickDelay.
     * 
     * 在由 tickDelay 指定的未来时间运行一段代码。
     * 
     * @param callback
     * Functional code that will run when this timeout occurs.
     * 
     * 当此超时发生时将运行的功能代码。
     * @param tickDelay
     * Amount of time, in ticks, before the interval will be
     * called.
     * 
     * 在间隔被调用前的时间量，以刻为单位。
     * @returns
     * An opaque handle that can be used with the clearRun method
     * to stop the run of this function on an interval.
     * 
     * 一个不透明的句柄，可以与 clearRun 方法一起使用以停止此函数在指定间隔内的运行。
     */
    runTimeout(callback: () => void, tickDelay?: number): number;
    /**
     * @rc
     * @throws This function can throw errors.
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * 等待指定数量的刻数。
     */
    waitTicks(ticks: number): Promise<void>;
}