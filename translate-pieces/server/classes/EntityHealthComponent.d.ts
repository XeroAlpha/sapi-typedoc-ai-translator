/* IMPORT */ import { EntityAttributeComponent } from '../index';

/**
 * Defines the health properties of an entity.
 * 
 * 定义实体的健康属性。
 * 
 * @example applyDamageThenHeal.ts
 * ```typescript
 * // A function that applies damage and then heals the entity
 * // 一个对实体造成伤害然后治疗实体的函数
 * import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';
 *
 * function applyDamageAndHeal(entity: Entity) {
 *     entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob
 *     // 许多生物的最大伤害为20，因此这是一个濒临死亡的生物
 *
 *     system.runTimeout(() => {
 *         const health = entity.getComponent(EntityComponentTypes.Health);
 *         if (health) {
 *             world.sendMessage(`Entity health before heal: ${health.currentValue}`);
 *             // 治疗前的实体健康：${health.currentValue}
 *
 *             health.resetToMaxValue();
 *
 *             world.sendMessage(`Entity after before heal: ${health.currentValue}`);
 *             // 治疗后的实体健康：${health.currentValue}
 *         } else {
 *             console.warn('Entity does not have health component');
 *             // 实体没有健康组件
 *         }
 *     }, 40); // Run in a few seconds (40 ticks)
 *     // 在几秒后运行（40刻）
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
// 忽略 TypeScript 类型检查，允许原生定义的类继承
export class EntityHealthComponent extends EntityAttributeComponent {
    private constructor();
    static readonly componentId = 'minecraft:health';
    // 组件ID为 'minecraft:health'
}