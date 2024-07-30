/* IMPORT */ import { EntityComponent } from '../index';

/**
 * This is a base abstract class for any entity component that
 * centers around a number and can have a minimum, maximum, and
 * default defined value.
 * 
 * 这是一个基础抽象类，适用于以数值为中心并可以定义最小值、最大值和默认值的实体组件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityAttributeComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of this attribute for this instance.
     *
     * @throws This property can throw when used.
     * 
     * 当前实例的此属性的当前值。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly currentValue: number;
    /**
     * @remarks
     * Returns the default defined value for this attribute.
     *
     * @throws This property can throw when used.
     * 
     * 返回此属性定义的默认值。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly defaultValue: number;
    /**
     * @remarks
     * Returns the effective max of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     * 
     * 返回考虑到其他环境组件或因素后此属性的有效最大值。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly effectiveMax: number;
    /**
     * @remarks
     * Returns the effective min of this attribute given any other
     * ambient components or factors.
     *
     * @throws This property can throw when used.
     * 
     * 返回考虑到其他环境组件或因素后此属性的有效最小值。
     *
     * 使用此属性时可能会抛出异常。
     */
    readonly effectiveMin: number;
    /**
     * @remarks
     * Resets the current value of this attribute to the defined
     * default value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 将此属性的当前值重置为定义的默认值。
     *
     * 此函数不能在只读模式下调用。
     *
     * 调用此函数可能会抛出错误。
     */
    resetToDefaultValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the maximum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 将此属性的当前值重置为定义的最大值。
     *
     * 此函数不能在只读模式下调用。
     *
     * 调用此函数可能会抛出错误。
     */
    resetToMaxValue(): void;
    /**
     * @remarks
     * Resets the current value of this attribute to the minimum
     * defined value.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 将此属性的当前值重置为定义的最小值。
     *
     * 此函数不能在只读模式下调用。
     *
     * 调用此函数可能会抛出错误。
     */
    resetToMinValue(): void;
    /**
     * @remarks
     * Sets the current value of this attribute. The provided value
     * will be clamped to the range of this attribute.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 设置此属性的当前值。提供的值将被限制在此属性的范围内。
     *
     * 此函数不能在只读模式下调用。
     *
     * 调用此函数可能会抛出错误。
     */
    setCurrentValue(value: number): boolean;
}