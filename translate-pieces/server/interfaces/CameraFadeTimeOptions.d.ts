/**
 * Contains timings for a fade transition.
 * 
 * 包含淡入淡出过渡的时间设置。
 */
export interface CameraFadeTimeOptions {
    /**
     * @remarks
     * Time, in seconds, for a fade-in.
     * 
     * 淡入所需时间，以秒为单位。
     */
    fadeInTime: number;
    /**
     * @remarks
     * Time, in seconds, for a fade-out.
     * 
     * 淡出所需时间，以秒为单位。
     */
    fadeOutTime: number;
    /**
     * @remarks
     * Time, in seconds, to hold the full screen color.
     * 
     * 显示全屏颜色的时间，以秒为单位。
     */
    holdTime: number;
}