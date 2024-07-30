/* IMPORT */ import { BlockLiquidContainerComponent } from '../index';

/**
 * @beta
 * Represents a fluid container block that currently contains
 * snow.
 * 
 * 表示当前包含雪的流体容器方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockSnowContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:snowContainer';
}