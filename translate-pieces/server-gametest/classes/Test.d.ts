/* IMPORT */ import { FenceConnectivity, GameTestError, GameTestSequence, SculkSpreader, SimulatedPlayer, minecraftserver } from '../index';

/**
 * Main class for GameTest functions, with helpers and data for
 * manipulating the respective test. Note that all methods of
 * this class expect BlockLocations and Locations relative to
 * the GameTest structure block.
 * 
 * GameTest的主要类，包含用于操纵相应测试的帮助器和数据。请注意，此类的所有方法都期望提供相对于GameTest结构方块的BlockLocation和Location。
 */
export class Test {
    private constructor();
    /**
     * @remarks
     * Tests that the condition specified in _condition_ is true.
     * If not, an error with the specified _message_ is thrown.
     * 
     * 检查_condition_指定的条件是否为真。如果不是，则抛出带有指定_message_的错误。
     *
     * @param condition
     * Expression of the condition to evaluate.
     * 
     * 要评估的条件表达式。
     * @param message
     * Message that is passed if the _condition_ does not evaluate
     * to true.
     * 
     * 如果_condition_不为真时传递的消息。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assert(condition: boolean, message: string): void;
    /**
     * @remarks
     * Tests that a block of the specified type is present at the
     * specified location. If it is not, an exception is thrown.
     * 
     * 检查指定类型的方块是否存在于指定位置。如果不存在，则抛出异常。
     *
     * @param blockType
     * Expected block type.
     * 
     * 预期的方块类型。
     * @param blockLocation
     * Location of the block to test at.
     * 
     * 要检查的方块的位置。
     * @param isPresent
     * If true, this function tests whether a block of the
     * specified type is at the location. If false, tests that a
     * block of the specified type is not present.
     * 
     * 如果为true，此函数会检查指定类型的方块是否位于该位置。如果为false，会检查指定类型的方块不在该位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that a block has a particular state value at the
     * specified location. If it does not have that state value, an
     * exception is thrown.
     * 
     * 检查指定位置的方块具有特定的状态值。如果没有该状态值，则抛出异常。
     *
     * @param blockLocation
     * Location of the block to test at.
     * 
     * 要检查的方块的位置。
     * @param callback
     * Callback function that contains additional tests based on
     * the block at the specified location.
     * 
     * 回调函数，其中包含基于指定位置的方块的附加测试。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example testIfButtonNotPressed.js
     * ```typescript
     * test.assertBlockState(buttonPos, (block) => {
     *   return block.permutation.getProperty("button_pressed_bit") == 0;
     * });
     * ```
     */
    assertBlockState(blockLocation: minecraftserver.Vector3, callback: (arg: minecraftserver.Block) => boolean): void;
    /**
     * @remarks
     * Tests that an entity can reach a particular location.
     * Depending on the value of canReach, throws an exception if
     * the condition is not met.
     * 
     * 检查实体能否到达特定位置。根据canReach的值，如果条件未满足则抛出异常。
     *
     * @param mob
     * Entity that you wish to test the location against.
     * 
     * 您希望测试其位置的实体。
     * @param blockLocation
     * Structure-relative location to test whether the specified
     * mob can reach.
     * 
     * 相对于结构体的位置，用于测试指定实体是否可以到达。
     * @param canReach
     * If true, tests whether the mob can reach the location. If
     * false, tests whether the mob is not able to reach the
     * location.
     * 
     * 如果为true，检查实体是否可以到达位置。如果为false，检查实体无法到达位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertCanReachLocation(
        mob: minecraftserver.Entity,
        blockLocation: minecraftserver.Vector3,
        canReach?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location contains a specified of item stack. If not, an
     * error is thrown.
     * 
     * 检查指定位置的容器（如箱子）是否包含特定的物品堆叠。如果不是，则抛出错误。
     *
     * @param itemStack
     * Represents the type of item to check for. The specified
     * container must contain at least 1 item matching the item
     * type defined in _itemStack_.
     * 
     * 表示要检查的物品类型。指定的容器必须至少包含1个与_itemStack_中定义的物品类型相匹配的物品。
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test the contents of.
     * 
     * 包含容器（例如，箱子）的方块的位置，用于测试其内容。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertContainerContains(itemStack: minecraftserver.ItemStack, blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Tests that a container (e.g., a chest) at the specified
     * location is empty. If not, an error is thrown.
     * 
     * 检查指定位置的容器（如箱子）是否为空。如果不是，则抛出错误。
     *
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest) to test is empty of contents.
     * 
     * 包含容器（例如，箱子）的方块的位置，用于测试其是否为空。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertContainerEmpty(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Tests that an entity has a specific piece of armor equipped.
     * If not, an error is thrown.
     * 
     * 检查实体是否装备了特定的护甲。如果不是，则抛出错误。
     *
     * @param entityTypeIdentifier
     * Identifier of the entity to match (e.g.,
     * 'minecraft:skeleton').
     * 
     * 要匹配的实体的标识符（例如，“minecraft:skeleton”）。
     * @param armorSlot
     * Container slot index to test.
     * 
     * 要测试的容器插槽索引。
     * @param armorName
     * Name of the armor to look for.
     * 
     * 要查找的护甲名称。
     * @param armorData
     * Data value integer to look for.
     * 
     * 要查找的数据值整数。
     * @param blockLocation
     * Location of the entity with armor to test for.
     * 
     * 具有护甲的实体的位置。
     * @param hasArmor
     * Whether or not the entity is expected to have the specified
     * armor equipped.
     * 
     * 实体是否预期装备有指定的护甲。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example horseArmorTest.js
     * ```typescript
     * test.assertEntityHasArmor("minecraft:horse", armorSlotTorso, "diamond_horse_armor", 0, horseLocation, true);
     * ```
     */
    assertEntityHasArmor(
        entityTypeIdentifier: string,
        armorSlot: number,
        armorName: string,
        armorData: number,
        blockLocation: minecraftserver.Vector3,
        hasArmor?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity has a particular component. If not, an
     * exception is thrown.
     * 
     * 检查实体是否具有特定组件。如果不是，则抛出异常。
     *
     * @param entityTypeIdentifier
     * Identifier of the specified entity (e.g.,
     * 'minecraft:skeleton'). If the namespace is not specified,
     * 'minecraft:' is assumed.
     * 
     * 指定实体的标识符（例如，“minecraft:skeleton”）。如果未指定命名空间，则假设为“minecraft:”。
     * @param componentIdentifier
     * Identifier of the component to check for. If the namespace
     * is not specified, 'minecraft:' is assumed.
     * 
     * 要检查的组件的标识符。如果未指定命名空间，则假设为“minecraft:”。
     * @param blockLocation
     * Location of the block with a container (for example, a
     * chest.)
     * 
     * 包含容器（例如，箱子）的方块的位置。
     * @param hasComponent
     * Determines whether to test that the component exists, or
     * does not.
     * 
     * 确定是要测试组件是否存在还是不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example sheepShearedTest.js
     * ```typescript
     * test.assertEntityHasComponent("minecraft:sheep", "minecraft:is_sheared", entityLoc, false);
     * ```
     */
    assertEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent?: boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value for isPresent, tests that a
     * particular entity is present or not present at the specified
     * location. Depending on the value of isPresent, if the entity
     * is found or not found, an error is thrown.
     * 
     * 根据isPresent的值，检查特定实体是否存在于指定位置或不在该位置。根据isPresent的值，如果找到实体或未找到实体，则抛出错误。
     *
     * @param entity
     * Specific entity to test for.
     * 
     * 要测试的具体实体。
     * @param blockLocation
     * Location of the entity to test for.
     * 
     * 要测试的实体的位置。
     * @param isPresent
     * Whether to test that an entity is present or not present at
     * the specified location.
     * 
     * 是否测试实体在指定位置存在或不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertEntityInstancePresent(
        entity: minecraftserver.Entity,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity instance is present within the GameTest
     * area. If not, an exception is thrown.
     * 
     * 检查实体实例是否存在于GameTest区域内。如果不是，则抛出异常。
     *
     * @param entity
     * Entity instance to test for.
     * 
     * 要测试的实体实例。
     * @param isPresent
     * If true, this function tests whether the specified entity is
     * present in the GameTest area. If false, tests that the
     * specified entity is not present.
     * 
     * 如果为true，此函数会检查指定的实体是否存在于GameTest区域内。如果为false，会检查指定的实体不在GameTest区域内。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example simpleMobTest.ts
     * ```typescript
     * import * as gameTest from '@minecraft/server-gametest';
     *
     * gameTest
     *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
     *         const attackerId = 'fox';
     *         const victimId = 'chicken';
     *
     *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
     *         const victim = test.spawn(victimId, { x: 2, y: 2, z: 2 });
     *
     *         test.assertEntityInstancePresentInArea(victim, true);
     *
     *         test.succeedWhen(() => {
     *             test.assertEntityInstancePresentInArea(victim, false);
     *         });
     *     })
     *     .maxTicks(400)
     *     .structureName('gametests:mediumglass');
     * ```
     */
    assertEntityInstancePresentInArea(entity: minecraftserver.Entity, isPresent?: boolean): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * or non-presence of entity of a specified type at a
     * particular location. If the condition is not met, an
     * exception is thrown.
     * 
     * 根据isPresent的值，检查特定类型实体的存在与否。如果条件未满足，则抛出异常。
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * 
     * 要测试的实体类型（例如，“minecraft:skeleton”）。如果未指定实体命名空间，则假设为“minecraft:”。
     * @param blockLocation
     * Location of the entity to test for.
     * 
     * 要测试的实体的位置。
     * @param searchDistance
     * The distance to search for the entity from the
     * blockLocation.
     * 
     * 从blockLocation搜索实体的距离。
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present. If false, tests that an entity of
     * the specified type is not present.
     * 
     * 如果为true，此函数会检查指定类型的实体是否存在。如果为false，会检查指定类型的实体不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that an entity of a specified type is present within
     * the GameTest area. If not, an exception is thrown.
     * 
     * 检查指定类型的实体是否存在于GameTest区域内。如果不是，则抛出异常。
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * 
     * 要测试的实体类型（例如，“minecraft:skeleton”）。如果未指定实体命名空间，则假设为“minecraft:”。
     * @param isPresent
     * If true, this function tests whether an entity of the
     * specified type is present in the GameTest area. If false,
     * tests that an entity of the specified type is not present.
     * 
     * 如果为true，此函数会检查指定类型的实体是否存在于GameTest区域内。如果为false，会检查指定类型的实体不在GameTest区域内。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example simpleMobTest.ts
     * ```typescript
     * import * as gameTest from '@minecraft/server-gametest';
     *
     * gameTest
     *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
     *         const attackerId = 'fox';
     *         const victimId = 'chicken';
     *
     *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
     *         test.spawn(victimId, { x: 2, y: 2, z: 2 });
     *
     *         test.assertEntityPresentInArea(victimId, true);
     *
     *         test.succeedWhen(() => {
     *             test.assertEntityPresentInArea(victimId, false);
     *         });
     *     })
     *     .maxTicks(400)
     *     .structureName('gametests:mediumglass');
     * ```
     */
    assertEntityPresentInArea(entityTypeIdentifier: string, isPresent?: boolean): void;
    /**
     * @remarks
     * Tests that an entity (e.g., a skeleton) at the specified
     * location has a particular piece of data. If not, an error is
     * thrown.
     * 
     * 检查指定位置的实体（例如，骷髅）具有特定的数据。如果不是，则抛出错误。
     *
     * @param blockLocation
     * Location of the entity to look for.
     * 
     * 要查找的实体的位置。
     * @param entityTypeIdentifier
     * Identifier of the entity (e.g., 'minecraft:skeleton') to
     * look for. Note if no namespace is specified, 'minecraft:' is
     * assumed.
     * 
     * 要查找的实体的标识符（例如，“minecraft:skeleton”）。注意，如果未指定命名空间，则假设为“minecraft:”。
     * @param callback
     * Callback function where facets of the selected entity can be
     * tested for. If this callback function returns false or no
     * entity with the specified identifier is found, an exception
     * is thrown.
     * 
     * 回调函数，在这里可以测试选定实体的各个方面。如果此回调函数返回false或未找到具有指定标识符的实体，则抛出异常。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example villagerEffectTest.js
     * ```typescript
     * test.assertEntityState(
     *   villagerPos,
     *   "minecraft:villager_v2",
     *   (entity) => entity.getEffect(MinecraftEffectTypes.Regeneration).duration > 120
     * ); // At least 6 seconds remaining in the villagers' effect
     * ```
     */
    assertEntityState(
        blockLocation: minecraftserver.Vector3,
        entityTypeIdentifier: string,
        callback: (arg: minecraftserver.Entity) => boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value of isTouching, tests that an entity
     * of a specified type is touching or connected to another
     * entity. If the condition is not met, an exception is thrown.
     * 
     * 根据isTouching的值，检查指定类型的实体是否接触或连接到另一个实体。如果条件未满足，则抛出异常。
     *
     * @param entityTypeIdentifier
     * Type of entity to test for (e.g., 'minecraft:skeleton'). If
     * an entity namespace is not specified, 'minecraft:' is
     * assumed.
     * 
     * 要测试的实体类型（例如，“minecraft:skeleton”）。如果未指定实体命名空间，则假设为“minecraft:”。
     * @param location
     * Location of the entity to test for.
     * 
     * 要测试的实体的位置。
     * @param isTouching
     * If true, this function tests whether the entity is touching
     * the specified location. If false, tests that an entity is
     * not testing the specified location.
     * 
     * 如果为true，此函数会检查实体是否接触指定位置。如果为false，会检查实体没有接触指定位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertEntityTouching(entityTypeIdentifier: string, location: minecraftserver.Vector3, isTouching?: boolean): void;
    /**
     * @remarks
     * Depending on the value of isWaterlogged, tests that a block
     * at a location contains water. If the condition is not met,
     * an error is thrown. Pure water blocks are not considered to
     * be waterlogged.
     * 
     * 根据isWaterlogged的值，检查指定位置的方块是否含有水。如果条件未满足，则抛出错误。纯水方块不被认为是水饱和的。
     *
     * @param blockLocation
     * Location of the block to test for.
     * 
     * 要测试的方块的位置。
     * @param isWaterlogged
     * Whether to test that the block at _position_ is expected to
     * be waterlogged.
     * 
     * 是否测试_position_处的方块预期是水饱和的。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertIsWaterlogged(blockLocation: minecraftserver.Vector3, isWaterlogged?: boolean): void;
    /**
     * @remarks
     * Tests that items of a particular type and count are present
     * within an area. If not, an error is thrown.
     * 
     * 检查特定类型和数量的物品是否存在于区域内。如果不是，则抛出错误。
     *
     * @param itemType
     * Type of item to look for.
     * 
     * 要查找的物品类型。
     * @param blockLocation
     * Location to search around for the specified set of items.
     * 
     * 搜索指定物品集周围的地点。
     * @param searchDistance
     * Range, in blocks, to aggregate a count of items around. If
     * 0, will only search the particular block at _position_.
     * 
     * 在方块范围内汇总物品计数的范围。如果为0，则仅搜索_position_处的特定方块。
     * @param count
     * Number of items, at minimum, to look and test for.
     * 
     * 至少要查找和测试的物品数量。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example findFeathers.js
     * ```typescript
     * test.assertItemEntityCountIs(Items.feather, expectedFeatherLoc, 0, 1);
     * ```
     */
    assertItemEntityCountIs(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance: number,
        count: number,
    ): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests whether a
     * particular item entity is present or not at a particular
     * location. If the condition is not met, an exception is
     * thrown.
     * 
     * 根据isPresent的值，检查特定物品实体是否存在于特定位置。如果条件未满足，则抛出异常。
     *
     * @param itemType
     * Type of item to test for.
     * 
     * 要测试的物品类型。
     * @param blockLocation
     * Location of the item entity to test for.
     * 
     * 要测试的物品实体的位置。
     * @param searchDistance
     * Radius in blocks to look for the item entity.
     * 
     * 查找物品实体的方块半径。
     * @param isPresent
     * If true, this function tests whether an item entity of the
     * specified type is present. If false, tests that an item
     * entity of the specified type is not present.
     * 
     * 如果为true，此函数会检查指定类型的物品实体是否存在。如果为false，会检查指定类型的物品实体不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertItemEntityPresent(
        itemType: minecraftserver.ItemType | string,
        blockLocation: minecraftserver.Vector3,
        searchDistance?: number,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests that Redstone power at a particular location matches a
     * particular value. If not, an exception is thrown.
     * 
     * 检查特定位置的红石能量是否等于特定值。如果不是，则抛出异常。
     *
     * @param blockLocation
     * Location to test.
     * 
     * 要测试的位置。
     * @param power
     * Expected power level.
     * 
     * 预期的能量等级。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    assertRedstonePower(blockLocation: minecraftserver.Vector3, power: number): void;
    /**
     * @remarks
     * Destroys a block at a particular location.
     * 
     * 销毁特定位置的方块。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location of the block to destroy.
     * 
     * 要销毁的方块的位置。
     * @param dropResources
     * Whether to add resources exposed with a particular drop.
     * 
     * 是否添加特定掉落暴露的资源。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    destroyBlock(blockLocation: minecraftserver.Vector3, dropResources?: boolean): void;
    /**
     * @remarks
     * Marks the current test as a failure case.
     * 
     * 将当前测试标记为失败案例。
     *
     * @param errorMessage
     * Error message summarizing the failure condition.
     * 
     * 概述失败情况的错误消息。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    fail(errorMessage: string): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a failure.
     * 
     * 运行给定的回调。如果回调不抛出异常，则将测试标记为失败。
     *
     * @param callback
     * Callback function that runs. If the function runs
     * successfully, the test is marked as a failure. Typically,
     * this function will have .assertXyz method calls within it.
     * 
     * 运行的回调函数。如果函数成功运行，则将测试标记为失败。通常，此函数会在其中调用.assertXyz方法。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    failIf(callback: () => void): void;
    /**
     * @remarks
     * Gets a block at the specified block location.
     * 
     * 获取指定方块位置的方块。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location of the block to retrieve.
     * 
     * 要检索的方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    getBlock(blockLocation: minecraftserver.Vector3): minecraftserver.Block;
    /**
     * @remarks
     * Gets the dimension of this test.
     * 
     * 获取此测试的维度。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    getDimension(): minecraftserver.Dimension;
    /**
     * @remarks
     * If the block at the specified block location is a fence,
     * this returns a helper object with details on how a fence is
     * connected.
     * 
     * 如果指定方块位置的方块是围栏，则返回一个帮助对象，其中包含有关围栏如何连接的详细信息。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location of the block to retrieve.
     * 
     * 要检索的方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    getFenceConnectivity(blockLocation: minecraftserver.Vector3): FenceConnectivity;
    /**
     * @remarks
     * Retrieves a sculk spreader object that can be used to
     * control and manage how sculk grows from a block.
     * 
     * 获取可用于控制和管理sculk如何从方块生长的sculk传播器对象。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location of the block to retrieve a sculk spreader from.
     * 
     * 要从中获取sculk传播器的方块的位置。
     * @returns
     * Returns the SculkSpreader or undefined if no SculkSpreader
     * is present on the block.
     * 
     * 返回SculkSpreader或如果方块上没有SculkSpreader则返回undefined。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    getSculkSpreader(blockLocation: minecraftserver.Vector3): SculkSpreader | undefined;
    /**
     * @remarks
     * Returns the direction of the current test - see the {@link
     * @minecraft/server.Direction} enum for more information on
     * potential values (north, east, south, west - values 2-5).
     * 
     * 返回当前测试的方向 - 有关可能值（北、东、南、西 - 值2-5）的更多信息，请参阅{@link
     * @minecraft/server.Direction} 枚举。
     *
     */
    getTestDirection(): minecraftserver.Direction;
    /**
     * @remarks
     * This asynchronous function will wait for the specified time
     * in ticks before continuing execution.
     * 
     * 此异步函数将在继续执行前等待指定时间的刻数。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param tickDelay
     * Amount of time to wait, in ticks.
     * 
     * 要等待的时间，以刻为单位。
     */
    idle(tickDelay: number): Promise<void>;
    /**
     * @remarks
     * Kills all entities within the GameTest structure.
     * 
     * 杀死GameTest结构内的所有实体。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    killAllEntities(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    onPlayerJump(mob: minecraftserver.Entity, jumpAmount: number): void;
    /**
     * @remarks
     * Presses a button at a block location.
     * 
     * 按下方块位置的按钮。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location to push the button at.
     * 
     * 按钮的位置。
     * @throws
     * Will throw an error if a button is not present at the
     * specified position.
     *
     * 如果指定位置没有按钮，则会抛出错误。
     *
     * {@link GameTestError}
     */
    pressButton(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Displays the specified message to all players.
     * 
     * 向所有玩家显示指定的消息。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param text
     * Message to display.
     * 
     * 要显示的消息。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    print(text: string): void;
    /**
     * @remarks
     * Pulls a lever at a block location.
     * 
     * 拉动方块位置的拉杆。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location to pull the lever at.
     * 
     * 拉杆的位置。
     * @throws
     * Will throw an error if a lever is not present at the
     * specified position.
     *
     * 如果指定位置没有拉杆，则会抛出错误。
     *
     * {@link GameTestError}
     */
    pullLever(blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sends a Redstone pulse at a particular location by creating
     * a temporary Redstone block.
     * 
     * 通过创建临时红石方块在特定位置发送红石脉冲。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * Location to pulse Redstone at.
     * 
     * 发送红石脉冲的位置。
     * @param duration
     * Number of ticks to pulse Redstone.
     * 
     * 发送红石脉冲的刻数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    pulseRedstone(blockLocation: minecraftserver.Vector3, duration: number): void;
    /**
     * @remarks
     * From a BlockLocation, returns a new BlockLocation with
     * coordinates relative to the current GameTest structure
     * block. For example, the relative coordinates for the block
 * 以上方的结构方块为基准，从一个BlockLocation返回一个新的BlockLocation，其坐标相对于当前GameTest结构方块。例如，相对于结构方块上方的方块的相对坐标为(0, 1, 0)。同时也会考虑到GameTest结构的旋转。
     *
     * @param worldBlockLocation
     * 绝对世界坐标位置，需要转换为相对位置。
     * 
     * 需要转换为相对坐标的绝对世界坐标位置。
     * @returns
     * 一个相对于GameTest命令方块的位置。
     * 
     * 相对于GameTest命令方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    relativeBlockLocation(worldBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * From a location, returns a new location with coordinates
     * relative to the current GameTest structure block. For
     * example, the relative coordinates for the block above the
     * structure block are (0, 1, 0). Rotation of the GameTest
     * structure is also taken into account.
     * 
     * 从一个位置返回一个新的位置，其坐标相对于当前GameTest结构方块。例如，相对于结构方块上方的方块的相对坐标为(0, 1, 0)。同时也会考虑到GameTest结构的旋转。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param worldLocation
     * 绝对世界坐标位置，需要转换为相对位置。
     * 
     * 需要转换为相对坐标的绝对世界坐标位置。
     * @returns
     * 一个相对于GameTest命令方块的位置。
     * 
     * 相对于GameTest命令方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    relativeLocation(worldLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Removes a simulated player from the world.
     * 
     * 从世界中移除一个模拟玩家。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param simulatedPlayer
     * 要移除的模拟玩家。
     * 
     * 要移除的模拟玩家。
     */
    removeSimulatedPlayer(simulatedPlayer: SimulatedPlayer): void;
    /**
     * @remarks
     * Returns a relative direction given the current rotation of
     * the current test. Passing in Direction.south will return the
     * test direction; Passing in Direction.north will return the
     * opposite of the test direction, and so on.
     * 
     * 根据当前测试的当前旋转返回一个相对方向。传入Direction.south将会返回测试方向；传入Direction.north将会返回测试方向的相反方向，以此类推。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param direction
     * 要转换为相对于GameTest面向的方向的方向。传入Direction.south将会返回测试方向；传入Direction.north将会返回测试方向的相反方向，以此类推。
     * 
     * 要转换为相对于GameTest面向的方向的方向。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    rotateDirection(direction: minecraftserver.Direction): minecraftserver.Direction;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    rotateVector(vector: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Runs a specific callback after a specified delay of ticks
     * 
     * 在指定的刻数延迟后运行特定的回调。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param delayTicks
     * 运行指定回调前的延迟刻数。
     * 
     * 运行指定回调前的延迟刻数。
     * @param callback
     * 要执行的回调函数。
     * 
     * 要执行的回调函数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    runAfterDelay(delayTicks: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback after a delay of _tick_ ticks from
     * the start of the GameTest.
     * 
     * 在GameTest开始后的_tick_刻数延迟后运行给定的回调。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param tick
     * 从GameTest开始后运行回调的刻数。
     * 
     * 从GameTest开始后运行回调的刻数。
     * @param callback
     * 要执行的回调函数。
     * 
     * 要执行的回调函数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    runAtTickTime(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Sets a block to a particular configuration (a
     * BlockPermutation) at the specified block location.
     * 
     * 在指定的方块位置将方块设置为特定配置（BlockPermutation）。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockData
     * 包含方块配置数据的排列。
     * 
     * 包含方块配置数据的排列。
     * @param blockLocation
     * 要设置的方块的位置。
     * 
     * 要设置的方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    setBlockPermutation(blockData: minecraftserver.BlockPermutation, blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * Sets a block to a particular type at the specified block
     * location.
     * 
     * 在指定的方块位置将方块设置为特定类型。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockType
     * 要设置的方块类型。
     * 
     * 要设置的方块类型。
     * @param blockLocation
     * 要设置的方块的位置。
     * 
     * 要设置的方块的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    setBlockType(blockType: minecraftserver.BlockType | string, blockLocation: minecraftserver.Vector3): void;
    /**
     * @remarks
     * For blocks that are fluid containers - like a cauldron -
     * changes the type of fluid within that container.
     * 
     * 对于作为流体容器的方块 - 如炼药锅 - 改变容器内的流体类型。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param location
     * 流体容器方块的位置。
     * 
     * 流体容器方块的位置。
     * @param type
     * 要设置的流体类型。参见{@link
     * @minecraft/server.FluidType}获取值列表。
     * 
     * 要设置的流体类型。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    setFluidContainer(location: minecraftserver.Vector3, type: minecraftserver.FluidType): void;
    /**
     * @remarks
     * Sets the fuse of an explodable entity.
     * 
     * 设置可爆炸实体的引信。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param entity
     * 可爆炸的实体。
     * 
     * 可爆炸的实体。
     * @param fuseLength
     * 实体爆炸前的刻数。
     * 
     * 实体爆炸前的刻数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    setTntFuse(entity: minecraftserver.Entity, fuseLength: number): void;
    /**
     * @remarks
     * Spawns an entity at a location.
     * 
     * 在位置生成实体。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param entityTypeIdentifier
     * 要创建的实体类型。如果未提供命名空间，则假设为'minecraft:'。注意，可以在尖括号之间指定可选的初始生成事件（例如，namespace:entityType<spawnEvent>）。
     * 
     * 要创建的实体类型。
     * @returns
     * 生成的实体。如果无法生成实体，则返回undefined。
     * 
     * 生成的实体。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     * @example simpleMobTest.ts
     * ```typescript
     * import * as gameTest from '@minecraft/server-gametest';
     *
     * gameTest
     *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
     *         const attackerId = 'fox';
     *         const victimId = 'chicken';
     *
     *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
     *         test.spawn(victimId, { x: 2, y: 2, z: 2 });
     *
     *         test.assertEntityPresentInArea(victimId, true);
     *
     *         test.succeedWhen(() => {
     *             test.assertEntityPresentInArea(victimId, false);
     *         });
     *     })
     *     .maxTicks(400)
     *     .structureName('gametests:mediumglass');
     * ```
     * @example spawnAdultPig.js
     * ```typescript
     * test.spawn("minecraft:pig<minecraft:ageable_grow_up>", { x: 1, y: 2, z: 1 });
     *
     * ```
     */
    spawn(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks
     * Spawns an entity at a location.
     * 
     * 在位置生成实体。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param entityTypeIdentifier
     * 要创建的实体类型。如果未提供命名空间，则假设为'minecraft:'。注意，可以在尖括号之间指定可选的初始生成事件（例如，namespace:entityType<spawnEvent>）。
     * 
     * 要创建的实体类型。
     * @returns
     * 生成的实体。如果无法生成实体，则返回undefined。
     * 
     * 生成的实体。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     * @example spawnAdultPig.js
     * ```typescript
     * test.spawn("minecraft:pig<minecraft:ageable_grow_up>", { x: 1.5, y: 2, z: 1.5 });
     * ```
     */
    spawnAtLocation(entityTypeIdentifier: string, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks
     * Spawns an item entity at a specified location.
     * 
     * 在指定位置生成物品实体。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param itemStack
     * 描述要创建的物品实体的ItemStack。
     * 
     * 描述要创建的物品实体的ItemStack。
     * @param location
     * 创建物品实体的位置。
     * 
     * 创建物品实体的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     * @example spawnEmeralds.js
     * ```typescript
     * const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1, 0);
     * const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5, 0);
     *
     * test.spawnItem(oneEmerald, { x: 3.5, y: 3, z: 1.5 });
     * test.spawnItem(fiveEmeralds, { x: 1.5, y: 3, z: 1.5 });
     * ```
     */
    spawnItem(itemStack: minecraftserver.ItemStack, location: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks
     * Creates a new simulated player within the world.
     * 
     * 在世界中创建新的模拟玩家。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * 生成模拟玩家的位置。
     * 
     * 生成模拟玩家的位置。
     * @param name
     * 赋予新模拟玩家的名字。
     * 
     * 赋予新模拟玩家的名字。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    spawnSimulatedPlayer(
        blockLocation: minecraftserver.Vector3,
        name?: string,
        gameMode?: minecraftserver.GameMode,
    ): SimulatedPlayer;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     * 
     * 在位置生成没有AI行为的实体。此方法经常与.walkTo等方法结合使用，以创建可预测的生物行动。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * 实体应生成的位置。
     * 
     * 实体应生成的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    spawnWithoutBehaviors(entityTypeIdentifier: string, blockLocation: minecraftserver.Vector3): minecraftserver.Entity;
    /**
     * @remarks
     * Spawns an entity at a location without any AI behaviors.
     * This method is frequently used in conjunction with methods
     * like .walkTo to create predictable mob actions.
     * 
     * 在位置生成没有AI行为的实体。此方法经常与.walkTo等方法结合使用，以创建可预测的生物行动。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param location
     * 实体应生成的位置。
     * 
     * 实体应生成的位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    spawnWithoutBehaviorsAtLocation(
        entityTypeIdentifier: string,
        location: minecraftserver.Vector3,
    ): minecraftserver.Entity;
    /**
     * @remarks
     * Tests that a particular item entity is present at a
     * particular location. If not, an exception is thrown.
     * 
     * 检查特定位置是否存在特定的物品实体。如果没有，则抛出异常。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockLocation
     * 包含多面方块的BlockLocation。
     * 
     * 包含多面方块的BlockLocation。
     * @param fromFace
     * 要从其扩散的面。此面必须已经设置。
     * 
     * 要从其扩散的面。
     * @param direction
     * 使用Minecraft.Direction枚举来指定方向。
     * 
     * 扩散方向。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     * @example spreadFromFaceTowardDirection.js
     * ```typescript
     * test.spreadFromFaceTowardDirection({ x: 1, y: 2, z: 1 }, Direction.south, Direction.down);
     * ```
     */
    spreadFromFaceTowardDirection(
        blockLocation: minecraftserver.Vector3,
        fromFace: minecraftserver.Direction,
        direction: minecraftserver.Direction,
    ): void;
    /**
     * @remarks
     * Creates a new GameTestSequence - A set of steps that play
     * out sequentially within a GameTest.
     * 
     * 创建一个新的GameTestSequence - 在GameTest中顺序执行的一系列步骤。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @returns
     * 一个新的GameTestSequence，其中包含便于创建一系列步骤的链接方法。
     * 
     * 一个新的GameTestSequence。
     */
    startSequence(): GameTestSequence;
    /**
     * @remarks
     * Marks the current test as a success case.
     * 
     * 将当前测试标记为成功案例。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeed(): void;
    /**
     * @remarks
     * Runs the given callback. If the callback does not throw an
     * exception, the test is marked as a success.
     * 
     * 运行给定的回调。如果回调不抛出异常，则将测试标记为成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param callback
     * 运行的回调函数。如果函数成功运行，则将测试标记为成功。通常，此函数会在其中调用.assertXyz方法。
     * 
     * 运行的回调函数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeedIf(callback: () => void): void;
    /**
     * @remarks
     * Marks the test as a success at the specified tick.
     * 
     * 在指定的刻数将测试标记为成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param tick
     * 从GameTest开始后的刻数，将测试标记为成功。
     * 
     * 从GameTest开始后的刻数，将测试标记为成功。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeedOnTick(tick: number): void;
    /**
     * @remarks
     * Runs the given callback at _tick_ ticks after the start of
     * the test. If the callback does not throw an exception, the
     * test is marked as a failure.
     * 
     * 在测试开始后的_tick_刻数运行给定的回调。如果回调不抛出异常，则将测试标记为失败。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param tick
     * 从GameTest开始后运行测试回调的刻数。
     * 
     * 从GameTest开始后运行测试回调的刻数。
     * @param callback
     * 运行的回调函数。如果函数成功运行，则将测试标记为成功。
     * 
     * 运行的回调函数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeedOnTickWhen(tick: number, callback: () => void): void;
    /**
     * @remarks
     * Runs the given callback every tick. When the callback
     * successfully executes, the test is marked as a success.
     * Specifically, the test will succeed when the callback does
     * not throw an exception.
     * 
     * 每一刻运行给定的回调。当回调成功执行时，将测试标记为成功。具体而言，当回调不抛出异常时，测试将成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param callback
     * 运行的测试回调函数。如果函数成功运行，则将测试标记为成功。
     * 
     * 运行的测试回调函数。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     * @example simpleMobTest.ts
     * ```typescript
     * import * as gameTest from '@minecraft/server-gametest';
     *
     * gameTest
     *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
     *         const attackerId = 'fox';
     *         const victimId = 'chicken';
     *
     *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
     *         test.spawn(victimId, { x: 2, y: 2, z: 2 });
     *
     *         test.assertEntityPresentInArea(victimId, true);
     *
     *         test.succeedWhen(() => {
     *             test.assertEntityPresentInArea(victimId, false);
     *         });
     *     })
     *     .maxTicks(400)
     *     .structureName('gametests:mediumglass');
     * ```
     */
    succeedWhen(callback: () => void): void;
    /**
     * @remarks
     * Depending on the condition of isPresent, tests for the
     * presence of a block of a particular type on every tick. When
     * the specified block of a type is found or not found
     * (depending on isPresent), the test is marked as a success.
     * 
     * 根据isPresent的条件，每一刻检查特定类型的方块是否存在。当找到或未找到指定类型的方块（取决于isPresent）时，将测试标记为成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param blockType
     * 要测试的方块类型。
     * 
     * 要测试的方块类型。
     * @param blockLocation
     * 要测试的方块的位置。
     * 
     * 要测试的方块的位置。
     * @param isPresent
     * 如果为true，此函数检查指定类型的方块是否存在。如果为false，检查指定类型的方块不存在。
     * 
     * 如果为true，此函数检查指定类型的方块是否存在。如果为false，检查指定类型的方块不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    succeedWhenBlockPresent(
        blockType: minecraftserver.BlockType | string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Tests for the presence of a component on every tick.
     * Depending on the value of hasComponent, when the specified
     * component is found, the test is marked as a success.
     * 
     * 每一刻检查组件是否存在。根据hasComponent的值，当找到指定的组件时，将测试标记为成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param entityTypeIdentifier
     * 要查找的实体类型。如果未指定命名空间，则假设为'minecraft:'。
     * 
     * 要查找的实体类型。
     * @param componentIdentifier
     * 要测试存在的组件类型。如果未指定命名空间，则假设为'minecraft:'。
     * 
     * 要测试存在的组件类型。
     * @param blockLocation
     * 要测试的实体的方块位置。
     * 
     * 要测试的实体的方块位置。
     * @param hasComponent
     * 如果为true，此函数测试组件是否存在。如果为false，此函数测试组件不存在。
     * 
     * 如果为true，此函数测试组件是否存在。如果为false，此函数测试组件不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeedWhenEntityHasComponent(
        entityTypeIdentifier: string,
        componentIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        hasComponent: boolean,
    ): void;
    /**
     * @remarks
     * Depending on the value of isPresent, tests for the presence
     * of an entity on every tick. When an entity of the specified
     * type is found or not found (depending on isPresent), the
     * test is marked as a success.
     * 
     * 根据isPresent的值，每一刻检查实体是否存在。当找到或未找到指定类型的实体（取决于isPresent）时，将测试标记为成功。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param entityTypeIdentifier
     * 要测试的实体类型（例如，'minecraft:skeleton'）。如果实体命名空间未指定，则假设为'minecraft:'。
     * 
     * 要测试的实体类型。
     * @param blockLocation
     * 要测试的实体的位置。
     * 
     * 要测试的实体的位置。
     * @param isPresent
     * 如果为true，此函数检查指定类型的实体是否存在。如果为false，检查指定类型的实体不存在。
     * 
     * 如果为true，此函数检查指定类型的实体是否存在。如果为false，检查指定类型的实体不存在。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     */
    succeedWhenEntityPresent(
        entityTypeIdentifier: string,
        blockLocation: minecraftserver.Vector3,
        isPresent?: boolean,
    ): void;
    /**
     * @remarks
     * Triggers a block event from a fixed list of available block
     * events.
     * 
     * 从固定列表中触发方块事件。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param event
     * 要触发的事件。有效值包括minecraft:drip, minecraft:grow_stalagtite, minecraft:grow_stalagmite, minecraft:grow_up, minecraft:grow_down 和 minecraft:grow_sideways。
     * 
     * 要触发的事件。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    triggerInternalBlockEvent(blockLocation: minecraftserver.Vector3, event: string, eventParameters?: number[]): void;
    /**
     * @remarks
     * This asynchronous function will wait until the code in the
     * specified callback successfully completes. until can be used
     * in conjunction with .assert functions to evaluate that a
     * condition is true.
     * 
     * 此异步函数将等待直到指定回调中的代码成功完成。until可以与.assert函数结合使用，以评估条件为真。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param callback
     * 要评估的代码函数。
     * 
     * 要评估的代码函数。
     */
    until(callback: () => void): Promise<void>;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     * 
     * 强制生物走到特定位置。通常与.spawnWithoutBehaviors等方法结合使用，以获得更可预测的生物行为。生物一旦与目标位置相交，就会停止导航。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param mob
     * 要给予命令的生物实体。
     * 
     * 要给予命令的生物实体。
     * @param blockLocation
     * 实体应走至的位置。
     * 
     * 实体应走至的位置。
     * @param speedModifier
     * 生物行走速度的可调整修正值。
     * 
     * 生物行走速度的可调整修正值。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    walkTo(mob: minecraftserver.Entity, blockLocation: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @remarks
     * Forces a mob to walk to a particular location. Usually used
     * in conjunction with methods like .spawnWithoutBehaviors to
     * have more predictable mob behaviors. Mobs will stop
     * navigation as soon as they intersect the target location.
     * 
     * 强制生物走到特定位置。通常与.spawnWithoutBehaviors等方法结合使用，以获得更可预测的生物行为。生物一旦与目标位置相交，就会停止导航。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数不能在只读模式下调用。
     *
     * @param mob
     * 要给予命令的生物实体。
     * 
     * 要给予命令的生物实体。
     * @param location
     * 实体应走至的位置。
     * 
     * 实体应走至的位置。
     * @param speedModifier
     * 生物行走速度的可调整修正值。
     * 
     * 生物行走速度的可调整修正值。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link GameTestError}
     */
    walkToLocation(mob: minecraftserver.Entity, location: minecraftserver.Vector3, speedModifier?: number): void;
    /**
     * @remarks
     * From a BlockLocation with coordinates relative to the
     * GameTest structure block, returns a new BlockLocation with
     * coordinates relative to world. Rotation of the GameTest
     * structure is also taken into account.
     * 
     * 从相对于GameTest结构方块的坐标系的BlockLocation，返回一个相对于世界的坐标系的新BlockLocation。同时也会考虑到GameTest结构的旋转。
     *
     * @param relativeBlockLocation
     * 相对于GameTest命令方块的位置。
     * 
     * 相对于GameTest命令方块的位置。
     * @returns
     * 相对于GameTest命令方块的绝对位置。
     * 
     * 相对于GameTest命令方块的绝对位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    worldBlockLocation(relativeBlockLocation: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * From a location with coordinates relative to the GameTest
     * structure block, returns a new location with coordinates
     * relative to world. Rotation of the GameTest structure is
     * also taken into account.
     * 
     * 从相对于GameTest结构方块的坐标系的位置，返回一个相对于世界的坐标系的新位置。同时也会考虑到GameTest结构的旋转。
     *
     * @param relativeLocation
     * 相对于GameTest命令方块的位置。
     * 
     * 相对于GameTest命令方块的位置。
     * @returns
     * 相对于GameTest命令方块的绝对位置。
     * 
     * 相对于GameTest命令方块的绝对位置。
     * @throws This function can throw errors.
     *
     * 此函数可能会抛出错误。
     *
     * {@link minecraftserver.GameTestError}
     */
    worldLocation(relativeLocation: minecraftserver.Vector3): minecraftserver.Vector3;
}