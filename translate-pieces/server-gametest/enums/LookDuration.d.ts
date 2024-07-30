/**
 * Defines different durations for how long an entity should look at something.
 * 
 * 定义了实体注视某物的不同持续时间。
 */

export enum LookDuration {
    Continuous = 'Continuous',
    // 持续注视
    Instant = 'Instant',
    // 瞬间注视
    UntilMove = 'UntilMove',
    // 直到移动为止注视
}