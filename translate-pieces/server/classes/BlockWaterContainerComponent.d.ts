/* IMPORT */ import { BlockLiquidContainerComponent, ItemType, RGBA } from '../index';

/**
 * @beta
 * Represents a fluid container block that currently contains
 * water.
 * 
 * 表示当前含有水的流体容器方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockWaterContainerComponent extends BlockLiquidContainerComponent {
    private constructor();
    static readonly componentId = 'minecraft:waterContainer';
    /**
     * @remarks
     * Adds an item and colors the water based on a dye item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 根据染料物品类型添加物品并给水染色。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws 此函数可能抛出错误。
     */
    addDye(itemType: ItemType): void;
    /**
     * @remarks
     * Retrieves a custom base color used for the sign text.
     *
     * @returns
     * Color that is used as the base color for sign text.
     * @throws This function can throw errors.
     * 
     * 获取用于牌子文字的自定义底色。
     * 
     * @returns 作为牌子文字底色的颜色。
     * @throws 此函数可能抛出错误。
     */
    getCustomColor(): RGBA;
    /**
     * @remarks
     * Sets a custom base color used for the sign text.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 设置用于牌子文字的自定义底色。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @throws 此函数可能抛出错误。
     */
    setCustomColor(color: RGBA): void;
}