/* IMPORT */ import { EntityComponent, ItemStack, Player } from '../index';

/**
 * @rc
 * Defines the rules for an entity to be tamed by the player.
 * 
 * 定义了实体被玩家驯服的规则。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns a set of items that can be used to tame this entity.
     *
     * 返回可用于驯服此实体的一组物品。
     * 
     * @throws This property can throw when used.
     */
    readonly getTameItems: ItemStack[];
    /**
     * @remarks
     * Returns true if the entity is tamed by player.
     *
     * 如果实体被玩家驯服则返回 true。
     * 
     * @throws This property can throw when used.
     */
    readonly isTamed: boolean;
    /**
     * @remarks
     * The chance of taming the entity with each item use between
     * 0.0 and 1.0, where 1.0 is 100%
     *
     * 使用每件物品驯服实体的概率，在 0.0 和 1.0 之间，其中 1.0 表示 100%。
     * 
     * @throws This property can throw when used.
     */
    readonly probability: number;
    /**
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed.
     *
     * 返回已经驯服此实体的玩家，或如果实体未被驯服则返回 'undefined'。
     * 
     * @throws This property can throw when used.
     */
    readonly tamedToPlayer?: Player;
    /**
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     *
     * 返回已经驯服此实体的玩家的 id，或如果实体未被驯服则返回 'undefined'。
     * 
     * @throws This property can throw when used.
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tameable';
    /**
     * @remarks
     * Set this entity as tamed by the given player.
     *
     * 将此实体设置为由给定玩家驯服。
     * 
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     * 
     * @param player
     * The player that this entity should be tamed by.
     * 
     * 应该由其驯服此实体的玩家。
     * @returns
     * Returns true if the entity was tamed.
     * 
     * 如果实体被驯服则返回 true。
     * @throws This function can throw errors.
     */
    tame(player: Player): boolean;
}