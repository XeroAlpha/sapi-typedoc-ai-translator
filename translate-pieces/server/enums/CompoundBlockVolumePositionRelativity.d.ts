/**
 * @beta
 * An enum describing the relativity of the
 * CompoundBlockVolumeItem, relative to the parent
 * CompoundVolume.
 * 
 * 描述相对于父级 CompoundVolume 的 CompoundBlockVolumeItem 的相对性的一个枚举。
 */
export enum CompoundBlockVolumePositionRelativity {
    /**
     * @remarks
     * The locations within the associated BlockVolume are relative
     * to the CompoundBlockVolume to which they were added
     * 
     * 关联的 BlockVolume 内的位置相对于它们被添加到的 CompoundBlockVolume。
     */
    Relative = 0,
    /**
     * @remarks
     * The locations within the associated BlockVolume are in
     * absolute world space
     * 
     * 关联的 BlockVolume 内的位置处于绝对的世界空间中。
     */
    Absolute = 1,
}