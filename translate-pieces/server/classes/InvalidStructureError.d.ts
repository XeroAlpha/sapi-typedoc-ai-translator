/**
 * Thrown when a Structure is invalid. A structure becomes
 * invalid when it is deleted.
 * 
 * 当结构无效时抛出此异常。结构在被删除后变为无效状态。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidStructureError extends Error {
    private constructor();
}