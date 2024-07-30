/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Sets the offset from the ground that the entity is actually
 * at.
 * 
 * 设置实体相对于地面的实际偏移量。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityGroundOffsetComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular ground offset. Note that this value
     * is effectively read only; setting the ground offset value
     * will not have an impact on the related entity.
     *
     * This property can't be edited in read-only mode.
     *
     * 此特定地面偏移量的值。注意此值实际上为只读；
     * 设置地面偏移量值不会对相关实体产生影响。
     *
     * 此属性在只读模式下无法编辑。
     */
    value: number;
    static readonly componentId = 'minecraft:ground_offset';
}