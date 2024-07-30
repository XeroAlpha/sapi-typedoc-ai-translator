/* IMPORT */ import { EntityComponent, EntityDefinitionFeedItem, Trigger } from '../index';

/**
 * @rc
 * Adds a timer for the entity to grow up. It can be
 * accelerated by giving the entity the items it likes as
 * defined by feedItems.
 * 
 * 为实体添加成长计时器。通过给予实体它喜欢的物品（由 feedItems 定义）
 * 可以加速其成长过程。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAgeableComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Amount of time before the entity grows up, -1 for always a
     * baby.
     * 
     * 在实体成长前的时间量，-1 表示永远是幼崽状态。
     *
     * @throws This property can throw when used.
     */
    readonly duration: number;
    /**
     * @remarks
     * Event that runs when this entity grows up.
     * 
     * 当此实体成长时触发的事件。
     *
     * @throws This property can throw when used.
     */
    readonly growUp: Trigger;
    /**
     * @remarks
     * The feed item used will transform into this item upon
     * successful interaction.
     * 
     * 成功交互后，使用的喂食物品会转化为此物品。
     *
     * @throws This property can throw when used.
     */
    readonly transformToItem: string;
    static readonly componentId = 'minecraft:ageable';
    /**
     * @remarks
     * List of items that the entity drops when it grows up.
     * 
     * 当实体成长时所掉落的物品列表。
     *
     * @throws This function can throw errors.
     */
    getDropItems(): string[];
    /**
     * @remarks
     * List of items that can be fed to the entity. Includes 'item'
     * for the item name and 'growth' to define how much time it
     * grows up by.
     * 
     * 可以喂给实体的物品列表。包括 'item' 作为物品名称和 'growth'
     * 来定义加速成长的时间量。
     *
     * @throws This function can throw errors.
     */
    getFeedItems(): EntityDefinitionFeedItem[];
}