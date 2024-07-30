/* IMPORT */ import { PlayerInputPermissionCategoryChangeAfterEvent } from '../index';

/**
 * @rc
 * Manages callbacks that are connected to after a players
 * input permissions change.
 * 
 * 管理在玩家输入权限更改后连接的回调。
 */
export class PlayerInputPermissionCategoryChangeAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called after a players input
     * permissions change.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * 添加一个回调，该回调将在玩家输入权限更改后被调用。
     */
    subscribe(
        callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void,
    ): (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called after a players input
     * permissions change.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * 从在玩家输入权限更改后被调用的列表中移除一个回调。
     */
    unsubscribe(callback: (arg: PlayerInputPermissionCategoryChangeAfterEvent) => void): void;
}