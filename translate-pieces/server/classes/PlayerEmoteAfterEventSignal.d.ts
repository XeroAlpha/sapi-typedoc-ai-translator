/* IMPORT */ import { PlayerEmoteAfterEvent } from '../index';

/**
 * @beta
 */
export class PlayerEmoteAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: PlayerEmoteAfterEvent) => void): (arg: PlayerEmoteAfterEvent) => void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PlayerEmoteAfterEvent) => void): void;
}