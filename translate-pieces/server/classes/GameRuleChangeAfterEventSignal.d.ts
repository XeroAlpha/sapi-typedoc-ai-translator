/* IMPORT */ import { GameRuleChangeAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a
 * world.gameRules property has changed.
 * 
 * 管理与 world.gameRules 属性更改相关的回调。
 */
export class GameRuleChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a world.gameRules
     * property is changed.
     * 
     * 添加一个回调，当 world.gameRules 属性更改时将被调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: GameRuleChangeAfterEvent) => void): (arg: GameRuleChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a world.gameRules
     * property is changed.
     * 
     * 从 world.gameRules 属性更改时的调用中移除回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: GameRuleChangeAfterEvent) => void): void;
}