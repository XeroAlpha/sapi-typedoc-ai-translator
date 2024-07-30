/* IMPORT */ import { Entity, EntityComponent, Seat } from '../index';

/**
 * 当添加此组件后，实体具备被另一个实体骑乘的能力。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityRideableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Zero-based index of the seat that can used to control this
     * entity.
     *
     * 可用于控制此实体的座位的基于零的索引。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly controllingSeat: number;
    /**
     * @remarks
     * Determines whether interactions are not supported if the
     * entity is crouching.
     *
     * 决定当实体蹲下时是否不支持交互。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly crouchingSkipInteract: boolean;
    /**
     * @remarks
     * Set of text that should be displayed when a player is
     * looking to ride on this entity (commonly with touch-screen
     * controls).
     *
     * 当玩家准备骑乘此实体时应显示的文字集（通常用于触摸屏控制）。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly interactText: string;
    /**
     * @remarks
     * The max width a mob can be to be a passenger.
     *
     * 作为乘客的生物的最大宽度。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly passengerMaxWidth: number;
    /**
     * @remarks
     * If true, this entity will pull in entities that are in the
     * correct family_types into any available seat.
     *
     * 如果为真，此实体会将处于正确家族类型的实体拉入任一可用的座位。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly pullInEntities: boolean;
    /**
     * @remarks
     * If true, this entity will be picked when looked at by the
     * rider.
     *
     * 如果为真，此实体会在骑手注视时被选中。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly riderCanInteract: boolean;
    /**
     * @remarks
     * Number of seats for riders defined for this entity.
     *
     * 此实体定义的骑手座位数。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性可能会抛出异常。
     */
    readonly seatCount: number;
    static readonly componentId = 'minecraft:rideable';
    /**
     * @remarks
     * Adds an entity to this entity as a rider.
     *
     * This function can't be called in read-only mode.
     *
     * 将一个实体作为骑手添加到此实体。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param rider
     * Entity that will become the rider of this entity.
     * 即将成为此实体骑手的实体。
     * @returns
     * True if the rider entity was successfully added.
     * 若骑手实体成功添加则返回真。
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    addRider(rider: Entity): boolean;
    /**
     * @remarks
     * Ejects the specified rider of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * 将指定的骑手从此实体弹出。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param rider
     * Entity that should be ejected from this entity.
     * 应从此实体弹出的实体。
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    ejectRider(rider: Entity): void;
    /**
     * @remarks
     * Ejects all riders of this entity.
     *
     * This function can't be called in read-only mode.
     *
     * 将所有骑手从实体弹出。
     *
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    ejectRiders(): void;
    /**
     * @remarks
     * A string-list of entity types that this entity can support
     * as riders.
     *
     * 此实体可以支持作为骑手的实体类型字符串列表。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    getFamilyTypes(): string[];
    /**
     * @remarks
     * Gets a list of the all the entities currently riding this
     * entity.
     *
     * 获取当前骑在此实体上的所有实体列表。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    getRiders(): Entity[];
    /**
     * @remarks
     * Gets a list of positions and number of riders for each
     * position for entities riding this entity.
     *
     * 获取骑在此实体上的实体的座位位置及其对应的骑手数量列表。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    getSeats(): Seat[];
}