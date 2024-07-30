/* IMPORT */ import { WeatherChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to weather changing.
 * 
 * 管理与天气变化相关的回调。
 */
export class WeatherChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when weather changes.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 添加一个将在天气变化时被调用的回调。
     */
    subscribe(callback: (arg: WeatherChangeAfterEvent) => void): (arg: WeatherChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when weather changes.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 移除一个在天气变化时被调用的回调。
     */
    unsubscribe(callback: (arg: WeatherChangeAfterEvent) => void): void;
}