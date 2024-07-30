/* IMPORT */ import { BiomeSearchOptions, BiomeType, Block, BlockFillOptions, BlockFilter, BlockPermutation, BlockRaycastHit, BlockRaycastOptions, BlockType, BlockVolumeBase, CommandError, CommandResult, CompoundBlockVolume, Entity, EntityQueryOptions, EntityRaycastHit, EntityRaycastOptions, ExplosionOptions, ItemStack, ListBlockVolume, LocationInUnloadedChunkError, LocationOutOfWorldBoundariesError, MolangVariableMap, Player, SpawnEntityOptions, UnloadedChunksError, Vector3, VectorXZ, WeatherType, WorldSoundOptions, minecraftcommon } from '../index';

/**
 * A class that represents a particular dimension (e.g., The
 * End) within a world.
 * 
 * 表示世界中的特定维度（例如：末地）的类。
 */
export class Dimension {
    private constructor();
    /**
     * @remarks
     * Height range of the dimension.
     * 
     * 维度的高度范围。
     *
     * @throws This property can throw when used.
     * 
     * 当使用此属性时可能会抛出异常。
     */
    readonly heightRange: minecraftcommon.NumberRange;
    /**
     * @remarks
     * Identifier of the dimension.
     * 
     * 维度的标识符。
     */
    readonly id: string;
    /**
     * @beta
     * @remarks
     * Searches the block volume for a block that satisfies the
     * block filter.
     * 
     * 在区块体积中搜索满足区块过滤器条件的区块。
     *
     * @param volume
     * Volume of blocks that will be checked.
     * 
     * 要检查的区块体积。
     * @param filter
     * Block filter that will be checked against each block in the
     * volume.
     * 
     * 将用于检查体积中每个区块的区块过滤器。
     * @param allowUnloadedChunks
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * 
     * 如果设置为 true，如果区块体积的部分或全部位于已加载区块之外时，将抑制 UnloadedChunksError 错误。仅检查体积内已加载区块中的区块位置。
     * @returns
     * Returns true if at least one block in the volume satisfies
     * the filter, false otherwise.
     * 
     * 如果体积中的至少一个区块满足过滤器条件，则返回 true，否则返回 false。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     */
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    /**
     * @remarks
     * Creates an explosion at the specified location.
     * 
     * 在指定位置生成爆炸。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param location
     * The location of the explosion.
     * 
     * 爆炸的位置。
     * @param radius
     * Radius, in blocks, of the explosion to create.
     * 
     * 要生成的爆炸的半径（以区块为单位）。
     * @param explosionOptions
     * Additional configurable options for the explosion.
     * 
     * 爆炸的附加可配置选项。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * @example createExplosions.ts
     * ```typescript
     * // Creates an explosion of radius 15 that does not break blocks
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function createExplosions(location: DimensionLocation) {
     *     // Creates an explosion of radius 15 that does not break blocks
     *     location.dimension.createExplosion(location, 15, { breaksBlocks: false });
     *
     *     // Creates an explosion of radius 15 that does not cause fire
     *     location.dimension.createExplosion(location, 15, { causesFire: true });
     *
     *     // Creates an explosion of radius 10 that can go underwater
     *     location.dimension.createExplosion(location, 10, { allowUnderwater: true });
     * }
     * ```
     */
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    /**
     * @beta
     * @remarks
     * Fills an area between begin and end with block of type
     * block.
     * 
     * 使用指定类型的区块填充开始和结束之间的区域。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param block
     * Type of block to fill the volume with.
     * 
     * 用于填充体积的区块类型。
     * @param options
     * A set of additional options, such as a matching block to
     * potentially replace this fill block with.
     * 
     * 一组附加选项，例如可以替换此填充区块的匹配区块。
     * @returns
     *  Returns number of blocks placed.
     * 
     * 返回放置的区块数量。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     */
    fillBlocks(
        volume: BlockVolumeBase | CompoundBlockVolume,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    /**
     * @beta
     * @remarks
     * Finds the location of the closest biome of a particular
     * type. Note that the findClosestBiome operation can take some
     * time to complete, so avoid using many of these calls within
     * a particular tick.
     * 
     * 查找特定类型的最近生物群系的位置。请注意，findClosestBiome 操作可能需要一些时间来完成，因此避免在同一刻内进行大量此类调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param pos
     * Starting location to look for a biome to find.
     * 
     * 开始查找要查找的生物群系的位置。
     * @param biomeToFind
     * Identifier of the biome to look for.
     * 
     * 要查找的生物群系的标识符。
     * @param options
     * Additional selection criteria for a biome search.
     * 
     * 生物群系搜索的附加选择标准。
     * @returns
     * Returns a location of the biome, or undefined if a biome
     * could not be found.
     * 
     * 返回生物群系的位置，或者如果没有找到生物群系则返回 undefined。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link minecraftcommon.EngineError}
     * 
     * {@link Error}
     */
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    /**
     * @remarks
     * Returns a block instance at the given location.
     * 
     * 返回给定位置的区块实例。
     *
     * @param location
     * The location at which to return a block.
     * 
     * 返回区块的位置。
     * @returns
     * Block at the specified location, or 'undefined' if asking
     * for a block at an unloaded chunk.
     * 
     * 指定位置的区块，或者如果请求的是未加载区块中的区块则返回 'undefined'。
     * @throws
     * PositionInUnloadedChunkError: Exception thrown when trying
     * to interact with a Block object that isn't in a loaded and
     * ticking chunk anymore
     * 
     * PositionOutOfWorldBoundariesError: Exception thrown when
     * trying to interact with a position outside of dimension
     * height range
     * 
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    getBlock(location: Vector3): Block | undefined;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @beta
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    /**
     * @remarks
     * Gets the first block that intersects with a vector emanating
     * from a location.
     * 
     * 获取与从位置发出的向量相交的第一个区块。
     *
     * @param location
     * Location from where to initiate the ray check.
     * 
     * 发起光线检测的位置。
     * @param direction
     * Vector direction to cast the ray.
     * 
     * 需要投射的向量方向。
     * @param options
     * Additional options for processing this raycast query.
     * 
     * 处理此光线检测查询的附加选项。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    /**
     * @beta
     * @remarks
     * Gets all the blocks in a volume that satisfy the filter.
     * 
     * 获取体积中满足过滤器的所有区块。
     *
     * @param volume
     * Volume of blocks that will be checked.
     * 
     * 要检查的区块体积。
     * @param filter
     * Block filter that will be checked against each block in the
     * volume.
     * 
     * 将用于检查体积中每个区块的区块过滤器。
     * @param allowUnloadedChunks
     * If set to true will suppress the UnloadedChunksError if some
     * or all of the block volume is outside of the loaded chunks.
     * Will only check the block locations that are within the
     * loaded chunks in the volume.
     * 
     * 如果设置为 true，如果区块体积的部分或全部位于已加载区块之外时，将抑制 UnloadedChunksError 错误。仅检查体积内已加载区块中的区块位置。
     * @returns
     * Returns the ListBlockVolume that contains all the block
     * locations that satisfied the block filter.
     * 
     * 返回包含所有满足区块过滤器的区块位置的 ListBlockVolume。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link Error}
     * 
     * {@link UnloadedChunksError}
     */
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    /**
     * @remarks
     * Returns a set of entities based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * 
     * 根据通过 EntityQueryOptions 过滤标准定义的一组条件返回一组实体。
     *
     * @param options
     * Additional options that can be used to filter the set of
     * entities returned.
     * 
     * 可用于过滤返回的实体集的附加选项。
     * @returns
     * An entity array.
     * 
     * 实体数组。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     * @example checkFeatherNearby.ts
     * ```typescript
     * import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";
     *
     * // Returns true if a feather item entity is within 'distance' blocks of 'location'.
     * function isFeatherNear(location: DimensionLocation, distance: number): boolean {
     *     const items = location.dimension.getEntities({
     *         location: location,
     *         maxDistance: 20,
     *     });
     *
     *     for (const item of items) {
     *         const itemComp = item.getComponent(EntityComponentTypes.Item);
     *
     *         if (itemComp) {
     *             if (itemComp.itemStack.typeId.endsWith('feather')) {
     *                 return true;
     *             }
     *         }
     *     }
     *
     *     return false;
     * }
     * ```
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
     */
    getEntities(options?: EntityQueryOptions): Entity[];
    /**
     * @remarks
     * Returns a set of entities at a particular location.
     * 
     * 返回特定位置的一组实体。
     *
     * @param location
     * The location at which to return entities.
     * 
     * 返回实体的位置。
     * @returns
     * Zero or more entities at the specified location.
     * 
     * 指定位置的一个或多个实体。
     */
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    /**
     * @remarks
     * Gets entities that intersect with a specified vector
     * emanating from a location.
     * 
     * 获取与从位置发出的指定向量相交的实体。
     *
     * @param options
     * Additional options for processing this raycast query.
     * 
     * 处理此光线检测查询的附加选项。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    /**
     * @remarks
     * Returns a set of players based on a set of conditions
     * defined via the EntityQueryOptions set of filter criteria.
     * 
     * 根据通过 EntityQueryOptions 过滤标准定义的一组条件返回一组玩家。
     *
     * @param options
     * Additional options that can be used to filter the set of
     * players returned.
     * 
     * 可用于过滤返回的玩家集的附加选项。
     * @returns
     * A player array.
     * 
     * 玩家数组。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getPlayers(options?: EntityQueryOptions): Player[];
    /**
     * @rc
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    /**
     * @beta
     * @remarks
     * Returns the current weather.
     * 
     * 返回当前天气。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @returns
     * Returns a WeatherType that explains the broad category of
     * weather that is currently going on.
     * 
     * 返回描述当前进行的广泛天气类别的 WeatherType。
     */
    getWeather(): WeatherType;
    /**
     * @remarks
     * Plays a sound for all players.
     * 
     * 为所有玩家播放声音。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param soundId
     * Identifier of the sound.
     * 
     * 声音的标识符。
     * @param location
     * Location of the sound.
     * 
     * 声音的位置。
     * @param soundOptions
     * Additional options for configuring additional effects for
     * the sound.
     * 
     * 用于配置声音的附加效果的附加选项。
     * @throws
     * An error will be thrown if volume is less than 0.0.
     * 
     * 如果音量小于 0.0，则会抛出错误。
     * An error will be thrown if fade is less than 0.0.
     * 
     * 如果淡入淡出小于 0.0，则会抛出错误。
     * An error will be thrown if pitch is less than 0.01.
     * 
     * 如果音高小于 0.01，则会抛出错误。
     * An error will be thrown if volume is less than 0.0.
     * 
     * 如果音量小于 0.0，则会抛出错误。
     * @example playMusicAndSound.ts
     * ```typescript
     * import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, Vector3 } from '@minecraft/server';
     * import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';
     *
     * const players = world.getPlayers();
     * const targetLocation: Vector3 = {
     *     x: 0,
     *     y: 0,
     *     z: 0,
     * };
     *
     * const musicOptions: MusicOptions = {
     *     fade: 0.5,
     *     loop: true,
     *     volume: 1.0,
     * };
     * world.playMusic('music.menu', musicOptions);
     *
     * const worldSoundOptions: WorldSoundOptions = {
     *     pitch: 0.5,
     *     volume: 4.0,
     * };
     * const overworld = world.getDimension(MinecraftDimensionTypes.Overworld);
     * overworld.playSound('ambient.weather.thunder', targetLocation, worldSoundOptions);
     *
     * const playerSoundOptions: PlayerSoundOptions = {
     *     pitch: 1.0,
     *     volume: 1.0,
     * };
     *
     * players[0].playSound('bucket.fill_water', playerSoundOptions);
     * ```
     */
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    /**
     * @remarks
     * Runs a command synchronously using the context of the
     * broader dimenion.
     * 
     * 使用更广泛的维度上下文同步运行命令。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * 
     * 要运行的命令。注意，命令字符串不应以斜杠开头。
     * @returns
     * Returns a command result with a count of successful values
     * from the command.
     * 
     * 返回包含来自命令的成功值计数的命令结果。
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     * 
     * 如果由于参数错误或命令语法错误，或者在命令的错误情况下导致命令失败，则抛出异常。请注意，在许多情况下，如果命令不执行（例如，目标选择器找不到匹配项），此方法不会抛出异常。
     *
     * {@link CommandError}
     */
    runCommand(commandString: string): CommandResult;
    /**
     * @remarks
     * Runs a particular command asynchronously from the context of
     * the broader dimension.  Note that there is a maximum queue
     * of 128 asynchronous commands that can be run in a given
     * tick.
     * 
     * 从更广泛的维度上下文异步运行特定命令。请注意，每个刻可以运行的异步命令的最大队列长度为 128。
     *
     * @param commandString
     * Command to run. Note that command strings should not start
     * with slash.
     * 
     * 要运行的命令。注意，命令字符串不应以斜杠开头。
     * @returns
     * For commands that return data, returns a CommandResult with
     * an indicator of command results.
     * 
     * 对于返回数据的命令，返回带有命令结果指示的 CommandResult。
     * @throws
     * Throws an exception if the command fails due to incorrect
     * parameters or command syntax, or in erroneous cases for the
     * command. Note that in many cases, if the command does not
     * operate (e.g., a target selector found no matches), this
     * method will not throw an exception.
     * 
     * 如果由于参数错误或命令语法错误，或者在命令的错误情况下导致命令失败，则抛出异常。请注意，在许多情况下，如果命令不执行（例如，目标选择器找不到匹配项），此方法不会抛出异常。
     */
    runCommandAsync(commandString: string): Promise<CommandResult>;
    /**
     * @rc
     * @remarks
     * Sets a block in the world using a BlockPermutation.
     * BlockPermutations are blocks with a particular state.
     * 
     * 使用 BlockPermutation 设置世界中的区块。BlockPermutation 是具有特定状态的区块。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param location
     * The location within the dimension to set the block.
     * 
     * 设置区块的维度内的位置。
     * @param permutation
     * The block permutation to set.
     * 
     * 要设置的区块排列。
     * @throws
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
     * 
     * 如果位置位于未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    /**
     * @rc
     * @remarks
     * Sets a block at a given location within the dimension.
     * 
     * 在维度内的指定位置设置区块。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param location
     * The location within the dimension to set the block.
     * 
     * 设置区块的维度内的位置。
     * @param blockType
     * The type of block to set. This can be either a string
     * identifier or a BlockType. The default block permutation is
     * used.
     * 
     * 要设置的区块类型。这可以是字符串标识符或 BlockType。使用默认的区块排列。
     * @throws
     * Throws if the location is within an unloaded chunk or
     * outside of the world bounds.
     * 
     * 如果位置位于未加载的区块内或超出世界边界，则抛出异常。
     *
     * {@link Error}
     * 
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     */
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    /**
     * @remarks
     * Sets the current weather within the dimension
     * 
     * 设置维度内的当前天气
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param weatherType
     * Set the type of weather to apply.
     * 
     * 设置要应用的天气类型。
     * @param duration
     * Sets the duration of the weather (in ticks). If no duration
     * is provided, the duration will be set to a random duration
     * between 300 and 900 seconds.
     * 
     * 设置天气的持续时间（以刻为单位）。如果不提供持续时间，则持续时间将设置为 300 到 900 秒之间的随机持续时间。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    setWeather(weatherType: WeatherType, duration?: number): void;
    /**
     * @remarks
     * Creates a new entity (e.g., a mob) at the specified
     * location.
     * 
     * 在指定位置创建新的实体（例如：生物）。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param identifier
     * Identifier of the type of entity to spawn. If no namespace
     * is specified, 'minecraft:' is assumed.
     * 
     * 要生成的实体类型标识符。如果没有指定命名空间，则假设为 'minecraft:'。
     * @param location
     * The location at which to create the entity.
     * 
     * 创建实体的位置。
     * @returns
     * Newly created entity at the specified location.
     * 
     * 在指定位置新创建的实体。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * @example createOldHorse.ts
     * ```typescript
     * // Spawns an adult horse
     * import { DimensionLocation } from '@minecraft/server';
     *
     * function spawnAdultHorse(location: DimensionLocation) {
     *     // Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult
     *     location.dimension.spawnEntity('minecraft:horse<minecraft:ageable_grow_up>', location);
     * }
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
     */
    spawnEntity(identifier: string, location: Vector3, options?: SpawnEntityOptions): Entity;
    /**
     * @remarks
     * Creates a new item stack as an entity at the specified
     * location.
     * 
     * 在指定位置将新的物品堆栈作为实体创建。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param location
     * The location at which to create the item stack.
     * 
     * 创建物品堆栈的位置。
     * @returns
     * Newly created item stack entity at the specified location.
     * 
     * 在指定位置新创建的物品堆栈实体。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnFeatherItem.ts
     * ```typescript
     * // Spawns a feather at a location
     * import { ItemStack, DimensionLocation } from '@minecraft/server';
     * import { MinecraftItemTypes } from '@minecraft/vanilla-data';
     *
     * function spawnFeather(location: DimensionLocation) {
     *     const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);
     *     location.dimension.spawnItem(featherItem, location);
     * }
     * ```
     */
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    /**
     * @remarks
     * Creates a new particle emitter at a specified location in
     * the world.
     * 
     * 在世界的指定位置创建新的粒子发射器。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
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
     * 一组可选的、可定制的变量，可以根据此粒子进行调整。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link LocationInUnloadedChunkError}
     * 
     * {@link LocationOutOfWorldBoundariesError}
     * @example spawnParticle.ts
     * ```typescript
     * // A function that spawns a particle at a random location near the target location for all players in the server
     * import { world, MolangVariableMap, DimensionLocation, Vector3 } from '@minecraft/server';
     *
     * function spawnConfetti(location: DimensionLocation) {
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
     *             x: location.x + Math.floor(Math.random() * 8) - 4,
     *             y: location.y + Math.floor(Math.random() * 8) - 4,
     *             z: location.z + Math.floor(Math.random() * 8) - 4,
     *         };
     *         location.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
     *     }
     * }
     * ```
     */
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
}