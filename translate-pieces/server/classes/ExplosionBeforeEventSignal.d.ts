/* IMPORT */ import { ExplosionBeforeEvent } from '../index';

/**
 * Manages callbacks that are connected to before an explosion
 * occurs.
 * 
 * 管理与爆炸发生前关联的回调。
 */
export class ExplosionBeforeEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when before an explosion
     * occurs. The callback can optionally change or cancel
     * explosion behavior.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在爆炸发生前被调用的回调。此回调可选择性地更改或取消爆炸行为。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: ExplosionBeforeEvent) => void): (arg: ExplosionBeforeEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called from before when an
     * explosion would occur.
     *
     * This function can't be called in read-only mode.
     *
     * 从爆炸发生前的调用列表中移除一个回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: ExplosionBeforeEvent) => void): void;
}