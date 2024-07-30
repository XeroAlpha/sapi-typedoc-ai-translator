/**
 * @rc
 * Input permission categories. Used by
 * @minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent
 * to specify which category was changed.
 * 
 * 输入权限类别。由 @minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent
 * 使用来指定更改了哪个类别。
 */
export enum InputPermissionCategory {
    /**
     * @remarks
     * Player input relating to camera movement.
     * 
     * 与摄像机移动相关的玩家输入。
     */
    Camera = 1,
    /**
     * @remarks
     * Player input relating to movement.
     * 
     * 与移动相关的玩家输入。
     */
    Movement = 2,
}