/* IMPORT */ import { TargetBlockHitAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a target block
 * is hit.
 * 
 * 管理与目标方块被击中时相关的回调。
 */
export class TargetBlockHitAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在目标方块被击中时调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: TargetBlockHitAfterEvent) => void): (arg: TargetBlockHitAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a target block is
     * hit.
     *
     * This function can't be called in read-only mode.
     *
     * 移除一个在目标方块被击中时不再调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: TargetBlockHitAfterEvent) => void): void;
}