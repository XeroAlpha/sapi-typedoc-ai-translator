/**
 * Specifies that a passed-in argument to a method is not
 * correct or allowed.
 * 
 * 指定传递给方法的参数不正确或不允许。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidArgumentError extends Error {
    private constructor();
    /**
     * @remarks
     * Index of the argument that is in error.
     * 
     * 出错参数的索引。
     */
    index: number;
}