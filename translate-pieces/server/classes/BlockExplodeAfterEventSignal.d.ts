/* IMPORT */ import { BlockExplodeAfterEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are connected to when an explosion
 * occurs, as it impacts individual blocks.
 * 
 * 管理与爆炸影响到单个方块时相关的回调。
 */
export class BlockExplodeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     * 添加一个将在爆炸发生且影响到单个方块时被调用的回调。
     *
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: BlockExplodeAfterEvent) => void): (arg: BlockExplodeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs, as it impacts individual blocks.
     *
     * This function can't be called in read-only mode.
     *
     * 从爆炸发生且影响到单个方块时的回调列表中移除一个回调。
     *
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: BlockExplodeAfterEvent) => void): void;
}