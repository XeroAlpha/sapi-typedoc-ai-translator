/**
 * Provides numeric values for common periods in the Minecraft
 * day.
 * 
 * 提供 Minecraft 日常周期中常见时段的数值。
 */
export enum TimeOfDay {
    /**
     * @remarks
     * Sets the time to the start of the day, which is time of the
     * day 1,000 (or the equivalent of 7am) in Minecraft.
     * 
     * 将时间设置为一天的开始，即 Minecraft 中的一天 1,000 时刻（相当于早上 7 点）。
     */
    Day = 1000,
    /**
     * @remarks
     * Sets the time to noon, which is time of the day 6,000 in
     * Minecraft.
     * 
     * 将时间设置为中午，即 Minecraft 中的一天 6,000 时刻。
     */
    Noon = 6000,
    /**
     * @remarks
     * Sets the time to sunset, which is time of the day 12,000 (or
     * the equivalent of 6pm) in Minecraft.
     * 
     * 将时间设置为日落，即 Minecraft 中的一天 12,000 时刻（相当于下午 6 点）。
     */
    Sunset = 12000,
    /**
     * @remarks
     * Sets the time to night, which is time of the day 13,000 (or
     * the equivalent of 7:00pm) in Minecraft.
     * 
     * 将时间设置为夜晚，即 Minecraft 中的一天 13,000 时刻（相当于晚上 7 点）。
     */
    Night = 13000,
    /**
     * @remarks
     * Sets the time to midnight, which is time of the day 18,000
     * (or the equivalent of 12:00am) in Minecraft.
     * 
     * 将时间设置为午夜，即 Minecraft 中的一天 18,000 时刻（相当于凌晨 12 点）。
     */
    Midnight = 18000,
    /**
     * @remarks
     * Sets the time to sunrise, which is time of the day 23,000
     * (or the equivalent of 5am) in Minecraft.
     * 
     * 将时间设置为日出，即 Minecraft 中的一天 23,000 时刻（相当于早上 5 点）。
     */
    Sunrise = 23000,
}