/* IMPORT */ import { Camera, DimensionLocation, Entity, GameMode, ItemStack, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, MusicOptions, PlayerInputPermissions, PlayerSoundOptions, RawMessage, ScreenDisplay, Vector3 } from '../index';

/**
 * Represents a player within the world.
 * 
 * 表示世界中的玩家。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class Player extends Entity {
    private constructor();
    /**
     * @remarks
     * The player's Camera.
     * 
     * 玩家的摄像机。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly camera: Camera;
    /**
     * @rc
     * @remarks
     * Input permissions of the player.
     * 
     * 玩家的输入权限。
     */
    readonly inputPermissions: PlayerInputPermissions;
    /**
     * @remarks
     * If true, the player is currently emoting.
     * 
     * 如果为 `true`，则玩家当前正在做表情动作。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isEmoting: boolean;
    /**
     * @remarks
     * Whether the player is flying. For example, in Creative or
     * Spectator mode.
     * 
     * 玩家是否处于飞行状态。例如，在创造模式或旁观者模式中。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isFlying: boolean;
    /**
     * @remarks
     * Whether the player is gliding with Elytra.
     * 
     * 玩家是否正在使用鞘翅滑翔。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isGliding: boolean;
    /**
     * @remarks
     * Whether the player is jumping. This will remain true while
     * the player is holding the jump action.
     * 
     * 玩家是否正在跳跃。当玩家按住跳跃动作时，此值保持为 `true`。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly isJumping: boolean;
    /**
     * @remarks
     * The current overall level for the player, based on their
     * experience.
     * 
     * 根据玩家的经验计算得出的当前总等级。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly level: number;
    /**
     * @remarks
     * Name of the player.
     * 
     * 玩家的名字。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly name: string;
    /**
     * @remarks
     * Contains methods for manipulating the on-screen display of a
     * Player.
     * 
     * 包含用于操作玩家屏幕显示的方法。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly onScreenDisplay: ScreenDisplay;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下不可编辑。
     */
    selectedSlotIndex: number;
    /**
     * @remarks
     * The overall total set of experience needed to achieve the
     * next level for a player.
     * 
     * 玩家达到下一等级所需的总体经验值。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly totalXpNeededForNextLevel: number;
    /**
     * @remarks
     * The current set of experience achieved for the player.
     * 
     * 玩家当前已获得的经验值。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly xpEarnedAtCurrentLevel: number;
    /**
     * @remarks
     * Adds/removes experience to/from the Player and returns the
     * current experience of the Player.
     * 
     * 向/从玩家添加/移除经验值，并返回玩家当前的经验值。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param amount
     * Amount of experience to add. Note that this can be negative.
     * Min/max bounds at -2^24 ~ 2^24
     * 
     * 要添加的经验值数量。注意，此值可以为负数。最小/最大范围为 -2^24 ~ 2^24。
     * @returns
     * Returns the current experience of the Player.
     * 
     * 返回玩家当前的经验值。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    addExperience(amount: number): number;
    /**
     * @remarks
     * Adds/removes level to/from the Player and returns the
     * current level of the Player.
     * 
     * 向/从玩家添加/移除等级，并返回玩家当前的等级。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param amount
     * Amount to add to the player. Min/max bounds at -2^24 ~ 2^24
     * 
     * 要添加给玩家的数量。最小/最大范围为 -2^24 ~ 2^24。
     * @returns
     * Returns the current level of the Player.
     * 
     * 返回玩家当前的等级。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    addLevels(amount: number): number;
    /**
     * @beta
     * @remarks
     * Eats an item, providing the item's hunger and saturation
     * effects to the player. Can only be used on food items.
     * 
     * 消耗物品，为玩家提供该物品的饥饿度和饱食度效果。只能用于食物物品。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param itemStack
     * The item to eat.
     * 
     * 要消耗的物品。
     * @throws
     * Throws if the item is not a food item.
     * 
     * 如果物品不是食物，则会抛出异常。
     */
    eatItem(itemStack: ItemStack): void;
    /**
     * @remarks
     * Retrieves the active gamemode for this player, if specified.
     * 
     * 如果已指定，则获取此玩家当前的游戏模式。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getGameMode(): GameMode;
    /**
     * @remarks
     * Gets the current item cooldown time for a particular
     * cooldown category.
     * 
     * 获取特定冷却类别中的当前物品冷却时间。
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * 
     * 指定要获取当前冷却时间的冷却类别。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getItemCooldown(cooldownCategory: string): number;
    /**
     * @remarks
     * Gets the current spawn point of the player.
     * 
     * 获取玩家当前的重生点。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getSpawnPoint(): DimensionLocation | undefined;
    /**
     * @remarks
     *  Gets the total experience of the Player.
     * 
     * 获取玩家的总经验值。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getTotalXp(): number;
    /**
     * @beta
     * @remarks
     * Returns true if this player has operator-level permissions.
     * 
     * 如果此玩家具有操作员级别的权限，则返回 `true`。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    isOp(): boolean;
    /**
     * @remarks
     * Plays a music track that only this particular player can
     * hear.
     * 
     * 播放只有特定玩家能听到的音乐曲目。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param trackId
     * Identifier of the music track to play.
     * 
     * 要播放的音乐曲目的标识符。
     * @param musicOptions
     * Additional options for the music track.
     * 
     * 音乐曲目的附加选项。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    playMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Plays a sound that only this particular player can hear.
     * 
     * 播放只有特定玩家能听到的声音。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param soundOptions
     * Additional optional options for the sound.
     * 
     * 声音的附加可选选项。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    playSound(soundId: string, soundOptions?: PlayerSoundOptions): void;
    /**
     * @beta
     * @remarks
     * This is an internal-facing method for posting a system
     * message to downstream clients.
     * 
     * 这是一个面向内部的方法，用于向下游客户端发送系统消息。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    postClientMessage(id: string, value: string): void;
    /**
     * @remarks
     * Queues an additional music track that only this particular
     * player can hear. If a track is not playing, a music track
     * will play.
     * 
     * 排队播放只有特定玩家能听到的额外音乐曲目。如果没有曲目正在播放，则会播放一首音乐曲目。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param trackId
     * Identifier of the music track to play.
     * 
     * 要播放的音乐曲目的标识符。
     * @param musicOptions
     * Additional options for the music track.
     * 
     * 音乐曲目的附加选项。
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * An error will be thrown if fade is less than 0.0.
     * 
     * 如果音量小于 0.0，则会抛出错误。
     * 如果淡入淡出小于 0.0，则会抛出错误。
     *
     */
    queueMusic(trackId: string, musicOptions?: MusicOptions): void;
    /**
     * @remarks
     * Resets the level of the player.
     * 
     * 重置玩家的等级。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    resetLevel(): void;
    /**
     * @remarks
     * Sends a message to the player.
     * 
     * 向玩家发送消息。
     *
     * @param message
     * The message to be displayed.
     * 
     * 要显示的消息。
     * @throws
     * This method can throw if the provided {@link RawMessage} is
     * in an invalid format. For example, if an empty `name` string
     * is provided to `score`.
     * 
     * 如果提供的 {@link RawMessage} 格式无效，此方法可能会抛出异常。例如，如果向 `score` 提供空的 `name` 字符串。
     * @example sendMessagesToPlayer.ts
     * ```typescript
     * import { Player } from "@minecraft/server";
     *
     * function sendPlayerMessages(player: Player) {
     *     // Displays "First or Second"
     *     const rawMessage = { translate: 'accessibility.list.or.two', with: ['First', 'Second'] };
     *     player.sendMessage(rawMessage);
     *
     *     // Displays "Hello, world!"
     *     player.sendMessage('Hello, world!');
     *
     *     // Displays "Welcome, Amazing Player 1!"
     *     player.sendMessage({ translate: 'authentication.welcome', with: ['Amazing Player 1'] });
     *
     *     // Displays the player's score for objective "obj". Each player will see their own score.
     *     const rawMessageWithScore = { score: { name: '*', objective: 'obj' } };
     *     player.sendMessage(rawMessageWithScore);
     *
     *     // Displays "Apple or Coal"
     *     const rawMessageWithNestedTranslations = {
     *         translate: 'accessibility.list.or.two',
     *         with: { rawtext: [{ translate: 'item.apple.name' }, { translate: 'item.coal.name' }] },
     *     };
     *     player.sendMessage(rawMessageWithNestedTranslations);
     * }
     * ```
     */
    sendMessage(message: (RawMessage | string)[] | RawMessage | string): void;
    /**
     * @remarks
     * Sets a gamemode override for this player.
     * 
     * 为此玩家设置游戏模式覆盖。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param gameMode
     * Active gamemode.
     * 
     * 当前的游戏模式。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setGameMode(gameMode?: GameMode): void;
    /**
     * @beta
     * @remarks
     * Will change the specified players permissions, and whether
     * they are operator or not.
     * 
     * 更改指定玩家的权限以及他们是否为操作员。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setOp(isOp: boolean): void;
    /**
     * @remarks
     * Sets the current starting spawn point for this particular
     * player.
     * 
     * 设置特定玩家当前的重生点。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationOutOfWorldBoundariesError}
     */
    setSpawnPoint(spawnPoint?: DimensionLocation): void;
    /**
     * @beta
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world. Only visible to the target player.
     * 
     * 在世界中的指定位置创建新的粒子发射器。仅目标玩家可见。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param effectName
     * Identifier of the particle to create.
     * 
     * 要创建的粒子的标识符。
     * @param location
     * The location at which to create the particle emitter.
     * 
     * 创建粒子发射器的位置。
     * @param molangVariables
     * A set of optional, customizable variables that can be
     * adjusted for this particle.
     * 
     * 可以针对此粒子进行调整的一组可选的、可定制变量。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link Error}
     *
     * {@link LocationInUnloadedChunkError}
     *
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * import { world, MolangVariableMap, Vector3 } from '@minecraft/server';
     *
     * world.afterEvents.playerSpawn.subscribe(event => {
     *     const targetLocation = event.player.location;
     *     for (let i = 0; i < 100; i++) {
     *         const molang = new MolangVariableMap();
     *
     *         molang.setColorRGB('variable.color', {
     *             red: Math.random(),
     *             green: Math.random(),
     *             blue: Math.random()
     *         });
     *
     *         const newLocation: Vector3 = {
     *             x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
     *             y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
     *             z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
     *         };
     *         event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *     }
     * });
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    /**
     * @remarks
     * Sets the item cooldown time for a particular cooldown
     * category.
     * 
     * 设置特定冷却类别中的物品冷却时间。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @param cooldownCategory
     * Specifies the cooldown category to retrieve the current
     * cooldown for.
     * 
     * 指定要获取当前冷却时间的冷却类别。
     * @param tickDuration
     * Duration in ticks of the item cooldown.
     * 
     * 物品冷却时间的持续时间（以刻为单位）。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    startItemCooldown(cooldownCategory: string, tickDuration: number): void;
    /**
     * @remarks
     * Stops any music tracks from playing for this particular
     * player.
     * 
     * 停止为特定玩家播放任何音乐曲目。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下不可调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    stopMusic(): void;
}