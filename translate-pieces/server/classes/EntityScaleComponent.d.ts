/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Sets the entity's visual size.
 * 
 * 设置实体的视觉尺寸。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityScaleComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for the scale property set on entities.
     *
     * This property can't be edited in read-only mode.
     *
     * 实体上设置的 scale 属性的当前值。
     *
     * 此属性在只读模式下无法编辑。
     */
    value: number;
    static readonly componentId = 'minecraft:scale';
}