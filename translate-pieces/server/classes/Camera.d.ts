/* IMPORT */ import { CameraDefaultOptions, CameraFadeOptions, CameraFixedBoomOptions, CameraSetFacingOptions, CameraSetLocationOptions, CameraSetPosOptions, CameraSetRotOptions } from '../index';

/**
 * Contains methods relating to the active camera for the
 * specified player.
 * 
 * 包含与指定玩家的活动摄像机相关的方法。
 */
export class Camera {
    private constructor();
    /**
     * @remarks
     * Clears the active camera for the specified player. Causes
     * the specified players to end any in-progress camera
     * perspectives, including any eased camera motions, and return
     * to their normal perspective.
     * 
     * 清除指定玩家的活动摄像机。导致指定玩家结束所有正在进行的摄像机视角，包括任何平滑的摄像机动画，并恢复到正常视角。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     */
    clear(): void;
    /**
     * @remarks
     * Begins a camera fade transition. A fade transition is a
     * full-screen color that fades-in, holds, and then fades-out.
     * 
     * 开始摄像机淡入淡出过渡。淡入淡出过渡是一种全屏颜色，先渐入、保持，然后渐出。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param fadeCameraOptions
     * Additional options around camera fade operations.
     * 
     * 摄像机淡入淡出操作的附加选项。
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     */
    fade(fadeCameraOptions?: CameraFadeOptions): void;
    /**
     * @remarks
     * Sets the current active camera for the specified player.
     * 
     * 设置指定玩家当前的活动摄像机。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param cameraPreset
     * Identifier of a camera preset file defined within JSON.
     * 
     * 在JSON中定义的摄像机预设文件的标识符。
     * @param setOptions
     * Additional options for the camera.
     * 
     * 摄像机的附加选项。
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     */
    setCamera(
        cameraPreset: string,
        setOptions?:
            | CameraDefaultOptions
            | CameraFixedBoomOptions
            | CameraSetFacingOptions
            | CameraSetLocationOptions
            | CameraSetPosOptions
            | CameraSetRotOptions,
    ): void;
}