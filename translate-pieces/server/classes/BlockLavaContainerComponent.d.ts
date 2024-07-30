/* IMPORT */ import { BlockLiquidContainerComponent } from '../index';

/**
 * @beta
 * Represents a fluid container block that currently contains
 * lava.
 * 
 * 表示当前包含熔岩的流体容器方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLavaContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:lavaContainer';
}