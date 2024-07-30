/* IMPORT */ import { BlockEvent, Entity, Vector3 } from '../index';

/**
 * Contains information related to changes to a target block
 * hit.
 * 
 * 包含与被击打的目标方块变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class TargetBlockHitAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The position where the source hit the block.
     *
     * 源击中方块的位置。
     */
    readonly hitVector: Vector3;
    /**
     * @remarks
     * The redstone power before the block is hit.
     *
     * 方块被击打前的红石能量。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power at the time the block is hit.
     *
     * 方块被击打时的红石能量。
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Optional source that hit the target block.
     *
     * 可选的击打目标方块的源实体。
     */
    readonly source: Entity;
}