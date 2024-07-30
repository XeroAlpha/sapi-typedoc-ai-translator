/**
 * Represents an error thrown when a property value is out of bounds.
 * 
 * 表示当属性值超出范围时抛出的错误。
 */
export class PropertyOutOfBoundsError extends Error {
    private constructor();
    maxValue: number;
    minValue: number;
    value: number;
}