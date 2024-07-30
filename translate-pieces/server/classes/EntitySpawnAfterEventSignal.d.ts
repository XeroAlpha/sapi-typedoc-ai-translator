/* IMPORT */ import { EntitySpawnAfterEvent } from '../index';

/**
 * Registers a script-based event handler for handling what
 * happens when an entity spawns.
 * @example logEntitySpawnEvents.ts
 * ```typescript
 * // Register a new function that is called when a new entity is created.
 * import { world, EntitySpawnAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
 *     const spawnLocation = entityEvent.entity.location;
 *     world.sendMessage(
 *         `New entity of type '${entityEvent.entity.typeId}' spawned at ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z}!`,
 *     );
 * });
 * ```
 * 
 * 注册基于脚本的事件处理器来处理实体生成时发生的情况。
 */
export class EntitySpawnAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Method to register an event handler for what happens when an
     * entity spawns.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Function that handles the spawn event.
     * 
     * 方法用于注册实体生成时发生的事件处理器。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param callback
     * 处理生成事件的函数。
     */
    subscribe(callback: (arg: EntitySpawnAfterEvent) => void): (arg: EntitySpawnAfterEvent) => void;
    /**
     * @remarks
     * Unregisters a method that was previously subscribed to the
     * subscription event.
     *
     * This function can't be called in read-only mode.
     *
     * @param callback
     * Original function that was passed into the subscribe event,
     * that is to be unregistered.
     * 
     * 取消注册之前订阅到订阅事件的方法。
     *
     * 此函数不能在只读模式下调用。
     *
     * @param callback
     * 原始函数，传入订阅事件中，需要取消注册。
     */
    unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void;
}