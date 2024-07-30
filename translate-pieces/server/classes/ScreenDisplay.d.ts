/* IMPORT */ import { HudElement, HudVisibility, RawMessage, TitleDisplayOptions } from '../index';

/**
 * Contains information about user interface elements that are
 * showing up on the screen.
 * 
 * 包含有关显示在屏幕上的用户界面元素的信息。
 * 
 * @example setTitle.ts
 * ```typescript
 * import { world } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe((event) => {
 *     event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
 * });
 * ```
 * @example setTitleAndSubtitle.ts
 * ```typescript
 * import { world } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe((event) => {
 *     event.player.onScreenDisplay.setTitle('You respawned', {
 *         stayDuration: 100,
 *         fadeInDuration: 2,
 *         fadeOutDuration: 4,
 *         subtitle: 'Try not to die next time!',
 *     });
 * });
 * ```
 * @example titleCountdown.ts
 * ```typescript
 * import { world, system } from '@minecraft/server';
 *
 * world.afterEvents.playerSpawn.subscribe(event => {
 *     event.player.onScreenDisplay.setTitle('Get ready!', {
 *         stayDuration: 220,
 *         fadeInDuration: 2,
 *         fadeOutDuration: 4,
 *         subtitle: '10',
 *     });
 *
 *     let countdown = 10;
 *
 *     const intervalId = system.runInterval(() => {
 *         countdown--;
 *         event.player.onScreenDisplay.updateSubtitle(countdown.toString());
 *
 *         if (countdown == 0) {
 *             system.clearRun(intervalId);
 *         }
 *     }, 20);
 * });
 * ```
 * 
 * 屏幕显示类包含了屏幕上的用户界面元素信息。
 */

export class ScreenDisplay {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    getHiddenHudElements(): HudElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    hideAllExcept(hudElements?: HudElement[]): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    isForcedHidden(hudElement: HudElement): boolean;
    /**
     * @remarks
     * Returns true if the current reference to this screen display
     * manager object is valid and functional.
     * 
     * 如果当前对这个屏幕显示管理器对象的引用是有效且可用的，则返回 true。
     */
    isValid(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    resetHudElements(): void;
    /**
     * @remarks
     * Set the action bar text - a piece of text that displays
     * beneath the title and above the hot-bar.
     * 
     * 设置动作栏文本——一段显示在标题下方、热键栏上方的文本。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param text
     * New value for the action bar text.
     * 
     * 动作栏文本的新值。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets visibility of a particular element of the heads up
     * display (HUD).
     * 
     * 设置抬头显示（HUD）中特定元素的可见性。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param visible
     * Whether to set the HUD element to invisible, or to reset it
     * back to its default.
     * 
     * 是否将HUD元素设置为不可见，或者将其重置回默认状态。
     * 
     * @param hudElements
     * Optional list of HUD elements to configure visibility for.
     * 
     * 可选的HUD元素列表，用于配置可见性。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    /**
     * @remarks
     * Will cause a title to show up on the player's on screen
     * display. Will clear the title if set to empty string. You
     * can optionally specify an additional subtitle as well as
     * fade in, stay and fade out times.
     * 
     * 将导致标题出现在玩家的屏幕上。如果设置为空字符串，则会清除标题。您可以选择性地指定额外的副标题以及淡入、停留和淡出时间。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     * 
     * @example setTitle.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe((event) => {
     *     event.player.onScreenDisplay.setTitle('§o§6You respawned!§r');
     * });
     * ```
     * @example setTitleAndSubtitle.ts
     * ```typescript
     * import { world } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe((event) => {
     *     event.player.onScreenDisplay.setTitle('You respawned', {
     *         stayDuration: 100,
     *         fadeInDuration: 2,
     *         fadeOutDuration: 4,
     *         subtitle: 'Try not to die next time!',
     *     });
     * });
     * ```
     * @example titleCountdown.ts
     * ```typescript
     * import { world, system } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe(event => {
     *     event.player.onScreenDisplay.setTitle('Get ready!', {
     *         stayDuration: 220,
     *         fadeInDuration: 2,
     *         fadeOutDuration: 4,
     *         subtitle: '10',
     *     });
     *
     *     let countdown = 10;
     *
     *     const intervalId = system.runInterval(() => {
     *         countdown--;
     *         event.player.onScreenDisplay.updateSubtitle(countdown.toString());
     *
     *         if (countdown == 0) {
     *             system.clearRun(intervalId);
     *         }
     *     }, 20);
     * });
     * ```
     */
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    /**
     * @remarks
     * Updates the subtitle if the subtitle was previously
     * displayed via the setTitle method.
     * 
     * 如果之前通过 setTitle 方法显示了副标题，则更新副标题。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}