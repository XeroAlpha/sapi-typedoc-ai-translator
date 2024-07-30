/* IMPORT */ import { IButtonPushAfterEventSignal } from '../index';

/**
 * Manages callbacks that are connected to when a button is
 * pushed.
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
 * 管理与按钮被按下事件相关的回调。
 * @example buttonPushEvent.ts
 * ```typescript
 * // 导入必要的模块
 * import { world, ButtonPushAfterEvent, system } from '@minecraft/server';
 *
 * // 订阅按钮按下事件
 * world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
 *     // 获取事件发生的地点
 *     const eventLoc = buttonPushEvent.block.location;
 *
 *     // 发送消息，显示事件发生的时间和红石能量值
 *     world.sendMessage(
 *         `在时间刻 ${system.currentTick} 按下按钮，红石能量值：${buttonPushEvent.block.getRedstonePower()}`
 *     );
 * });
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ButtonPushAfterEventSignal extends IButtonPushAfterEventSignal {
    private constructor();
}