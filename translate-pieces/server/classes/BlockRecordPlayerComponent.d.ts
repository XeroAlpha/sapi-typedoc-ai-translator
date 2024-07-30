/* IMPORT */ import { BlockComponent, ItemStack, ItemType } from '../index';

/**
 * @beta
 * Represents a block that can play a record.
 * 
 * 表示可以播放唱片的方块。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockRecordPlayerComponent extends BlockComponent {
    private constructor();
    static readonly componentId = 'minecraft:record_player';
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * @remarks
     * 此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    ejectRecord(): void;
    /**
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    getRecord(): ItemStack | undefined;
    /**
     * @remarks
     * Returns true if the record-playing block is currently
     * playing a record.
     *
     * @throws This function can throw errors.
     * 
     * @remarks
     * 如果播放唱片的方块当前正在播放唱片，则返回 true。
     *
     * @throws 此函数可能抛出错误。
     */
    isPlaying(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * @remarks
     * 此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    pauseRecord(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * @remarks
     * 此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    playRecord(): void;
    /**
     * @remarks
     * Sets and plays a record based on an item type.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * @remarks
     * 根据物品类型设置并播放唱片。
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    setRecord(recordItemType?: ItemType | string, startPlaying?: boolean): void;
}