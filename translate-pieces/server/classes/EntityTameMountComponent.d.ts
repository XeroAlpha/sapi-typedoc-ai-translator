/* IMPORT */ import { EntityComponent, Player } from '../index';

/**
 * Contains options for taming a rideable entity based on the
 * entity that mounts it.
 * 
 * 包含根据骑乘实体来驯服可骑乘实体的选项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityTameMountComponent extends EntityComponent {
    private constructor();
    /**
     * @rc
     * @remarks
     * Returns true if the entity is tamed.
     * 
     * @throws This property can throw when used.
     * 
     * 如果实体已被驯服，则返回 `true`。
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isTamed: boolean;
    /**
     * @rc
     * @remarks
     * Returns true if the entity is tamed by a player.
     * 
     * @throws This property can throw when used.
     * 
     * 如果实体被玩家驯服，则返回 `true`。
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isTamedToPlayer: boolean;
    /**
     * @rc
     * @remarks
     * Returns the player that has tamed the entity, or 'undefined'
     * if entity is not tamed by a player.
     * 
     * @throws This property can throw when used.
     * 
     * 返回驯服了实体的玩家，如果实体未被玩家驯服，则返回 `undefined`。
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly tamedToPlayer?: Player;
    /**
     * @rc
     * @remarks
     * Returns the id of player that has tamed the entity, or
     * 'undefined' if entity is not tamed.
     * 
     * @throws This property can throw when used.
     * 
     * 返回驯服了实体的玩家ID，如果实体未被驯服，则返回 `undefined`。
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly tamedToPlayerId?: string;
    static readonly componentId = 'minecraft:tamemount';
    /**
     * @remarks
     * Sets this rideable entity as tamed.
     * 
     * This function can't be called in read-only mode.
     * 
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @throws This function can throw errors.
     * 
     * 将此可骑乘实体设置为已驯服状态。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param showParticles
     * 驯服此实体时是否显示效果粒子。
     * 
     * 此函数可能会抛出错误。
     */
    tame(showParticles: boolean): void;
    /**
     * @rc
     * @remarks
     * Sets this rideable entity as tamed by the given player.
     * 
     * This function can't be called in read-only mode.
     * 
     * @param showParticles
     * Whether to show effect particles when this entity is tamed.
     * @param player
     * The player that this entity should be tamed by.
     * @returns
     * Returns true if the entity was tamed.
     * @throws This function can throw errors.
     * 
     * 将此可骑乘实体设置为由指定玩家驯服。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param showParticles
     * 驯服此实体时是否显示效果粒子。
     * @param player
     * 应当由其驯服此实体的玩家。
     * 
     * 如果实体被驯服，则返回 `true`。
     * 
     * 此函数可能会抛出错误。
     */
    tameToPlayer(showParticles: boolean, player: Player): boolean;
}