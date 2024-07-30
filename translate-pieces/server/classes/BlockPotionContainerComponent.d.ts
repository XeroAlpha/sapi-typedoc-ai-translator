/* IMPORT */ import { BlockLiquidContainerComponent, ItemStack } from '../index';

/**
 * @beta
 * Represents a fluid container block that currently contains a
 * potion.
 * 
 * 表示当前包含药水的流体容器方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockPotionContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:potionContainer';
    /**
     * @remarks
     * Sets the potion type based on an item stack.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 根据物品堆设置药水类型。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws 此函数可能会抛出错误。
     */
    setPotionType(itemStack: ItemStack): void;
}