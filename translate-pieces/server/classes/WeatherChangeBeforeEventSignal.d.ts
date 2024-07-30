/* IMPORT */ import { WeatherChangeBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before weather
 * changing.
 * 
 * 管理与天气变化前关联的回调。
 */
export class WeatherChangeBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called before weather changes.
     * 
     * 在天气变化前添加一个将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called before weather changes.
     * 
     * 从天气变化前的调用列表中移除一个回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void;
}