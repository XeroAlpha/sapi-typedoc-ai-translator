/* IMPORT */ import { EntityComponent } from '../index';

/**
 * @beta
 * Defines the entity's ability to carry items. An entity with
 * a higher strength would have higher potential carry capacity
 * and more item slots.
 * 
 * 定义实体携带物品的能力。具有更高力量值的实体将拥有更高的潜在携带容量以及更多的物品栏位。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityStrengthComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Maximum strength of this entity, as defined in the entity
     * type definition.
     * 
     * @throws This property can throw when used.
     * 
     * 该实体的最大力量值，如实体类型定义中所定义。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly max: number;
    /**
     * @remarks
     * Current value of the strength component that has been set
     * for entities.
     * 
     * @throws This property can throw when used.
     * 
     * 已为实体设置的力量组件的当前值。
     * 
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:strength';
}