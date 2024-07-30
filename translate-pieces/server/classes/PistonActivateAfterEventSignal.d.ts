/* IMPORT */ import { PistonActivateAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to piston activations.
 * @example pistonAfterEvent.ts
 * ```typescript
 * import { world, system, PistonActivateAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
 *     console.warn(
 *         `Piston event at ${system.currentTick} ${(pistonEvent.piston.isMoving ? ' Moving' : 'Not moving')} with state: ${pistonEvent.piston.state}`,
 *     );
 * });
 * ```
 * 
 * 管理与活塞激活相关的回调。
 * @example pistonAfterEvent.ts
 * ```typescript
 * 导入 { world, system, PistonActivateAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.pistonActivate.subscribe((pistonEvent: PistonActivateAfterEvent) => {
 *     控制台警告(
 *         `在 ${system.currentTick} 处的活塞事件 ${(pistonEvent.piston.isMoving ? ' 正在移动' : '未移动')} 当前状态: ${pistonEvent.piston.state}`,
 *     );
 * });
 * ```
 */
export class PistonActivateAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    subscribe(callback: (arg: PistonActivateAfterEvent) => void): (arg: PistonActivateAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a piston expands
     * or retracts.
     * 
     * This function can't be called in read-only mode.
     * 
     * 当活塞伸展或缩回时，移除被调用的回调。
     * 
     * 此函数无法在只读模式下调用。
     */
    unsubscribe(callback: (arg: PistonActivateAfterEvent) => void): void;
}