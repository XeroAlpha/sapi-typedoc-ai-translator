/* IMPORT */ import { ModeChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a player editor
 * mode changes.
 * 
 * 管理与玩家编辑模式变化相关的回调。
 */
export class ModeChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Subscribes the specified callback to an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     * 订阅指定的回调到编辑模式变化后事件。
     *
     * 此函数不能在只读模式下调用。
     */
    subscribe(callback: (arg: ModeChangeAfterEvent) => void): (arg: ModeChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes the specified callback from an editor mode change
     * after event.
     *
     * This function can't be called in read-only mode.
     *
     * 从编辑模式变化后事件中移除指定的回调。
     *
     * 此函数不能在只读模式下调用。
     */
    unsubscribe(callback: (arg: ModeChangeAfterEvent) => void): void;
}