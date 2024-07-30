/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Defines the entity's color. Only works on certain entities
 * that have predefined color values (e.g., sheep, llama,
 * shulker).
 * 
 * 定义实体的颜色。仅适用于具有预定义颜色值的某些实体（例如，绵羊、羊驼、潜影贝）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColorComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     *
     * This property can't be edited in read-only mode.
     *
     * 特定颜色的值。
     * 
     * 此属性在只读模式下无法编辑。
     */
    value: number;
    static readonly componentId = 'minecraft:color';
}