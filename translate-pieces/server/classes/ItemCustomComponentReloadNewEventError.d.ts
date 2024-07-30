/**
 * @rc
 * Thrown after using the /reload command when trying to
 * register a previously registered item custom component that
 * handles a new event.
 * 
 * 在尝试注册已注册过的物品自定义组件以处理新事件时，在使用/reload命令后抛出此异常。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ItemCustomComponentReloadNewEventError extends Error {
    private constructor();
}