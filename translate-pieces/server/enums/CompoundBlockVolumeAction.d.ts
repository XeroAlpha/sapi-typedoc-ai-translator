/**
 * @beta
 * The Action enum determines how the CompoundBlockVolume
 * considers the associated CompoundBlockVolumeItem when
 * performing inside/outside calculations.
 * 
 * Action 枚举确定了 CompoundBlockVolume 在进行内外计算时如何考虑关联的 CompoundBlockVolumeItem。
 */
export enum CompoundBlockVolumeAction {
    /**
     * @remarks
     * The associated BlockVolume is considered a positive space,
     * and any intersection tests are considered hits
     * 
     * 关联的 BlockVolume 被视为正空间，并且任何相交测试都被认为是命中。
     */
    Add = 0,
    /**
     * @remarks
     * The associated BlockVolume is considered a negative or void
     * space, and any intersection tests are considered misses.
     * Using the Subtract action, it is possible to `punch holes`
     * in block volumes so that any intersection tests may pass
     * through such spaces
     * 
     * 关联的 BlockVolume 被视为负空间或虚空空间，任何相交测试都被认为是未命中。
     * 使用 Subtract 动作，可以在方块体积中“打孔”，以便任何相交测试都可以穿过这些空间。
     */
    Subtract = 1,
}