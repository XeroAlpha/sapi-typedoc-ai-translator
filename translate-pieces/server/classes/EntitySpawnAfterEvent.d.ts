/* IMPORT */ import { Entity, EntityInitializationCause } from '../index';

/**
 * Contains data related to an entity spawning within the
 * world.
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
 * 包含与世界中实体生成相关数据的类。
 * 示例：logEntitySpawnEvents.ts
 * ```typescript
 * // 注册一个新的函数，在创建新的实体时被调用。
 * import { world, EntitySpawnAfterEvent } from '@minecraft/server';
 *
 * world.afterEvents.entitySpawn.subscribe((entityEvent: EntitySpawnAfterEvent) => {
 *     const spawnLocation = entityEvent.entity.location;
 *     world.sendMessage(
 *         `类型为 '${entityEvent.entity.typeId}' 的新实体在坐标 ${spawnLocation.x}, ${spawnLocation.y}, ${spawnLocation.z} 生成！`,
 *     );
 * });
 * ```
 */
export class EntitySpawnAfterEvent {
    private constructor();
    /**
     * @remarks
     * Initialization cause (Spawned, Born ...).
     * 
     * 初始化原因（生成、出生...）。
     */
    readonly cause: EntityInitializationCause;
    /**
     * @remarks
     * Entity that was spawned.
     * 
     * This property can't be edited in read-only mode.
     * 
     * 被生成的实体。
     * 
     * 此属性在只读模式下无法编辑。
     */
    entity: Entity;
}