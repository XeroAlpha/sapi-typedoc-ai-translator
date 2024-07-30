/* IMPORT */ import { EntityComponent, ItemStack } from '../index';

/**
 * @beta
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    /**
     * @throws This property can throw when used.
     * 
     * 当使用此属性时可能会抛出异常。
     */
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 此函数无法在只读模式下调用。
     * 
     * 调用此函数可能会抛出错误。
     */
    clear(): void;
}