/**
 * An enumeration describing the state of a block piston.
 * 
 * 描述活塞方块状态的枚举。
 */
export enum BlockPistonState {
    /**
     * @remarks
     * Whether the piston is fully expanded.
     * 
     * 活塞是否完全伸出。
     */
    Expanded = 'Expanded',
    /**
     * @remarks
     * Whether the piston is in the process of expanding.
     * 
     * 活塞是否正在伸出过程中。
     */
    Expanding = 'Expanding',
    /**
     * @remarks
     * Whether the piston is fully retracted.
     * 
     * 活塞是否完全缩回。
     */
    Retracted = 'Retracted',
    /**
     * @remarks
     * Whether the piston is in the process of retracting.
     * 
     * 活塞是否正在缩回过程中。
     */
    Retracting = 'Retracting',
}