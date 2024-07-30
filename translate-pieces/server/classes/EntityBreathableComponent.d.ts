/* IMPORT */ import { BlockPermutation, EntityComponent } from '../index';

/**
 * @beta
 * Defines what blocks this entity can breathe in and gives
 * them the ability to suffocate.
 * 
 * 定义实体可以在哪些方块中呼吸，并赋予其窒息的能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityBreathableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The current air supply of the entity.
     *
     * This property can't be edited in read-only mode.
     *
     * @throws
     * Will throw an error if the air supply is out of bounds
     * [suffocationTime, maxAirSupply].
     * 
     * 实体当前的空气供应量。
     * 
     * 此属性在只读模式下无法编辑。
     * 
     * @throws
     * 如果空气供应超出范围 [suffocationTime, maxAirSupply]，将抛出错误。
     */
    airSupply: number;
    /**
     * @remarks
     * If true, this entity can breathe in air.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，此实体可以在空气中呼吸。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly breathesAir: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in lava.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，此实体可以在熔岩中呼吸。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly breathesLava: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in solid blocks.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，此实体可以在固体方块中呼吸。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly breathesSolids: boolean;
    /**
     * @remarks
     * If true, this entity can breathe in water.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，此实体可以在水中呼吸。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly breathesWater: boolean;
    /**
     * @remarks
     * If true, the entity is able to breathe.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，实体能够呼吸。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly canBreathe: boolean;
    /**
     * @remarks
     * If true, this entity will have visible bubbles while in
     * water.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，在水中时，此实体会有可见的气泡。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly generatesBubbles: boolean;
    /**
     * @remarks
     * Time in seconds to recover breath to maximum.
     *
     * @throws This property can throw when used.
     * 
     * 恢复呼吸至最大值所需的时间（秒）。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly inhaleTime: number;
    /**
     * @remarks
     * Time in seconds between suffocation damage.
     *
     * @throws This property can throw when used.
     * 
     * 窒息伤害之间的时间间隔（秒）。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly suffocateTime: number;
    /**
     * @remarks
     * Time in seconds the entity can hold its breath.
     *
     * @throws This property can throw when used.
     * 
     * 实体可以屏住呼吸的时间（秒）。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly totalSupply: number;
    static readonly componentId = 'minecraft:breathable';
    /**
     * @remarks
     * List of blocks this entity can breathe in, in addition to
     * the separate properties for classes of blocks.
     *
     * @throws This function can throw errors.
     * 
     * 实体除了特定类型的方块类别的独立属性外，还可以在其中呼吸的方块列表。
     * 
     * @throws 此函数可能抛出错误。
     */
    getBreatheBlocks(): BlockPermutation[];
    /**
     * @remarks
     * List of blocks this entity can't breathe in.
     *
     * @throws This function can throw errors.
     * 
     * 实体无法在其中呼吸的方块列表。
     * 
     * @throws 此函数可能抛出错误。
     */
    getNonBreatheBlocks(): BlockPermutation[];
}