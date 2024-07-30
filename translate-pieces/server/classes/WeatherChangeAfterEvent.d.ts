/* IMPORT */ import { WeatherType } from '../index';

/**
 * Contains information related to changes in weather in the
 * environment.
 * 
 * 包含与环境中天气变化相关的信息。
 */
export class WeatherChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * Dimension in which the weather has changed.
     * 
     * 天气发生变化的维度。
     */
    readonly dimension: string;
    /**
     * @remarks
     * The weather type after the weather was changed.
     * 
     * 天气变化后的新天气类型。
     */
    readonly newWeather: WeatherType;
    /**
     * @remarks
     * The weather type before the weather was changed.
     * 
     * 天气变化前的旧天气类型。
     */
    readonly previousWeather: WeatherType;
}