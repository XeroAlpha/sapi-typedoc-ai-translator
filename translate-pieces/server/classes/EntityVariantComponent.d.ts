/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Used to differentiate the component group of a variant of an
 * entity from others. (e.g. ocelot, villager).
 * 
 * 用于区分实体变种的组件组与其他实体的区别。（例如：豹猫，村民）
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityVariantComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value for variant for this entity, as specified via
     * components.
     * 
     * 此实体当前的变种值，通过组件指定。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly value: number;
    static readonly componentId = 'minecraft:variant';
}