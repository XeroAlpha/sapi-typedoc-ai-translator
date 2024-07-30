/* IMPORT */ import { Selection, minecraftserver } from '../index';

/**
 * @remarks
 * Executes an operation over a selection via chunks to allow
 * splitting operation over multiple game ticks
 * 
 * 通过区块来执行一个选择范围内的操作，允许操作跨越多个游戏刻进行分割执行。
 *
 * @param selection
 * the selection to iterator over
 * 
 * 要迭代的选择范围。
 * 
 * @param operation
 * the operation to apply over each block location
 * 
 * 在每个方块位置应用的操作。
 */
export declare function executeLargeOperation(
    selection: Selection,
    operation: (blockLocation: minecraftserver.Vector3) => void,
): Promise<void>;