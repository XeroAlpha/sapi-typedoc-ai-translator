/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @remarks
 * Executes an operation over a BlockLocationIterator via
 * chunks to allow splitting operation over multiple game ticks
 * 
 * 通过区块分批执行 BlockLocationIterator 上的操作，允许操作跨越多个游戏刻执行。
 *
 * @param blockLocationIterator
 * the selection to iterator over
 * 
 * 要遍历的选择区域。
 * @param operation
 * the operation to apply over each block location
 * 
 * 在每个区块位置上应用的操作。
 */
export declare function executeLargeOperationFromIterator(
    blockLocationIterator: minecraftserver.BlockLocationIterator,
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;