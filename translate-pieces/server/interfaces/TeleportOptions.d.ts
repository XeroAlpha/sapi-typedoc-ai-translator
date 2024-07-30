/* IMPORT */ import { Dimension, Vector2, Vector3 } from '../index';

/**
 * Contains additional options for teleporting an entity.
 * @example teleportMovement.ts
 * ```typescript
 * import { world, system } from '@minecraft/server';
 *
 * const overworld = world.getDimension('overworld');
 * const targetLocation = { x: 0, y: 0, z: 0 };
 *
 * const pig = overworld.spawnEntity('minecraft:pig', targetLocation);
 *
 * let inc = 1;
 * const runId = system.runInterval(() => {
 *     pig.teleport(
 *         { x: targetLocation.x + inc / 4, y: targetLocation.y + inc / 4, z: targetLocation.z + inc / 4 },
 *         {
 *             facingLocation: targetLocation,
 *         },
 *     );
 *
 *     if (inc > 100) {
 *         system.clearRun(runId);
 *     }
 *     inc++;
 * }, 4);
 * ```
 * 
 * 包含用于传送实体的额外选项。
 */
export interface TeleportOptions {
    /**
     * @remarks
     * Whether to check whether blocks will block the entity after
     * teleport.
     * 
     * 是否检查传送后方块是否会阻挡实体。
     */
    checkForBlocks?: boolean;
    /**
     * @remarks
     * Dimension to potentially move the entity to.  If not
     * specified, the entity is teleported within the dimension
     * that they reside.
     * 
     * 可能要移动实体到的维度。如果不指定，实体将在其所在的维度内进行传送。
     */
    dimension?: Dimension;
    /**
     * @remarks
     * Location that the entity should be facing after teleport.
     * 
     * 传送后实体应面对的位置。
     */
    facingLocation?: Vector3;
    /**
     * @remarks
     * Whether to retain the entities velocity after teleport.
     * 
     * 是否保持实体传送后的速度。
     */
    keepVelocity?: boolean;
    /**
     * @remarks
     * Rotation of the entity after teleport.
     * 
     * 传送后实体的旋转。
     */
    rotation?: Vector2;
}