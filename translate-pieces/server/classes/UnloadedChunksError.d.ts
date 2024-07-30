/**
 * @beta
 * Error thrown when the specified area contains one or more
 * unloaded chunks.
 * 
 * 当指定区域包含一个或多个未加载的区块时抛出的错误。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class UnloadedChunksError extends Error {
    private constructor();
}