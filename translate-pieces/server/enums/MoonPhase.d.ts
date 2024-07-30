/**
 * Enum containing the different phases of the moon based on
 * the current day.,Obtain the current MoonPhase using
 * world.getMoonPhase.
 *
 * 根据当前日期包含月相的不同阶段的枚举。使用 world.getMoonPhase
 * 获取当前的 MoonPhase。
 *
 * 月亮的圆缺程度控制着各种生物的行为，如沼泽生物群系中史莱姆的生成数量，
 * 骷髅和僵尸生成时带有装备的概率，以及蜘蛛生成时带有某种状态效果的概率。
 */
export enum MoonPhase {
    /**
     * @remarks
     * The brightest moon phase. During this phase, cats have a 50%
     * chance of spawning as black cats.
     *
     * 最亮的月相。在这个月相期间，猫有50%的机会生成为黑猫。
     */
    FullMoon = 0,
    /**
     * @remarks
     * The phase following the Full Moon.
     *
     * 满月之后的月相。
     */
    WaningGibbous = 1,
    /**
     * @remarks
     * The phase following the Waxing Crescent.
     *
     * 上弦月之后的月相。
     */
    FirstQuarter = 2,
    /**
     * @remarks
     * The phase following the Last Quarter.
     *
     * 下弦月之后的月相。
     */
    WaningCrescent = 3,
    /**
     * @remarks
     * The darkest moon phase.
     *
     * 最暗的月相。
     */
    NewMoon = 4,
    /**
     * @remarks
     * The phase following the New Moon.
     *
     * 新月之后的月相。
     */
    WaxingCrescent = 5,
    /**
     * @remarks
     * The phase following the Waning Gibbous.
     *
     * 凸月之后的月相。
     */
    LastQuarter = 6,
    /**
     * @remarks
     * The phase following the First Quarter.
     *
     * 上弦月之后的月相。
     */
    WaxingGibbous = 7,
}