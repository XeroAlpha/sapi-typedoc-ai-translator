/* IMPORT */ import { Entity, EntityComponent } from '../index';

/**
 * @rc
 * Allows the entity to be leashed. Defines the conditions and
 * events for when an entity is leashed.
 * 
 * 允许实体被拴绳。定义了实体被拴绳时的条件和事件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityLeashableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns true if another entity can 'steal' the leashed
     * entity by attaching their own leash to it.
     *
     * @throws This property can throw when used.
     * 
     * 如果另一个实体可以通过将其自己的拴绳附加到被拴的实体上来“偷走”该实体，则返回 true。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly canBeStolen: boolean;
    /**
     * @remarks
     * Distance in blocks at which the leash stiffens, restricting
     * movement.
     *
     * @throws This property can throw when used.
     * 
     * 拴绳变硬并限制移动的方块距离。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly hardDistance: number;
    /**
     * @remarks
     * Returns true if the entity is leashed.
     *
     * @throws This property can throw when used.
     * 
     * 如果实体被拴绳，则返回 true。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly isLeashed: boolean;
    /**
     * @remarks
     * Entity that is holding the leash.
     *
     * @throws This property can throw when used.
     * 
     * 持有拴绳的实体。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly leashHolder?: Entity;
    /**
     * @remarks
     * Identifier of entity that is holding the leash.
     *
     * @throws This property can throw when used.
     * 
     * 持有拴绳的实体的标识符。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly leashHolderEntityId?: string;
    /**
     * @remarks
     * Distance in blocks at which the leash breaks.
     *
     * @throws This property can throw when used.
     * 
     * 拴绳断裂的方块距离。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly maxDistance: number;
    /**
     * @remarks
     * Distance in blocks at which the 'spring' effect starts
     * acting to keep this entity close to the entity that leashed
     * it.
     *
     * @throws This property can throw when used.
     * 
     * “弹簧”效果开始作用以保持此实体靠近拴住它的实体的方块距离。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly softDistance: number;
    static readonly componentId = 'minecraft:leashable';
    /**
     * @remarks
     * Leashes this entity to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param leashHolder
     * The entity to leash this entity to.
     * @throws
     * Throws if the entity to leash to is over the max distance,
     * and if the player is dead or in spectator mode.
     * 
     * 将此实体拴到另一个实体上。
     *
     * 此函数无法在只读模式下调用。
     *
     * @param leashHolder
     * 要将此实体拴到的实体。
     * @throws
     * 如果要拴到的实体超过最大距离，或者玩家死亡或处于旁观者模式，则会抛出异常。
     */
    leashTo(leashHolder: Entity): void;
    /**
     * @remarks
     * Unleashes this entity if it is leashed to another entity.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 如果此实体被拴到另一个实体上，则解开此实体。
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws 此函数可能会抛出错误。
     */
    unleash(): void;
}