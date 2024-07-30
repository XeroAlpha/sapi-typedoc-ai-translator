/* IMPORT */ import { BlockVolume, CompoundBlockVolumeAction, CompoundBlockVolumePositionRelativity } from '../index';

/**
 * @beta
 * This interface defines an entry into the {@link
 * CompoundBlockVolume} which represents a volume of positive
 * or negative space.
 * 
 * 此接口定义了一个条目，用于进入表示正空间或负空间体积的
 * {@link CompoundBlockVolume}。
 */

export interface CompoundBlockVolumeItem {
    /**
     * @remarks
     * The 'action' defines how the block volume is represented in
     * the compound block volume stack.
     * 'Add' creates a block volume which is positively selected
     * 'Subtract' creates a block volume which represents a hole or
     * negative space in the overall compound block volume.
     * 
     * 'action' 定义了如何在复合方块体积堆栈中表示方块体积。
     * 'Add' 创建一个被正选中的方块体积。
     * 'Subtract' 创建一个代表整个复合方块体积中的洞或负空间的方块体积。
     */
    action?: CompoundBlockVolumeAction;
    /**
     * @remarks
     * The relativity enumeration determines whether the
     * BlockVolume specified is positioned relative to the parent
     * compound block volume origin, or in absolute world space.
     * 
     * 'relativity' 枚举确定指定的 `BlockVolume` 是否相对于父复合方块体积的原点定位，或者在绝对世界空间中定位。
     */
    locationRelativity?: CompoundBlockVolumePositionRelativity;
    /**
     * @remarks
     * The volume of space
     * 
     * 空间体积。
     */
    volume: BlockVolume;
}