/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component makes the entity spawn with a
 * rider of the specified entityType.
 * 
 * 添加此组件后，实体会在满足一定条件时生成时携带指定 entityType 的骑乘者。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAddRiderComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The type of entity that is added as a rider for this entity
     * when spawned under certain conditions.
     *
     * @throws This property can throw when used.
     * 
     * 在满足一定条件时生成时作为此实体骑乘者的实体类型。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly entityType: string;
    /**
     * @remarks
     * Optional spawn event to trigger on the rider when that rider
     * is spawned for this entity.
     *
     * @throws This property can throw when used.
     * 
     * 当骑乘者为该实体生成时可触发的可选生成事件。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly spawnEvent: string;
    static readonly componentId = 'minecraft:addrider';
}