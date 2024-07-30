/* IMPORT */ import { BlockExplodeAfterEventSignal, ButtonPushAfterEventSignal, ChatSendAfterEventSignal, DataDrivenEntityTriggerAfterEventSignal, EffectAddAfterEventSignal, EntityDieAfterEventSignal, EntityHealthChangedAfterEventSignal, EntityHitBlockAfterEventSignal, EntityHitEntityAfterEventSignal, EntityHurtAfterEventSignal, EntityLoadAfterEventSignal, EntityRemoveAfterEventSignal, EntitySpawnAfterEventSignal, ExplosionAfterEventSignal, GameRuleChangeAfterEventSignal, ItemCompleteUseAfterEventSignal, ItemReleaseUseAfterEventSignal, ItemStartUseAfterEventSignal, ItemStartUseOnAfterEventSignal, ItemStopUseAfterEventSignal, ItemStopUseOnAfterEventSignal, ItemUseAfterEventSignal, ItemUseOnAfterEventSignal, LeverActionAfterEventSignal, PistonActivateAfterEventSignal, PlayerBreakBlockAfterEventSignal, PlayerDimensionChangeAfterEventSignal, PlayerEmoteAfterEventSignal, PlayerGameModeChangeAfterEventSignal, PlayerInputPermissionCategoryChangeAfterEventSignal, PlayerInteractWithBlockAfterEventSignal, PlayerInteractWithEntityAfterEventSignal, PlayerJoinAfterEventSignal, PlayerLeaveAfterEventSignal, PlayerPlaceBlockAfterEventSignal, PlayerSpawnAfterEventSignal, PressurePlatePopAfterEventSignal, PressurePlatePushAfterEventSignal, ProjectileHitBlockAfterEventSignal, ProjectileHitEntityAfterEventSignal, ServerMessageAfterEventSignal, TargetBlockHitAfterEventSignal, TripWireTripAfterEventSignal, WeatherChangeAfterEventSignal, WorldInitializeAfterEventSignal } from '../index';

/**
 * Contains a set of events that are available across the scope
 * of the World.
 * 
 * 包含了整个世界范围内可用的一系列事件。
 */
export class WorldAfterEvents {
    private constructor();
    /**
     * @rc
     * @remarks
     * This event fires for each BlockLocation destroyed by an
     * explosion. It is fired after the blocks have already been
     * destroyed.
     * 
     * 每当有爆炸摧毁方块时触发此事件。方块已经被摧毁后触发。
     */
    readonly blockExplode: BlockExplodeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a button is pushed.
     * 
     * 当按钮被按下时触发此事件。
     */
    readonly buttonPush: ButtonPushAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is triggered after a chat message has been
     * broadcast or sent to players.
     * 
     * 在聊天消息广播给玩家或发送给玩家后触发此事件。
     */
    readonly chatSend: ChatSendAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity event has been triggered
     * that will update the component definition state of an
     * entity.
     * 
     * 当触发了会更新实体组件定义状态的实体事件时，触发此事件。
     */
    readonly dataDrivenEntityTrigger: DataDrivenEntityTriggerAfterEventSignal;
    /**
     * @remarks
     * This event fires when an effect, like poisoning, is added to
     * an entity.
     * 
     * 当向实体添加效果（如中毒）时触发此事件。
     */
    readonly effectAdd: EffectAddAfterEventSignal;
    /**
     * @remarks
     * This event is fired when an entity dies.
     * 
     * 当实体死亡时触发此事件。
     */
    readonly entityDie: EntityDieAfterEventSignal;
    /**
     * @remarks
     * This event is fired when entity health changes in any degree.
     * 
     * 当实体生命值以任何形式改变时触发此事件。
     */
    readonly entityHealthChanged: EntityHealthChangedAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) a block.
     * 
     * 当实体（即近战攻击）击中方块时触发此事件。
     */
    readonly entityHitBlock: EntityHitBlockAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity hits (that is, melee
     * attacks) another entity.
     * 
     * 当实体（即近战攻击）击中另一个实体时触发此事件。
     */
    readonly entityHitEntity: EntityHitEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is hurt (takes damage).
     * 
     * 当实体受伤（受到伤害）时触发此事件。
     */
    readonly entityHurt: EntityHurtAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is loaded.
     * 
     * 实体加载时触发。
     */
    readonly entityLoad: EntityLoadAfterEventSignal;
    /**
     * @remarks
     * Fires when an entity is removed (for example, potentially
     * unloaded, or removed after being killed).
     * 
     * 当实体被移除（例如，可能未加载或被杀死后移除）时触发。
     */
    readonly entityRemove: EntityRemoveAfterEventSignal;
    /**
     * @remarks
     * This event fires when an entity is spawned.
     * 
     * 当实体生成时触发此事件。
     */
    readonly entitySpawn: EntitySpawnAfterEventSignal;
    /**
     * @remarks
     * This event is fired after an explosion occurs.
     * 
     * 爆炸发生后触发此事件。
     */
    readonly explosion: ExplosionAfterEventSignal;
    /**
     * @remarks
     * This event fires when a world.gameRules property has
     * changed.
     * 
     * 当世界的游戏规则属性改变时触发此事件。
     */
    readonly gameRuleChange: GameRuleChangeAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item completes charging.
     * 
     * 当可充能物品完成充能时触发此事件。
     */
    readonly itemCompleteUse: ItemCompleteUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item is released from
     * charging.
     * 
     * 当可充能物品停止充能时触发此事件。
     */
    readonly itemReleaseUse: ItemReleaseUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item starts charging.
     * 
     * 当可充能物品开始充能时触发此事件。
     */
    readonly itemStartUse: ItemStartUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item or
     * places a block by pressing the Use Item / Place Block
     * button. If multiple blocks are placed, this event will only
     * occur once at the beginning of the block placement. Note:
     * This event cannot be used with Hoe or Axe items.
     * 
     * 当玩家成功使用物品或通过按下“使用物品/放置方块”按钮放置方块时触发此事件。如果放置了多个方块，此事件仅在方块放置开始时触发一次。注意：此事件不能用于锄头或斧头物品。
     */
    readonly itemStartUseOn: ItemStartUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a chargeable item stops charging.
     * 
     * 当可充能物品停止充能时触发此事件。
     */
    readonly itemStopUse: ItemStopUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player releases the Use Item / Place
     * Block button after successfully using an item. Note: This
     * event cannot be used with Hoe or Axe items.
     * 
     * 当玩家成功使用物品后释放“使用物品/放置方块”按钮时触发此事件。注意：此事件不能用于锄头或斧头物品。
     */
    readonly itemStopUseOn: ItemStopUseOnAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player successfully uses an item.
     * 
     * 当玩家成功使用物品时触发此事件。
     */
    readonly itemUse: ItemUseAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player uses an item on a block.
     * 
     * 当玩家在方块上使用物品时触发此事件。
     */
    readonly itemUseOn: ItemUseOnAfterEventSignal;
    /**
     * @remarks
     * A lever has been pulled.
     * 
     * 杠杆已被拉动。
     */
    readonly leverAction: LeverActionAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event is an internal implementation detail, and is
     * otherwise not currently functional.
     * 
     * 此事件是内部实现细节，目前尚无功能。
     */
    readonly messageReceive: ServerMessageAfterEventSignal;
    /**
     * @remarks
     * This event fires when a piston expands or retracts.
     * 
     * 当活塞伸出或缩回时触发此事件。
     */
    readonly pistonActivate: PistonActivateAfterEventSignal;
    /**
     * @remarks
     * This event fires for a block that is broken by a player.
     * 
     * 当玩家破坏方块时触发此事件。
     */
    readonly playerBreakBlock: PlayerBreakBlockAfterEventSignal;
    /**
     * @remarks
     * Fires when a player moved to a different dimension.
     * 
     * 当玩家移动到另一个维度时触发。
     */
    readonly playerDimensionChange: PlayerDimensionChangeAfterEventSignal;
    /**
     * @beta
     */
    readonly playerEmote: PlayerEmoteAfterEventSignal;
    readonly playerGameModeChange: PlayerGameModeChangeAfterEventSignal;
    /**
     * @rc
     * @remarks
     * This event fires when a players input permissions change.
     * 
     * 当玩家的输入权限发生变化时触发此事件。
     */
    readonly playerInputPermissionCategoryChange: PlayerInputPermissionCategoryChangeAfterEventSignal;
    /**
     * @beta
     * @remarks
     * An event for when a player interacts with a block.
     * 
     * 当玩家与方块交互时的事件。
     */
    readonly playerInteractWithBlock: PlayerInteractWithBlockAfterEventSignal;
    /**
     * @beta
     * @remarks
     * This event fires when a player interacts with an entity.
     * 
     * 当玩家与实体交互时触发此事件。
     */
    readonly playerInteractWithEntity: PlayerInteractWithEntityAfterEventSignal;
    /**
     * @remarks
     * This event fires when a player joins a world.  See also
     * playerSpawn for another related event you can trap for when
     * a player is