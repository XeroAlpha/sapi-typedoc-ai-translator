/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Additional variant value. Can be used to further
 * differentiate variants.
 * 
 * 附加的变体值。可用于进一步区分不同的变体。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMarkVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of the mark variant value for this entity.
     *
     * This property can't be edited in read-only mode.
     *
     * 此实体的标记变体值。
     * 
     * 本属性在只读模式下无法编辑。
     */
    value: number;
    static readonly componentId = 'minecraft:mark_variant';
}