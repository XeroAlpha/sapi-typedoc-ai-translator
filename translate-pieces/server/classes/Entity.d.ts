/* IMPORT */ import { BlockRaycastHit, BlockRaycastOptions, CommandError, CommandResult, Dimension, Effect, EffectType, EntityApplyDamageByProjectileOptions, EntityApplyDamageOptions, EntityComponent, EntityComponentTypeMap, EntityComponentTypes, EntityEffectOptions, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, PlayAnimationOptions, ScoreboardIdentity, TeleportOptions, TicksPerSecond, Vector2, Vector3, minecraftcommon } from '../index';

/**
 * Represents the state of an entity (a mob, the player, or
 * other moving objects like minecarts) in the world.
 * 
 * 表示世界中实体（如生物、玩家或其他移动对象如矿车）的状态。
 */
export class Entity {
    private constructor();
    /**
     * @remarks
     * Dimension that the entity is currently within.
     *
     * @throws This property can throw when used.
     * 
     * 当前实体所在的维度。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly dimension: Dimension;
    /**
     * @remarks
     * Unique identifier of the entity. This identifier is intended
     * to be consistent across loads of a world instance. No
     * meaning should be inferred from the value and structure of
     * this unique identifier - do not parse or interpret it. This
     * property is accessible even if {@link Entity.isValid} is
     * false.
     *
     * 实体的唯一标识符。此标识符旨在跨世界实例加载保持一致。不应从该唯一标识符的值和结构推断意义 - 不要解析或解释它。即使 {@link Entity.isValid} 为假，此属性也可访问。
     */
    readonly id: string;
    /**
     * @remarks
     * Whether the entity is touching a climbable block. For
     * example, a player next to a ladder or a spider next to a
     * stone wall.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体是否接触可攀爬的方块。例如，玩家靠近梯子或蜘蛛靠近石墙。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isClimbing: boolean;
    /**
     * @remarks
     * Whether the entity has a fall distance greater than 0, or
     * greater than 1 while gliding.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体是否有大于 0 的坠落距离，或在滑翔时大于 1 的坠落距离。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isFalling: boolean;
    /**
     * @remarks
     * Whether any part of the entity is inside a water block.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体的任何部分是否位于水方块内。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isInWater: boolean;
    /**
     * @remarks
     * Whether the entity is on top of a solid block. This property
     * may behave in unexpected ways. This property will always be
     * true when an Entity is first spawned, and if the Entity has
     * no gravity this property may be incorrect.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体是否位于固体方块顶部。此属性可能以不可预测的方式行为。当实体首次生成时，此属性始终为真，如果实体没有重力，则此属性可能不正确。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isOnGround: boolean;
    /**
     * @remarks
     * If true, the entity is currently sleeping.
     *
     * @throws This property can throw when used.
     * 
     * 如果为真，则实体当前正在睡觉。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isSleeping: boolean;
    /**
     * @remarks
     * Whether the entity is sneaking - that is, moving more slowly
     * and more quietly.
     *
     * This property can't be edited in read-only mode.
     * 
     * 指示实体是否潜行 - 即，移动更慢且更安静。
     *
     * 此属性在只读模式下无法编辑。
     */
    isSneaking: boolean;
    /**
     * @remarks
     * Whether the entity is sprinting. For example, a player using
     * the sprint action, an ocelot running away or a pig boosting
     * with Carrot on a Stick.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体是否冲刺。例如，玩家使用冲刺动作，豹猫逃跑或猪通过胡萝卜棒加速。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isSprinting: boolean;
    /**
     * @remarks
     * Whether the entity is in the swimming state. For example, a
     * player using the swim action or a fish in water.
     *
     * @throws This property can throw when used.
     * 
     * 指示实体是否处于游泳状态。例如，玩家使用游泳动作或水中的鱼。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly isSwimming: boolean;
    /**
     * @remarks
     * Current location of the entity.
     *
     * @throws This property can throw when used.
     * 
     * 实体当前的位置。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly location: Vector3;
    /**
     * @remarks
     * Given name of the entity.
     *
     * This property can't be edited in read-only mode.
     * 
     * 实体的给定名称。
     *
     * 此属性在只读模式下无法编辑。
     */
    nameTag: string;
    /**
     * @remarks
     * Returns a scoreboard identity that represents this entity.
     * Will remain valid when the entity is killed.
     * 
     * 返回代表此实体的记分板身份。当实体被杀死时仍保持有效。
     */
    readonly scoreboardIdentity?: ScoreboardIdentity;
    /**
     * @beta
     * @remarks
     * Retrieves or sets an entity that is used as the target of
     * AI-related behaviors, like attacking. If the entity
     * currently has no target returns undefined.
     *
     * @throws This property can throw when used.
     * 
     * 获取或设置作为AI相关行为（如攻击）目标的实体。如果实体当前没有目标，则返回 undefined。
     *
     * @throws 使用此属性可能会抛出异常。
     */
    readonly target?: Entity;
    /**
     * @remarks
     * Identifier of the type of the entity - for example,
     * 'minecraft:skeleton'. This property is accessible even if
     * {@link Entity.isValid} is false.
     *
     * 实体类型的标识符 - 例如，'minecraft:skeleton'。即使 {@link Entity.isValid} 为假，此属性也可访问。
     */
    readonly typeId: string;
    /**
     * @remarks
     * Adds or updates an effect, like poison, to the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * Type of effect to add to the entity.
     * @param duration
     * Amount of time, in ticks, for the effect to apply. There are
     * 20 ticks per second. Use {@link TicksPerSecond} constant to
     * convert between ticks and seconds. The value must be within
     * the range [0, 20000000].
     * @param options
     * Additional options for the effect.
     * @returns
     * Returns nothing if the effect was added or updated
     * successfully. This can throw an error if the duration or
     * amplifier are outside of the valid ranges, or if the effect
     * does not exist.
     * @throws This function can throw errors.
     * @example poisonVillager.ts
     * ```typescript
     * // Spawns a villager and gives it the poison effect
     * import {
     *     DimensionLocation,
     * } from '@minecraft/server';
     * import { MinecraftEffectTypes } from '@minecraft/vanilla-data';
     *
     * function spawnPoisonedVillager(location: DimensionLocation) {
     *     const villagerType = 'minecraft:villager_v2<minecraft:ageable_grow_up>';
     *     const villager = location.dimension.spawnEntity(villagerType, location);
     *     const duration = 20;
     *
     *     villager.addEffect(MinecraftEffectTypes.Poison, duration, { amplifier: 1 });
     * }
     *
     * ```
     * @example quickFoxLazyDog.ts
     * ```typescript
     * // Spawns a fox over a dog
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnAdultHorse(location: DimensionLocation) {
     *     // Create fox (our quick brown fox)
     *     const fox = location.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
     *         x: location.x,
     *         y: location.y + 2,
     *         z: location.z,
     *     });
     *
     *     fox.addEffect('speed', 10, {
     *         amplifier: 2,
     *     });
     *
     *     // Create wolf (our lazy dog)
     *     const wolf = location.dimension.spawnEntity(MinecraftEntityTypes.Wolf, location);
     *     wolf.addEffect('slowness', 10, {
     *         amplifier: 2,
     *     });
     *     wolf.isSneaking = true;
     * }
     * ```
     * 
     * 向实体添加或更新效果，如中毒。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param effectType
     * 要向实体添加的效果类型。
     * @param duration
     * 效果持续的时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量来转换刻和秒之间的数值。该值必须在 [0, 20000000] 的范围内。
     * @param options
     * 效果的其他选项。
     * @returns
     * 如果效果成功添加或更新，则不返回任何内容。如果持续时间或放大器超出有效范围，或者效果不存在，可能会抛出错误。
     * @throws 此函数可能会抛出错误。
     */
    addEffect(effectType: EffectType | string, duration: number, options?: EntityEffectOptions): Effect | undefined;
    /**
     * @remarks
     * Adds a specified tag to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to add. The tag must be less than 256
     * characters.
     * @returns
     * Returns true if the tag was added successfully. This can
     * fail if the tag already exists on the entity.
     * @throws This function can throw errors.
     * 
     * 向实体添加指定的标签。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param tag
     * 要添加的标签的内容。标签必须少于 256 个字符。
     * @returns
     * 如果标签成功添加，则返回 true。如果实体上已存在该标签，则可能会失败。
     * @throws 此函数可能会抛出错误。
     */
    addTag(tag: string): boolean;
    /**
     * @remarks
     * Applies a set of damage to an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param amount
     * Amount of damage to apply.
     * @param options
     * Additional options about the source of damage, which may add
     * additional effects or spur additional behaviors on this
     * entity.
     * @returns
     * Whether the entity takes any damage. This can return false
     * if the entity is invulnerable or if the damage applied is
     * less than or equal to 0.
     * @throws This function can throw errors.
     * @example applyDamageThenHeal.ts
     * ```typescript
     * // A function that applies damage and then heals the entity
     * import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';
     *
     * function applyDamageAndHeal(entity: Entity) {
     *     entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob
     *
     *     system.runTimeout(() => {
     *         const health = entity.getComponent(EntityComponentTypes.Health);
     *         if (health) {
     *             world.sendMessage(`Entity health before heal: ${health.currentValue}`);
     *
     *             health.resetToMaxValue();
     *
     *             world.sendMessage(`Entity after before heal: ${health.currentValue}`);
     *         } else {
     *             console.warn('Entity does not have health component');
     *         }
     *     }, 40); // Run in a few seconds (40 ticks)
     * }
     * ```
     * 
     * 向实体应用一组伤害。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param amount
     * 要应用的伤害量。
     * @param options
     * 关于伤害来源的其他选项，这些选项可能会添加额外的效果或引发实体上的额外行为。
     * @returns
     * 实体是否受到伤害。如果实体无敌或所受伤害小于等于 0，则可能返回 false。
     * @throws 此函数可能会抛出错误。
     */
    applyDamage(amount: number, options?: EntityApplyDamageByProjectileOptions | EntityApplyDamageOptions): boolean;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param vector
     * Impulse vector.
     * @throws This function can throw errors.
     * @example yeetEntity.ts
     * ```typescript
     * // A function that throws entities up in the air
     * import { Entity } from '@minecraft/server';
     *
     * function yeetEntity(entity: Entity) {
     *
     *     // Zero out the entity's velocity before applying impulse
     *     entity.clearVelocity();
     *
     *     // throw the zombie up in the air
     *     entity.applyImpulse({ x: 0, y: 15, z: 0 });
     * }
     * ```
     * 
     * 将冲量矢量应用于实体当前的速度。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param vector
     * 冲量矢量。
     * @throws 此函数可能会抛出错误。
     */
    applyImpulse(vector: Vector3): void;
    /**
     * @remarks
     * Applies impulse vector to the current velocity of the
     * entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param directionX
     * X direction in horizontal plane.
     * @param directionZ
     * Z direction in horizontal plane.
     * @param horizontalStrength
     * Knockback strength for the horizontal vector.
     * @param verticalStrength
     * Knockback strength for the vertical vector.
     * @throws This function can throw errors.
     * @example bounceSkeletons.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function mobParty(targetLocation: DimensionLocation) {
     *     const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *     // create some sample mob data
     *     for (let i = 0; i < 10; i++) {
     *         targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
     *     }
     *
     *     const eqo: EntityQueryOptions = {
     *         type: 'skeleton',
     *     };
     *
     *     for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *         entity.applyKnockback(0, 0, 0, 1);
     *     }
     * }
     * ```
     * 
     * 将冲量矢量应用于实体当前的速度。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param directionX
     * 水平面上的 X 方向。
     * @param directionZ
     * 水平面上的 Z 方向。
     * @param horizontalStrength
     * 水平矢量的击退强度。
     * @param verticalStrength
     * 垂直矢量的击退强度。
     * @throws 此函数可能会抛出错误。
     */
    applyKnockback(directionX: number, directionZ: number, horizontalStrength: number, verticalStrength: number): void;
    /**
     * @remarks
     * Clears all dynamic properties that have been set on this
     * entity.
     *
     * @throws This function can throw errors.
     * 
     * 清除在此实体上设置的所有动态属性。
     *
     * @throws 此函数可能会抛出错误。
     */
    clearDynamicProperties(): void;
    /**
     * @remarks
     * Sets the current velocity of the Entity to zero. Note that
     * this method may not have an impact on Players.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * @example yeetEntity.ts
     * ```typescript
     * // A function that throws entities up in the air
     * import { Entity } from '@minecraft/server';
     *
     * function yeetEntity(entity: Entity) {
     *
     *     // Zero out the entity's velocity before applying impulse
     *     entity.clearVelocity();
     *
     *     // throw the zombie up in the air
     *     entity.applyImpulse({ x: 0, y: 15, z: 0 });
     * }
     * ```
     * 
     * 将实体当前的速度设置为零。注意，此方法可能不会对玩家产生影响。
     *
     * 此函数在只读模式下无法调用。
     *
     * @throws 此函数可能会抛出错误。
     */
    clearVelocity(): void;
    /**
     * @remarks
     * Extinguishes the fire if the entity is on fire. Note that
     * you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param useEffects
     * Whether to show any visual effects connected to the
     * extinguishing.
     * @returns
     * Returns whether the entity was on fire.
     * @throws This function can throw errors.
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
     *             world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
     *         }
     *         // This will extinguish the entity
     *         entity.extinguishFire(true);
     *     }, 30); // Run in 30 ticks or ~1.5 seconds
     *
     * }
     * ```
     * 
     * 如果实体着火，则熄灭火焰。注意，您可以调用 getComponent('minecraft:onfire') 并且如果该组件存在，则实体着火。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param useEffects
     * 是否显示与熄灭相关的任何视觉效果。
     * @returns
     * 返回实体是否着火。
     * @throws 此函数可能会抛出错误。
     */
    extinguishFire(useEffects?: boolean): boolean;
    /**
     * @remarks
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns the first intersecting block from the direction that
     * this entity is looking at.
     * @throws This function can throw errors.
     * 
     * 返回从实体视线方向的第一个相交方块。
     *
     * @param options
     * 光束投射的其他配置选项。
     * @returns
     * 返回从实体视线方向的第一个相交方块。
     * @throws 此函数可能会抛出错误。
     */
    getBlockFromViewDirection(options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @remarks
     * Gets a component (that represents additional capabilities)
     * for an entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:health').
     * If no namespace prefix is specified, 'minecraft:' is
     * assumed. Available component IDs can be found as part of the
     * {@link EntityComponentTypes} enum.
     * @returns
     * Returns the component if it exists on the entity, otherwise
     * undefined.
     * 
     * 获取实体的一个组件（代表附加能力）。
     *
     * @param componentId
     * 组件的标识符（例如，'minecraft:health'）。如果没有指定命名空间前缀，则假设为 'minecraft:'。可以在枚举 {@link EntityComponentTypes} 中找到可用的组件 ID。
     * @returns
     * 如果实体上存在该组件，则返回该组件，否则返回 undefined。
     */
    getComponent<T extends keyof EntityComponentTypeMap>(componentId: T): EntityComponentTypeMap[T] | undefined;
    /**
     * @remarks
     * Returns all components that are both present on this entity
     * and supported by the API.
     *
     * @returns
     * Returns all components that are both present on this entity
     * and supported by the API.
     * 
     * 返回在此实体上存在且 API 支持的所有组件。
     *
     * @returns
     * 返回在此实体上存在且 API 支持的所有组件。
     */
    getComponents(): EntityComponent[];
    /**
     * @remarks
     * Returns a property value.
     *
     * @param identifier
     * The property identifier.
     * @returns
     * Returns the value for the property, or undefined if the
     * property has not been set.
     * @throws This function can throw errors.
     * 
     * 返回一个属性值。
     *
     * @param identifier
     * 属性标识符。
     * @returns
     * 返回属性的值，如果未设置该属性则返回 undefined。
     * @throws 此函数可能会抛出错误。
     */
    getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined;
    /**
     * @remarks
     * Returns the available set of dynamic property identifiers
     * that have been used on this entity.
     *
     * @returns
     * A string array of the dynamic properties set on this entity.
     * @throws This function can throw errors.
     * 
     * 返回在此实体上使用的可用动态属性标识符集。
     *
     * @returns
     * 包含在此实体上设置的动态属性的字符串数组。
     * @throws 此函数可能会抛出错误。
     */
    getDynamicPropertyIds(): string[];
    /**
     * @remarks
     * Returns the total size, in bytes, of all the dynamic
     * properties that are currently stored for this entity. This
     * includes the size of both the key and the value.  This can
     * be useful for diagnosing performance warning signs - if, for
     * example, an entity has many megabytes of associated dynamic
     * properties, it may be slow to load on various devices.
     *
     * @throws This function can throw errors.
     * 
     * 返回为此实体当前存储的所有动态属性的总大小（以字节为单位）。这包括键和值的大小。这对于诊断性能警告标志很有用 - 例如，如果实体有数兆字节的相关动态属性，那么它在各种设备上加载可能会很慢。
     *
     * @throws 此函数可能会抛出错误。
     */
    getDynamicPropertyTotalByteCount(): number;
    /**
     * @remarks
     * Returns the effect for the specified EffectType on the
     * entity, undefined if the effect is not present, or throws an
     * error if the effect does not exist.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Effect object for the specified effect, undefined if the
     * effect is not present, or throws an error if the effect does
     * not exist.
     * @throws This function can throw errors.
     * 
     * 返回实体上指定 EffectType 的效果，如果效果不存在则返回 undefined，如果效果不存在则抛出错误。
     *
     * @param effectType
     * 效果标识符。
     * @returns
     * 指定效果的效果对象，如果效果不存在则返回 undefined，如果效果不存在则抛出错误。
     * @throws 此函数可能会抛出错误。
     */
    getEffect(effectType: EffectType | string): Effect | undefined;
    /**
     * @remarks
     * Returns a set of effects applied to this entity.
     *
     * @returns
     * List of effects.
     * @throws This function can throw errors.
     * 
     * 返回应用于此实体的一组效果。
     *
     * @returns
     * 效果列表。
     * @throws 此函数可能会抛出错误。
     */
    getEffects(): Effect[];
    /**
     * @remarks
     * Gets the entities that this entity is looking at by
     * performing a ray cast from the view of this entity.
     *
     * @param options
     * Additional configuration options for the ray cast.
     * @returns
     * Returns a set of entities from the direction that this
     * entity is looking at.
     * @throws This function can throw errors.
     * 
     * 通过从实体视角进行光束投射来获取此实体正注视的实体。
     *
     * @param options
     * 光束投射的其他配置选项。
     * @returns
     * 返回一组从实体视线方向的实体。
     * @throws 此函数可能会抛出错误。
     */
    getEntitiesFromViewDirection(options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * Returns the current location of the head component of this
     * entity.
     *
     * @returns
     * Returns the current location of the head component of this
     * entity.
     * @throws This function can throw errors.
     * 
     * 返回此实体头部组件的当前位置。
     *
     * @returns
     * 返回此实体头部组件的当前位置。
     * @throws 此函数可能会抛出错误。
     */
    getHeadLocation(): Vector3;
    /**
     * @remarks
     * Gets an entity Property value. If the property was set using
     * the setProperty function within the same tick, the updated
     * value will not be reflected until the subsequent tick.
     *
     * @param identifier
     * The entity Property identifier.
     * @returns
     * Returns the current property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     * 
     * 获取实体属性的值。如果在同一刻使用 setProperty 函数设置了属性，则更新的值直到下一刻才反映出来。
     *
     * @param identifier
     * 实体属性标识符。
     * @returns
     * 返回当前属性值。对于枚举属性，返回字符串。对于浮点数和整数属性，返回数字。对于未定义的属性，返回 undefined。
     * @throws
     * 如果实体无效，则抛出异常。
     */
    getProperty(identifier: string): boolean | number | string | undefined;
    /**
     * @remarks
     * Returns the current rotation component of this entity.
     *
     * @returns
     * Returns a Vec2 containing the rotation of this entity (in
     * degrees).
     * @throws This function can throw errors.
     * 
     * 返回此实体当前的旋转组件。
     *
     * @returns
     * 返回包含此实体旋转的 Vec2（以度为单位）。
     * @throws 此函数可能会抛出错误。
     */
    getRotation(): Vector2;
    /**
     * @remarks
     * Returns all tags associated with the entity.
     *
     * @returns
     * An array containing all tags as strings.
     * @throws This function can throw errors.
     * 
     * 返回与实体关联的所有标签。
     *
     * @returns
     * 包含所有标签的字符串数组。
     * @throws 此函数可能会抛出错误。
     */
    getTags(): string[];
    /**
     * @remarks
     * Returns the current velocity vector of the entity.
     *
     * @returns
     * Returns the current velocity vector of the entity.
     * @throws This function can throw errors.
     * @example getFireworkVelocity.ts
     * ```typescript
     * // A function that spawns fireworks and logs their velocity after 5 ticks
     * import { DimensionLocation, system, world } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnFireworks(location: DimensionLocation) {
     *     const fireworkRocket = location.dimension.spawnEntity(MinecraftEntityTypes.FireworksRocket, location);
     *
     *     system.runTimeout(() => {
     *         const velocity = fireworkRocket.getVelocity();
     *
     *         world.sendMessage(`Velocity of firework is: ${velocity.x}, ${velocity.y}, ${velocity.z}`);
     *     }, 5);
     * }
     * ```
     * 
     * 返回实体当前的速度矢量。
     *
     * @returns
     * 返回实体当前的速度矢量。
     * @throws 此函数可能会抛出错误。
     */
    getVelocity(): Vector3;
    /**
     * @remarks
     * Returns the current view direction of the entity.
     *
     * @returns
     * Returns the current view direction of the entity.
     * @throws This function can throw errors.
     * 
     * 返回实体当前的视线方向。
     *
     * @returns
     * 返回实体当前的视线方向。
     * @throws 此函数可能会抛出错误。
     */
    getViewDirection(): Vector3;
    /**
     * @remarks
     * Returns true if the specified component is present on this
     * entity.
     *
     * @param componentId
     * The identifier of the component (e.g., 'minecraft:rideable')
     * to retrieve. If no namespace prefix is specified,
     * 'minecraft:' is assumed.
     * @returns
     * Returns true if the specified component is present on this
     * entity.
     * 
     * 如果指定的组件存在于此实体上，则返回 true。
     *
     * @param componentId
     * 要检索的组件标识符（例如，'minecraft:rideable'）。如果没有指定命名空间前缀，则假设为 'minecraft:'。
     * @returns
     * 如果指定的组件存在于此实体上，则返回 true。
     */
    hasComponent(componentId: string): boolean;
    /**
     * @remarks
     * Returns whether an entity has a particular tag.
     *
     * @param tag
     * Identifier of the tag to test for.
     * @returns
     * Returns whether an entity has a particular tag.
     * @throws This function can throw errors.
     * 
     * 返回实体是否具有特定的标签。
     *
     * @param tag
     * 要测试的标签标识符。
     * @returns
     * 返回实体是否具有特定的标签。
     * @throws 此函数可能会抛出错误。
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns whether the entity can be manipulated by script. A
     * Player is considered valid when it's EntityLifetimeState is
     * set to Loaded.
     *
     * @returns
     * Whether the entity is valid.
     * 
     * 返回实体是否可以由脚本操控。当 Player 的 EntityLifetimeState 设置为 Loaded 时，认为它是有效的。
     *
     * @returns
     * 实体是否有效。
     */
    isValid(): boolean;
    /**
     * @remarks
     * Kills this entity. The entity will drop loot as normal.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Returns true if entity can be killed (even if it is already
     * dead), otherwise it returns false.
     * @throws This function can throw errors.
     * @example tagsQuery.ts
     * ```typescript
     * import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';
     *
     * function mobParty(targetLocation: DimensionLocation) {
     *     const mobs = ['creeper', 'skeleton', 'sheep'];
     *
     *     // create some sample mob data
     *     for (let i = 0; i < 10; i++) {
     *         const mobTypeId = mobs[i % mobs.length];
     *         const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
     *         entity.addTag('mobparty.' + mobTypeId);
     *     }
     *
     *     const eqo: EntityQueryOptions = {
     *         tags: ['mobparty.skeleton'],
     *     };
     *
     *     for (const entity of targetLocation.dimension.getEntities(eqo)) {
     *         entity.kill();
     *     }
     * }
     * ```
     * 
     * 杀死此实体。实体会正常掉落战利品。
     *
     * 此函数在只读模式下无法调用。
     *
     * @returns
     * 如果实体可以被杀死（即使它已经死亡），则返回 true，否则返回 false。
     * @throws 此函数可能会抛出错误。
     */
    kill(): boolean;
    /**
     * @remarks
     * Matches the entity against the passed in options. Uses the
     * location of the entity for matching if the location is not
     * specified in the passed in EntityQueryOptions.
     *
     * @param options
     * The query to perform the match against.
     * @returns
     * Returns true if the entity matches the criteria in the
     * passed in EntityQueryOptions, otherwise it returns false.
     * @throws
     * Throws if the query options are misconfigured.
     * 
     * 根据传入的选项匹配实体。如果在传递的 EntityQueryOptions 中未指定位置，则使用实体的位置进行匹配。
     *
     * @param options
     * 进行匹配的查询。
     * @returns
     * 如果实体符合传递的 EntityQueryOptions 中的标准，则返回 true，否则返回 false。
     * @throws
     * 如果查询选项配置错误，则抛出异常。
     */
    matches(options: EntityQueryOptions): boolean;
    /**
     * @remarks
     * Cause the entity to play the given animation.
     *
     * This function can't be called in read-only mode.
     *
     * @param animationName
     * The animation identifier. e.g. animation.creeper.swelling
     * @param options
     * Additional options to control the playback and transitions
     * of the animation.
     * @throws This function can throw errors.
     * 
     * 让实体播放给定的动画。
     *
     * 此函数在只读模式下无法调用。
     *
     * @param animationName
     * 动画标识符。例如，animation.creeper.swelling。
     * @param options
     * 控制动画播放和过渡的其他选项。
     * @throws 此函数可能会抛出错误。
     */
    playAnimation(animationName: string, options?: PlayAnimationOptions): void;
    /**
     * @remarks
     * Immediately removes the entity from the world. The removed
     * entity will not perform a death animation or drop loot upon
     * removal.
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     */
    remove(): void;
    /**
     * @remarks
     * Removes the specified EffectType on the entity, or returns
     * false if the effect is not present.
     *
     * This function can't be called in read-only mode.
     *
     * @param effectType
     * The effect identifier.
     * @returns
     * Returns true if the effect has been removed. Returns false
     * if the effect is not found or does not exist.
     * @throws This function can throw errors.
     */
    removeEffect(effectType: EffectType | string): boolean;
    /**
     * @remarks
     * Removes a specified tag from an entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param tag
     * Content of the tag to remove.
     * @returns
     * Returns whether the tag existed on the entity.
     * @throws This function can throw errors.
     */
    removeTag(tag: string): boolean;
    /**
     * @remarks
     * Resets an Entity Property back to its default value, as
     * specified in the Entity's definition. This property change
     * is not applied until the next tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @returns
     * Returns the default property value. For enum properties, a
     * string is returned. For float and int properties, a number
     * is returned. For undefined properties, undefined is
     * returned.
     * @throws
     * Throws if the entity is invalid.
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link Error}
     */
    resetProperty(identifier: string): boolean | number | string;
    /**
     * @remarks
     * Runs a synchronous command on the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param commandString
     * The command string. Note: This should not include a leading
     * forward slash.
     * @returns
     * A command result containing whether the command was
     * successful.
     * @throws This function can throw errors.
     *
     * {@link CommandError}
     *
     * {@link Error}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * this entity. Note that there is a maximum queue of 128
     * asynchronous commands that can be run in a given tick.
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * @returns
     * For commands that return data, returns a JSON structure with
     * command response values.
     * @throws This function can throw errors.
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @remarks
     * Sets a specified property to a value.
     *
     * @param identifier
     * The property identifier.
     * @param value
     * Data value of the property to set.
     * @throws This function can throw errors.
     */
    setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void;
    /**
     * @remarks
     * Sets an entity on fire (if it is not in water or rain). Note
     * that you can call getComponent('minecraft:onfire') and, if
     * present, the entity is on fire.
     *
     * This function can't be called in read-only mode.
     *
     * @param seconds
     * Length of time to set the entity on fire.
     * @param useEffects
     * Whether side-effects should be applied (e.g. thawing freeze)
     * and other conditions such as rain or fire protection should
     * be taken into consideration.
     * @returns
     * Whether the entity was set on fire. This can fail if seconds
     * is less than or equal to zero, the entity is wet or the
     * entity is immune to fire.
     * @throws This function can throw errors.
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
     *             world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
     *         }
     *         // This will extinguish the entity
     *         entity.extinguishFire(true);
     *     }, 30); // Run in 30 ticks or ~1.5 seconds
     *
     * }
     * ```
     */
    setOnFire(seconds: number, useEffects?: boolean): boolean;
    /**
     * @remarks
     * Sets an Entity Property to the provided value. This property
     * change is not applied until the next tick.
     *
     * This function can't be called in read-only mode.
     *
     * @param identifier
     * The Entity Property identifier.
     * @param value
     * The property value. The provided type must be compatible
     * with the type specified in the entity's definition.
     * @throws
     * Throws if the entity is invalid.
     * Throws if an invalid identifier is provided.
     * Throws if the provided value type does not match the
     * property type.
     * Throws if the provided value is outside the expected range
     * (int, float properties).
     * Throws if the provided string value does not match the set
     * of accepted enum values (enum properties
     */
    setProperty(identifier: string, value: boolean | number | string): void;
    /**
     * @remarks
     * Sets the main rotation of the entity.
     *
     * This function can't be called in read-only mode.
     *
     * @param rotation
     * The x and y rotation of the entity (in degrees). For most
     * mobs, the x rotation controls the head tilt and the y
     * rotation controls the body rotation.
     * @throws This function can throw errors.
     */
    setRotation(rotation: Vector2): void;
    /**
     * @remarks
     * Teleports the selected entity to a new location
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * New location for the entity.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @throws This function can throw errors.
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
     */
    teleport(location: Vector3, teleportOptions?: TeleportOptions): void;
    /**
     * @remarks
     * Triggers an entity type event. For every entity, a number of
     * events are defined in an entities' definition for key entity
     * behaviors; for example, creepers have a
     * minecraft:start_exploding type event.
     *
     * This function can't be called in read-only mode.
     *
     * @param eventName
     * Name of the entity type event to trigger. If a namespace is
     * not specified, minecraft: is assumed.
     * @throws
     * If the event is not defined in the definition of the entity,
     * an error will be thrown.
     * @example triggerEvent.ts
     * ```typescript
     * // A function that spawns a creeper and triggers it to explode immediately
     * import { DimensionLocation } from '@minecraft/server';
     * import { MinecraftEntityTypes } from '@minecraft/vanilla-data';
     *
     * function spawnExplodingCreeper(location: DimensionLocation) {
     *     const creeper = location.dimension.spawnEntity(MinecraftEntityTypes.Creeper, location);
     *
     *     creeper.triggerEvent('minecraft:start_exploding_forced');
     * }
     * ```
     */
    triggerEvent(eventName: string): void;
    /**
     * @remarks
     * Attempts to try a teleport, but may not complete the
     * teleport operation (for example, if there are blocks at the
     * destination.)
     *
     * This function can't be called in read-only mode.
     *
     * @param location
     * Location to teleport the entity to.
     * @param teleportOptions
     * Options regarding the teleport operation.
     * @returns
     * Returns whether the teleport succeeded. This can fail if the
     * destination chunk is unloaded or if the teleport would
     * result in intersecting with blocks.
     * @throws This function can throw errors.
     */
    tryTeleport(location: Vector3, teleportOptions?: TeleportOptions): boolean;
}