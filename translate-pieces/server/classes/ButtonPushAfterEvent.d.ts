/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * Contains information related to changes to a button push.
 * @example buttonPushEvent.ts
 * ```typescript
 * import { world, ButtonPushAfterEvent, system } from '@minecraft/server';
 *
 * world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     world.sendMessage(
 *         `Button push event at tick ${system.currentTick} Power:${buttonPushEvent.block.getRedstonePower()}`,
 *     );
 * });
 * ```
 * 
 * 包含按钮按下变化相关信息的类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * Optional source that triggered the button push.
     * 
     * 触发按钮按下的可选源实体。
     */
    readonly source: Entity;
}