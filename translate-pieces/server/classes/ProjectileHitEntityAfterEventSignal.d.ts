/* IMPORT */ import { ProjectileHitEntityAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a projectile
 * hits an entity.
 * 
 * 管理与弹射物击中实体时相关的回调。
 */
export class ProjectileHitEntityAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在弹射物击中实体时被调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): (arg: ProjectileHitEntityAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a projectile hits
     * an entity.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个原本在弹射物击中实体时会被调用的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: ProjectileHitEntityAfterEvent) => void): void;
}