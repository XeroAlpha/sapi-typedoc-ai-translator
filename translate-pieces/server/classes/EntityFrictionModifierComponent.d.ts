/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Defines how much friction affects this entity.
 * 
 * 定义摩擦力对该实体的影响程度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFrictionModifierComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the friction modifier of the associated
     * entity.
     * 
     * 此属性表示关联实体当前的摩擦力修正值。
     *
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     *
     */
    value: number;
    static readonly componentId = 'minecraft:friction_modifier';
}