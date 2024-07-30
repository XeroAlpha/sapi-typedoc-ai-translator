/* IMPORT */ import { EntityComponent, FeedItem } from '../index';

/**
 * Defines the interactions with this entity for healing it.
 * 
 * 定义了与该实体进行治疗交互的行为。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityHealableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Determines if an item can be used regardless of the entity
     * being at full health.
     *
     * 决定是否可以在实体处于满生命值状态时仍然使用物品。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly forceUse: boolean;
    static readonly componentId = 'minecraft:healable';
    /**
     * @remarks
     * A set of items that can specifically heal this entity.
     *
     * 可以专门用来治疗此实体的一组物品。
     *
     * @returns
     * Entity that this component is associated with.
     * @throws This function can throw errors.
     * 
     * 返回与该组件关联的实体。
     * 
     * 此函数可能抛出错误。
     */
    getFeedItems(): FeedItem[];
}