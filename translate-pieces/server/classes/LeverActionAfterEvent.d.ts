/* IMPORT */ import { BlockEvent, Player } from '../index';

/**
 * Contains information related to changes to a lever
 * activating or deactivating.
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, LeverActionAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
 *     console.warn(
 *         `Lever event at ${system.currentTick} with power: ${leverActivateEvent.block.getRedstonePower()}`,
 *     );
 * });
 *
 * ```
 * 
 * 包含与拉杆激活或去激活相关的事件信息。
 * @example leverActionEvent.ts
 * ```typescript
 * import { world, system, LeverActionAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.leverAction.subscribe((leverActivateEvent: LeverActionAfterEvent) => {
 *     console.warn(
 *         `在 ${system.currentTick} 时刻，拉杆事件的红石能量为：${leverActivateEvent.block.getRedstonePower()}`,
 *     );
 * });
 *
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LeverActionAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * True if the lever is activated (that is, transmitting
     * power).
     * 
     * 如果拉杆被激活（即，正在传输能量），则为真。
     */
    readonly isPowered: boolean;
    /**
     * @remarks
     * Optional player that triggered the lever activation.
     * 
     * 可选的触发拉杆激活的玩家。
     */
    readonly player: Player;
}