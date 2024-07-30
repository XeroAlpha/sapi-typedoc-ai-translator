/* IMPORT */ import { DataDrivenEntityTriggerAfterEvent, EntityDataDrivenTriggerEventOptions } from '../index';

/**
 * Contains event registration related to firing of a data
 * driven entity event - for example, the
 * minecraft:ageable_grow_up event on a chicken.
 * 
 * 包含与数据驱动实体事件触发相关的事件注册，例如鸡身上的
 * minecraft:ageable_grow_up 事件。
 */
export class DataDrivenEntityTriggerAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     * 
     * 添加一个回调，在数据驱动实体事件触发后被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(
        callback: (arg: DataDrivenEntityTriggerAfterEvent) => void,
        options?: EntityDataDrivenTriggerEventOptions,
    ): (arg: DataDrivenEntityTriggerAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback that will be called after a data driven
     * entity event is triggered.
     *
     * This function can't be called in read-only mode.
     * 
     * 移除一个回调，该回调会在数据驱动实体事件触发后被调用。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void;
}