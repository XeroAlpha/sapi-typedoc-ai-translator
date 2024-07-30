/* IMPORT */ import { WeatherType } from '../index';

/**
 * Contains information related to changes in weather in the
 * environment.
 * 
 * 包含有关环境中天气变化的相关信息。
 */
export class WeatherChangeBeforeEvent {
    private constructor();
    /**
     * @remarks
     * If set to true the weather change will be cancelled.
     * 
     * 若设置为 `true`，则取消天气变化。
     */
    cancel: boolean;
    /**
     * @remarks
     * Sets the duration of the new weather (in ticks).
     * 
     * 设置新天气的持续时间（以刻为单位）。
     */
    duration: number;
    /**
     * @remarks
     * The type of weather that will be applied.
     * 
     * 即将应用的天气类型。
     */
    newWeather: WeatherType;
    /**
     * @remarks
     * The type of weather that it was prior to the event being
     * fired.
     * 
     * 触发此事件之前所处的天气类型。
     */
    readonly previousWeather: WeatherType;
}