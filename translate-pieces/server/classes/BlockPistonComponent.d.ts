/* IMPORT */ import { Block, BlockComponent, BlockPistonState, Vector3 } from '../index';

/**
 * 当存在时，此方块具有活塞般的特性。包含用于发现方块活塞状态的额外属性。
 */
// @ts-ignore 允许类继承，适用于原生定义的类
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Whether the piston is in the process of expanding or
     * retracting.
     * 
     * 活塞是否正在伸展或缩回的过程中。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能抛出异常。
     */
    readonly isMoving: boolean;
    /**
     * @remarks
     * The current state of the piston.
     * 
     * 活塞的当前状态。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能抛出异常。
     */
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    /**
     * @remarks
     * Retrieves a set of blocks that this piston is connected
     * with.
     * 
     * 获取与此活塞相连的一组方块。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getAttachedBlocks(): Block[];
    /**
     * @remarks
     * Retrieves a set of block locations that this piston is
     * connected with.
     * 
     * 获取与此活塞相连的一组方块位置。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getAttachedBlocksLocations(): Vector3[];
}