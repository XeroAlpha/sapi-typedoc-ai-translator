/* IMPORT */ import { ObservableValidator, minecraftserver } from '../index';

/**
 * Validates min/max limits of observable objects that support
 * Vector3
 * 
 * 验证支持 Vector3 的可观察对象的 min/max 限制。
 */
export declare class Vector3LimitObservableValidator implements ObservableValidator<minecraftserver.Vector3> {
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _max: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     *
     */
    protected _min: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * Constructs a new instance of the
     * `Vector3LimitObservableValidator` class
     * 
     * 构造一个新的 `Vector3LimitObservableValidator` 类实例。
     */
    constructor(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>);
    updateLimits(min: Partial<minecraftserver.Vector3>, max: Partial<minecraftserver.Vector3>): void;
    validate(newValue: minecraftserver.Vector3): minecraftserver.Vector3;
}