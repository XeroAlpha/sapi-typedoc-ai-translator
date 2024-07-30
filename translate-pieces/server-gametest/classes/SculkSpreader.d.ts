/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Implements a class that can be used for testing sculk
 * spreading behaviors. This sculk spreader class can drive the
 * growth of sculk around a particular block.
 * 
 * 实现了一个可以用于测试潜影蔓延行为的类。这个潜影蔓延类可以驱动特定方块周围的潜影生长。
 */
export class SculkSpreader {
    private constructor();
    /**
     * @remarks
     * Gets the maximum charge of a sculk spreader.
     * 
     * 获取潜影蔓延器的最大充能值。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly maxCharge: number;
    /**
     * @remarks
     * Adds a cursor - which is a notional waypoint that the sculk
     * will spread in the direction of.
     * 
     * 添加一个光标——这是潜影将向其方向蔓延的名义上的路点。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    /**
     * @remarks
     * Retrieves the current position of the specified cursor.
     * 
     * 获取指定光标当前的位置。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getCursorPosition(index: number): minecraftserver.Vector3;
    /**
     * @remarks
     * Returns a number of overall cursors for this sculk spreader.
     * 
     * 返回此潜影蔓延器的光标总数。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getNumberOfCursors(): number;
    /**
     * @remarks
     * Gets the total current charge of the sculk spreader.
     * 
     * 获取潜影蔓延器的总当前充能值。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getTotalCharge(): number;
}