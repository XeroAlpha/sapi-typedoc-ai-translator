/**
 * @rc
 * Contains properties for enabling/disabling player input
 * permissions.
 * 
 * 包含用于启用/禁用玩家输入权限的属性。
 */
export class PlayerInputPermissions {
    private constructor();
    /**
     * @remarks
     * Camera input permissions for the player. If set to true,
     * input relating to camera movement is enabled for the player.
     * 
     * 玩家的摄像头输入权限。如果设置为 true，则允许玩家进行与摄像头移动相关的输入。
     */
    cameraEnabled: boolean;
    /**
     * @remarks
     * Movement input permissions for the player. If set to true
     * input relating to movement is enabled for the player.
     * 
     * 玩家的移动输入权限。如果设置为 true，则允许玩家进行与移动相关的输入。
     */
    movementEnabled: boolean;
}