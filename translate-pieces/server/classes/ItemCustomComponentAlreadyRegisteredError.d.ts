/**
 * @rc
 * Thrown when trying to register an item custom component with
 * a name that has already been registered.
 * 
 * 当尝试注册一个名称已经被注册过的物品自定义组件时抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentAlreadyRegisteredError extends Error {
    private constructor();
}