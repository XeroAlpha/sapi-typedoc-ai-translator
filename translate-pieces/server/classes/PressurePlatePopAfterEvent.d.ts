/* IMPORT */ import { BlockEvent } from '../index';

/**
 * Contains information related to changes to a pressure plate
 * pop.
 * 
 * 包含与压力板弹起相关的变化信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePopAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * popped.
     * 
     * 压力板弹起前的红石能量。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * pop.
     * 
     * 压力板弹起时的红石能量。
     */
    readonly redstonePower: number;
}