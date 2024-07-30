/* IMPORT */ import { EqualsComparison, GreaterThanComparison, GreaterThanOrEqualsComparison, LessThanComparison, LessThanOrEqualsComparison, NotEqualsComparison, RangeComparison } from '../index';

/**
 * @beta
 */
export interface EntityQueryPropertyOptions {
    /**
     * @remarks
     * If true, entities with the specified property will be excluded from the results.
     * 
     * 如果为 true，具有指定属性的实体将从结果中排除。
     */
    exclude?: boolean;
    /**
     * @remarks
     * The ID of the property to query.
     * 
     * 要查询的属性的ID。
     */
    propertyId: string;
    /**
     * @remarks
     * The value or comparison for the property.
     * Can be a boolean, string, or one of the comparison types.
     * 
     * 属性的值或比较方式。可以是布尔值、字符串或其中一种比较类型。
     */
    value?:
        | boolean
        | string
        | EqualsComparison
        | GreaterThanComparison
        | GreaterThanOrEqualsComparison
        | LessThanComparison
        | LessThanOrEqualsComparison
        | NotEqualsComparison
        | RangeComparison;
}