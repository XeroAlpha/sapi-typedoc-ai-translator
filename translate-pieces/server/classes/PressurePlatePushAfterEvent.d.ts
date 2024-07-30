/* IMPORT */ import { BlockEvent, Entity } from '../index';

/**
 * Contains information related to changes to a pressure plate
 * push.
 * 
 * 包含与压力板按下变化相关的信息。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PressurePlatePushAfterEvent extends BlockEvent {
    private constructor();
    /**
     * @remarks
     * The redstone power of the pressure plate before it was
     * pushed.
     *
     * 压力板被按下前的红石能量值。
     */
    readonly previousRedstonePower: number;
    /**
     * @remarks
     * The redstone power of the pressure plate at the time of the
     * push.
     *
     * 压力板按下时的红石能量值。
     */
    readonly redstonePower: number;
    /**
     * @remarks
     * Source that triggered the pressure plate push.
     *
     * 触发压力板按下的源头实体。
     */
    readonly source: Entity;
}