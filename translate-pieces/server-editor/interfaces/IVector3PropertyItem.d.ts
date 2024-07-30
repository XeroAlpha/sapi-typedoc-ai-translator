/* IMPORT */ import { IPropertyItemBase, minecraftserver } from '../index';

/**
 * A property item which supports Vector3 properties
 * 
 * 支持 Vector3 属性的属性项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Current value of the property item.
     * 
     * 当前属性项的值。
     */
    readonly value: Readonly<minecraftserver.Vector3>;
    /**
     * @remarks
     * Updates Vector3 limits and clamps the current value.
     * 
     * 更新 Vector3 的限制并约束当前值。
     */
    updateAxisLimits(limits: { min?: Partial<minecraftserver.Vector3>; max?: Partial<minecraftserver.Vector3> }): void;
}