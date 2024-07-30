/**
 * The container slot is invalid. This can occur when the
 * owning container is destroyed or unloaded.
 * 
 * 容器槽位无效。这可能发生在容器被销毁或卸载时。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class InvalidContainerSlotError extends Error {
    private constructor();
}