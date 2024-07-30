/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Represents an event triggered when the primary selection changes.
 * 
 * 表示当主要选择发生变化时触发的事件。
 */
export class PrimarySelectionChangedEvent {
    private constructor();
    readonly volume?: minecraftserver.CompoundBlockVolume;
}