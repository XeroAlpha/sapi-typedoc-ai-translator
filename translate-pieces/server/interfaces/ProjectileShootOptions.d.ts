/**
 * Optional arguments for
 * @minecraft/server.EntityProjectileComponent.shoot.
 * 
 * 为 @minecraft/server.EntityProjectileComponent.shoot 提供的可选参数。
 */
export interface ProjectileShootOptions {
    /**
     * @remarks
     * Controls the accuracy of the shot. A value of 0 is perfect
     * accuracy.
     * 
     * 控制射击的准确性。值为 0 表示完美准确。
     */
    uncertainty?: number;
}