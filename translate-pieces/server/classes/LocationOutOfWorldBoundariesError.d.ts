/**
 * Thrown when a provided location or bounding area is outside
 * the minimum or maximum dimension height.
 * 
 * 当提供的位置或包围区域超出维度最小或最大高度时抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationOutOfWorldBoundariesError extends Error {
    private constructor();
}