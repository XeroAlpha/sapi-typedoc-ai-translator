/**
 * Thrown when the chunk for provided location or bounding area
 * is not loaded.
 * 
 * 当提供的位置或包围区域所在的区块未加载时抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class LocationInUnloadedChunkError extends Error {
    private constructor();
}