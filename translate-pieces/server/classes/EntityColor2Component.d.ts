/* IMPORT */ import { EntityComponent, PaletteColor } from '../index';

/**
 * Defines the entity's secondary color. Only works on certain
 * entities that have secondary predefined color values (e.g.,
 * tropical fish).
 * 
 * 定义实体的次级颜色。仅适用于具有预定义次级颜色值的某些实体（例如，热带鱼）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityColor2Component extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Value of this particular color.
     * 
     * 此特定颜色的值。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly value: PaletteColor;
    static readonly componentId = 'minecraft:color2';
}