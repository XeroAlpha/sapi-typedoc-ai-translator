/* IMPORT */ import { CameraFadeTimeOptions, RGB } from '../index';

/**
 * Used to initiate a full-screen color fade.
 * 
 * 用于启动全屏颜色渐变。
 */
export interface CameraFadeOptions {
    /**
     * @remarks
     * Fade color to use.
     * 
     * 要使用的渐变颜色。
     */
    fadeColor?: RGB;
    /**
     * @remarks
     * Time in seconds for the fade-in, hold, and fade-out seconds.
     * 
     * 渐入、保持和渐出的时间，单位为秒。
     */
    fadeTime?: CameraFadeTimeOptions;
}