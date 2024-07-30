/* IMPORT */ import { Vector3 } from '../index';

/**
 * Additional options for how a sound plays for a player.
 * 
 * 播放声音给玩家时的附加选项。
 */
export interface PlayerSoundOptions {
    /**
     * @remarks
     * Location of the sound; if not specified, the sound is played
     * near a player.
     * 
     * 声音的位置；如果不指定，声音将在玩家附近播放。
     */
    location?: Vector3;
    /**
     * @remarks
     * Optional pitch of the sound.
     * 
     * 可选的声音音调。
     */
    pitch?: number;
    /**
     * @remarks
     * Optional volume of the sound.
     * 
     * 可选的声音音量。
     */
    volume?: number;
}