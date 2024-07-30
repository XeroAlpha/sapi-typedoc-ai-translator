/**
 * Contains additional options for a playSound occurrence.
 * 
 * 包含播放声音事件的附加选项。
 */
export interface WorldSoundOptions {
    /**
     * @remarks
     * Pitch of the sound played.
     * 
     * 播放声音的音调。
     */
    pitch?: number;
    /**
     * @remarks
     * Relative volume and space by which this sound is heard.
     * 
     * 听到此声音的相对音量和空间。
     */
    volume?: number;
}