/* IMPORT */ import { ProjectileHitBlockAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a projectile
 * hits a block.
 * 
 * 管理与弹射物击中方块时相关的回调。
 */
export class ProjectileHitBlockAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits a
     * block.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个回调，当弹射物击中方块时将被调用。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): (arg: ProjectileHitBlockAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * a block.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个在弹射物击中方块时的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ProjectileHitBlockAfterEvent) => void): void;
}