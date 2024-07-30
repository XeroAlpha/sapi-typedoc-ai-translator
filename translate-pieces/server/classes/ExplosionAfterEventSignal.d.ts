/* IMPORT */ import { ExplosionAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when an explosion
 * occurs.
 * 
 * 管理与爆炸发生时关联的回调。
 */
export class ExplosionAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when an explosion
     * occurs.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * 添加一个将在爆炸发生时被调用的回调。
     */
    subscribe(callback: (arg: ExplosionAfterEvent) => void): (arg: ExplosionAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when an explosion
     * occurs.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * 从爆炸发生时的调用列表中移除一个回调。
     */
    unsubscribe(callback: (arg: ExplosionAfterEvent) => void): void;
}