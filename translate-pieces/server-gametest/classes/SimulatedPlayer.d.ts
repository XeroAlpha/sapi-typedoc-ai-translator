/* IMPORT */ import { LookDuration, MoveToOptions, NavigationResult, minecraftserver } from '../index';

/**
 * A simulated player can be used within GameTests to represent
 * how a player moves throughout the world and to support
 * testing of how entities and the environment will react to a
 * player. This type derives much of its structure and methods
 * from the {@link @minecraft/server.Player} type. Note that
 * many types of events that may be available for entities more
 * broadly, such as item use events, may not fire in the same
 * capacity for simulated players.
 * 
 * 模拟玩家可用于 GameTests 中来模拟玩家在世界中的移动方式，
 * 并支持测试实体和环境对玩家的反应。此类主要继承自
 * {@link @minecraft/server.Player} 类型。需要注意的是，许多可能对更广泛的实体
 * 可用的事件类型，如物品使用事件，在模拟玩家身上可能不会以同样的方式触发。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class SimulatedPlayer extends minecraftserver.Player {
    private constructor();
    /**
     * @remarks
     * Rotation of the head across pitch and yaw angles.
     * 
     * 头部在俯仰角和偏航角上的旋转。
     * 
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly headRotation: minecraftserver.Vector2;
    /**
     * @remarks
     * Returns whether the simulated player is sprinting.
     * 
     * 返回模拟玩家是否正在冲刺。
     * 
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    isSprinting: boolean;
    /**
     * @remarks
     * Causes the simulated player to make an attack 'swipe'.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. Target
     * selection is performed by raycasting from the player's head.
     * 
     * 让模拟玩家进行攻击“挥击”。如果执行了攻击则返回 true —— 例如，玩家不在冷却状态并且有有效的目标。
     * 目标选择通过从玩家头部进行射线检测来完成。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    attack(): boolean;
    /**
     * @remarks
     * Causes the simulated player to attack the provided target.
     * Returns true if the attack was performed - for example, the
     * player was not on cooldown and had a valid target. The
     * attack can be performed at any distance and does not require
     * line of sight to the target entity.
     * 
     * 让模拟玩家攻击提供的目标。如果执行了攻击则返回 true —— 例如，玩家不在冷却状态并且有有效的目标。
     * 攻击可以在任何距离下执行，并且不需要与目标实体保持视线接触。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    attackEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks
     * Destroys the block at blockLocation, respecting the rules of
     * the server player's game mode. The block will be hit until
     * broken, an item is used or stopBreakingBlock is called.
     * Returns true if the block at blockLocation is solid.
     * 
     * 销毁位于 blockLocation 的方块，遵循服务器玩家游戏模式的规则。方块将被持续击打直到破碎，使用了物品或调用了 stopBreakingBlock 函数。
     * 如果 blockLocation 处的方块是实心的则返回 true。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param blockLocation
     * Location of the block to interact with.
     * 
     * 要交互的方块的位置。
     * @param direction
     * Direction to place the specified item within.
     * 
     * 指定物品放置的方向。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    breakBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    chat(message: string): void;
    /**
     * @remarks
     * Simulates and performs a disconnection of the simulated
     * player from the world.
     * 
     * 模拟并执行模拟玩家从世界的断开连接。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    disconnect(): void;
    /**
     * @remarks
     * Drops the simulated player's selected item
     * 
     * 抛弃模拟玩家所选的物品
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    dropSelectedItem(): boolean;
    /**
     * @remarks
     * Causes the simulated player to start flying as though they
     * were flying in creative mode. For flying with Elytra, see
     * function glide.
     * 
     * 让模拟玩家像在创造模式下一样开始飞行。对于使用鞘翅飞行，请参阅 glide 函数。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    fly(): void;
    /**
     * @remarks
     * Gives the simulated player a particular item stack.
     * 
     * 给模拟玩家一个特定的物品堆叠。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param itemStack
     * Item to give.
     * 
     * 要给予的物品。
     * @param selectSlot
     * Whether to set the selected slot once given.
     * 
     * 是否在给予后设置选定的槽位。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    giveItem(itemStack: minecraftserver.ItemStack, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * Causes the simulated player to start gliding. Elytra must be
     * equipped and the player must be in the air.
     * 
     * 让模拟玩家开始滑翔。必须装备鞘翅，且玩家必须在空中。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @returns
     * Returns true if the simulated player begins to glide.
     * Returns false if the player is already gliding, or the
     * player does not have Elytra equipped, is in water or is on
     * the ground.
     * 
     * 如果模拟玩家开始滑翔则返回 true。如果玩家已经在滑翔，或者玩家没有装备鞘翅、在水中或在地面上，则返回 false。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    glide(): boolean;
    /**
     * @remarks
     * Performs a raycast from the player’s head and interacts with
     * the first intersected block or entity. Returns true if the
     * interaction was successful. Maximum range is 6 blocks.
     * 
     * 从玩家的头部进行射线检测并与第一个相交的方块或实体进行交互。如果交互成功则返回 true。最大范围是 6 格。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    interact(): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a block. The
     * block at the specified block location must be solid. Returns
     * true if the interaction was performed.
     * 
     * 让模拟玩家与一个方块进行交互。指定位置的方块必须是实心的。如果执行了交互则返回 true。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param blockLocation
     * Location of the block to interact with.
     * 
     * 要交互的方块的位置。
     * @param direction
     * Direction to place the specified item within.
     * 
     * 指定物品放置的方向。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    interactWithBlock(blockLocation: minecraftserver.Vector3, direction?: minecraftserver.Direction): boolean;
    /**
     * @remarks
     * Causes the simulated player to interact with a mob. Returns
     * true if the interaction was performed.
     * 
     * 让模拟玩家与一个生物进行交互。如果执行了交互则返回 true。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param entity
     * Entity to interact with.
     * 
     * 要交互的实体。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    interactWithEntity(entity: minecraftserver.Entity): boolean;
    /**
     * @remarks
     * Causes the simulated player to jump.
     * 
     * 让模拟玩家跳跃。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @returns
     * True if a jump was performed.
     * 
     * 如果执行了跳跃则返回 true。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    jump(): boolean;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given block location.
     * 
     * 使模拟玩家的头部/身体旋转以看向给定的方块位置。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    lookAtBlock(blockLocation: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given entity.
     * 
     * 使模拟玩家的头部/身体旋转以看向给定的实体。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    lookAtEntity(entity: minecraftserver.Entity, duration?: LookDuration): void;
    /**
     * @remarks
     * Rotates the simulated player's head/body to look at the
     * given location.
     * 
     * 使模拟玩家的头部/身体旋转以看向给定的位置。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    lookAtLocation(location: minecraftserver.Vector3, duration?: LookDuration): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the GameTest.
     * 
     * 指令模拟玩家相对于 GameTest 在给定的方向行走。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    move(westEast: number, northSouth: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to walk in the given direction
     * relative to the player's current rotation.
     * 
     * 指令模拟玩家根据当前朝向在给定的方向行走。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    moveRelative(leftRight: number, backwardForward: number, speed?: number): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given block
     * location in a straight line. If a move or navigation is
     * already playing, this will override the last
     * move/navigation.
     * 
     * 指令模拟玩家直线移动到给定的方块位置。如果已有移动或导航正在进行，这将覆盖最后一次的移动/导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    moveToBlock(blockLocation: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * Orders the simulated player to move to the given location in
     * a straight line. If a move or navigation is already playing,
     * this will override the last move/navigation.
     * 
     * 指令模拟玩家直线移动到给定的位置。如果已有移动或导航正在进行，这将覆盖最后一次的移动/导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    moveToLocation(location: minecraftserver.Vector3, options?: MoveToOptions): void;
    /**
     * @remarks
     * Orders the simulated player to move to a specific block
     * location using navigation. If a move or navigation is
     * already playing, this will override the last move/walk. Note
     * that if the simulated player gets stuck, that simulated
     * player will stop. The player must be touching the ground in
     * order to start navigation.
     * 
     * 指令模拟玩家使用导航移动到特定的方块位置。如果已有移动或导航正在进行，这将覆盖最后一次的移动/行走。注意，如果模拟玩家卡住，那模拟玩家将会停止。
     * 玩家必须接触地面才能开始导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    navigateToBlock(blockLocation: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * Will use navigation to follow the selected entity to within
     * a one block radius. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * 
     * 将使用导航跟随选定的实体至一格范围内。如果已有移动或导航正在进行，这将覆盖最后一次的移动/导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    navigateToEntity(entity: minecraftserver.Entity, speed?: number): NavigationResult;
    /**
     * @remarks
     * Orders the simulated player to move to a specific location
     * using navigation. If a move or navigation is already
     * playing, this will override the last move/walk. Note that if
     * the simulated player gets stuck, that simulated player will
     * stop. The player must be touching the ground in order to
     * start navigation.
     * 
     * 指令模拟玩家使用导航移动到特定的位置。如果已有移动或导航正在进行，这将覆盖最后一次的移动/行走。注意，如果模拟玩家卡住，那模拟玩家将会停止。
     * 玩家必须接触地面才能开始导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    navigateToLocation(location: minecraftserver.Vector3, speed?: number): NavigationResult;
    /**
     * @remarks
     * Use navigation to follow the route provided via the
     * locations parameter. If a move or navigation is already
     * playing, this will override the last move/navigation.
     * 
     * 使用导航跟随通过 locations 参数提供的路线。如果已有移动或导航正在进行，这将覆盖最后一次的移动/导航。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param locations
     * A list of locations to use for routing.
     * 
     * 用于路径规划的一系列位置列表。
     * @param speed
     * Net speed to use for doing the navigation.
     * 
     * 导航使用的净速度。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    navigateToLocations(locations: minecraftserver.Vector3[], speed?: number): void;
    /**
     * @remarks
     * Respawns the particular simulated player.
     * 
     * 重生特定的模拟玩家。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    respawn(): boolean;
    /**
     * @remarks
     * Causes the simulated player to turn by the provided angle,
     * relative to the player's current rotation.
     * 
     * 让模拟玩家相对于当前朝向旋转所提供的角度。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    rotateBody(angleInDegrees: number): void;
    /**
     * @remarks
     * Causes the simulated player to turn to face the provided
     * angle, relative to the GameTest.
     * 
     * 让模拟玩家转向面对相对于 GameTest 的所提供角度。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setBodyRotation(angleInDegrees: number): void;
    /**
     * @remarks
     * Sets a particular item for the simulated player.
     * 
     * 为模拟玩家设置一个特定的物品。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param itemStack
     * Item to set.
     * 
     * 要设置的物品。
     * @param slot
     * Slot to place the given item in.
     * 
     * 放置指定物品的槽位。
     * @param selectSlot
     * Whether to set the selected slot once set.
     * 
     * 设置后是否设置选定的槽位。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setItem(itemStack: minecraftserver.ItemStack, slot: number, selectSlot?: boolean): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    startBuild(slot?: number): void;
    /**
     * @remarks
     * Stops destroying the block that is currently being hit.
     * 
     * 停止破坏当前正在击打的方块。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopBreakingBlock(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopBuild(): void;
    /**
     * @remarks
     * Causes the simulated player to stop flying.
     * 
     * 让模拟玩家停止飞行。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopFlying(): void;
    /**
     * @remarks
     * Causes the simulated player to stop gliding.
     * 
     * 让模拟玩家停止滑翔。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopGliding(): void;
    /**
     * @remarks
     * Stops interacting with entities or blocks.
     * 
     * 停止与实体或方块交互。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopInteracting(): void;
    /**
     * @remarks
     * Stops moving/walking/following if the simulated player is
     * moving.
     * 
     * 如果模拟玩家正在移动，停止移动/行走/跟随。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopMoving(): void;
    /**
     * @remarks
     * Causes the simulated player to stop swimming.
     * 
     * 让模拟玩家停止游泳。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopSwimming(): void;
    /**
     * @remarks
     * Stops using the currently active item.
     * 
     * 停止使用当前活动的物品。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @returns
     * Returns the item that was in use. Undefined if no item was
     * in use.
     * 
     * 返回正在使用的物品。如果没有物品在使用中则返回未定义。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    stopUsingItem(): minecraftserver.ItemStack | undefined;
    /**
     * @remarks
     * Causes the simulated player to start swimming.
     * 
     * 让模拟玩家开始游泳。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    swim(): void;
    /**
     * @remarks
     * Causes the simulated player to use an item. Does not consume
     * the item. Returns false if the item is on cooldown.
     * 
     * 让模拟玩家使用一个物品。不会消耗物品。如果物品处于冷却状态则返回 false。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param itemStack
     * Item to use.
     * 
     * 要使用的物品。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    useItem(itemStack: minecraftserver.ItemStack): boolean;
    /**
     * @remarks
     * Causes the simulated player to hold and use an item in their
     * inventory.
     * 
     * 让模拟玩家持握并使用其物品栏中的物品。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param slot
     * Index of the inventory slot.
     * 
     * 物品栏槽位的索引。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    useItemInSlot(slot: number): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item in their
     * inventory on a block. The block at the specified block
     * location must be solid. Returns true if the item was used.
     * 
     * 让模拟玩家在其物品栏中使用一个物品在一个方块上。指定位置的方块必须是实心的。如果使用了物品则返回 true。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param slot
     * Index of the slot to use.
     * 
     * 要使用的槽位的索引。
     * @param blockLocation
     * Location to use the item upon.
     * 
     * 使用物品的位置。
     * @param direction
     * Direction to place the specified item within.
     * 
     * 指定物品放置的方向。
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * 
     * 物品放置的方块的底部西北角的相对位置。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    useItemInSlotOnBlock(
        slot: number,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
    /**
     * @remarks
     * Causes the simulated player to use an item on a block. The
     * block at the specified block location must be solid. Returns
     * true if the item was used.
     * 
     * 让模拟玩家在一个方块上使用物品。指定位置的方块必须是实心的。如果使用了物品则返回 true。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     * 
     * @param itemStack
     * Item to use.
     * 
     * 要使用的物品。
     * @param blockLocation
     * Location to use the item upon.
     * 
     * 使用物品的位置。
     * @param direction
     * Direction to place the specified item within.
     * 
     * 指定物品放置的方向。
     * @param faceLocation
     * Location relative to the bottom north-west corner of the
     * block where the item is placed.
     * 
     * 物品放置的方块的底部西北角的相对位置。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    useItemOnBlock(
        itemStack: minecraftserver.ItemStack,
        blockLocation: minecraftserver.Vector3,
        direction?: minecraftserver.Direction,
        faceLocation?: minecraftserver.Vector3,
    ): boolean;
}