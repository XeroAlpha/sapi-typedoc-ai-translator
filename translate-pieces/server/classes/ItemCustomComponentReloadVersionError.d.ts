/**
 * @rc
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component with
 * a newer API version.
 * 
 * 在尝试使用较新的 API 版本重新注册之前已注册的物品自定义组件后，执行 /reload 命令时抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadVersionError extends Error {
    private constructor();
}