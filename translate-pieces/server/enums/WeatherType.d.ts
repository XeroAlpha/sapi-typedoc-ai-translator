/**
 * Used to specify the type of weather condition within the
 * world.
 * 
 * 用于指定世界中的天气状况类型。
 */
export enum WeatherType {
    /**
     * @remarks
     * Specifies a clear weather condition.
     * 
     * 指定晴朗的天气状况。
     */
    Clear = 'Clear',
    /**
     * @remarks
     * Specifies a rain weather condition.
     * 
     * 指定下雨的天气状况。
     */
    Rain = 'Rain',
    /**
     * @remarks
     * Specifies a rain and thunder weather condition.
     * 
     * 指定雷雨的天气状况。
     */
    Thunder = 'Thunder',
}