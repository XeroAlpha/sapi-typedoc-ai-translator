/* IMPORT */ import { EntityComponent } from '../index';

/**
 * 当此组件存在于实体上时，表示该实体处于着火状态。
 * 
 * @example setEntityOnFire.ts
 * ```typescript
 * import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";
 *
 * function setAblaze(entity: Entity) {
 *     entity.setOnFire(20, true);
 *
 *     system.runTimeout(() => {
 *         const onfire = entity.getComponent(EntityComponentTypes.OnFire);
 *         if (onfire) {
 *             world.sendMessage(`${onfire.onFireTicksRemaining} 火焰持续刻数剩余，熄灭实体。`);
 *         }
 *         // 这将会熄灭实体
 *         entity.extinguishFire(true);
 *     }, 30); // 在 30 刻或约 1.5 秒后运行
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityOnFireComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The number of ticks remaining before the fire goes out.
     * 
     * 火焰熄灭前剩余的刻数。
     */
    readonly onFireTicksRemaining: number;
    static readonly componentId = 'minecraft:onfire';
}