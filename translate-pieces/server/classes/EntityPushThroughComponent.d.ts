/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Sets the distance through which the entity can push through.
 * 
 * 设置实体可以通过的距离。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityPushThroughComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the push through distances of this entity.
     * 
     * 此实体的可以通过距离值。
     *
     * This property can't be edited in read-only mode.
     * 
     * 在只读模式下，此属性不可编辑。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:push_through';
}