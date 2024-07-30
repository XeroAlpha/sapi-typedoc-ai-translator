/**
 * @rc
 * Thrown after using the /reload command when trying to
 * register a previously unregistered item custom component.
 * 
 * 使用 /reload 命令尝试注册先前未注册的物品自定义组件时抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewComponentError extends Error {
    private constructor();
}