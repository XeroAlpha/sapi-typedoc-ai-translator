/* IMPORT */ import { InputPermissionCategory, Player } from '../index';

/**
 * @rc
 * Contains information regarding an event after a players
 * input permissions change.
 * 
 * 包含玩家输入权限更改后事件的相关信息。
 */
export class PlayerInputPermissionCategoryChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The category of input permissions that have changed.
     * 
     * 已更改的输入权限类别。
     */
    readonly category: InputPermissionCategory;
    /**
     * @remarks
     * The enabled/disabled state of the players input permissions.
     * 
     * 玩家输入权限的启用/禁用状态。
     */
    readonly enabled: boolean;
    /**
     * @remarks
     * The player that has had their input permissions changed.
     * 
     * 输入权限被更改的玩家。
     */
    readonly player: Player;
}