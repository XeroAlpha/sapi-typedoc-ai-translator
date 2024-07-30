/* IMPORT */ import { World } from '../index';

/**
 * Additional configuration options for {@link
 * World.playMusic}/{@link World.queueMusic} methods.
 * 
 * 用于 {@link World.playMusic}/{@link World.queueMusic} 方法的额外配置选项。
 */
export interface MusicOptions {
    /**
     * @remarks
     * Specifies a fade overlap for music at the end of play.
     * 
     * 指定播放结束时音乐的淡入淡出重叠时间。
     */
    fade?: number;
    /**
     * @remarks
     * If set to true, this music track will play repeatedly.
     * 
     * 如果设置为 true，此音乐曲目将循环播放。
     */
    loop?: boolean;
    /**
     * @remarks
     * Relative volume level of the music.
     * 
     * 音乐的相对音量级别。
     */
    volume?: number;
}