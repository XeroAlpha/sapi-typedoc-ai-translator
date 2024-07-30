/**
 * Game rules. These values can also be controlled via the
 * /gamerule command.
 * 
 * 游戏规则。这些值也可以通过 /gamerule 命令进行控制。
 */
export enum GameRule {
    /**
     * @remarks
     * Whether command blocks should notify admins when they
     * perform commands.
     * 
     * 是否当命令方块执行命令时通知管理员。
     */
    CommandBlockOutput = 'commandBlockOutput',
    /**
     * @remarks
     * Controls whether command blocks can execute commands.
     * 
     * 控制命令方块是否可以执行命令。
     */
    CommandBlocksEnabled = 'commandBlocksEnabled',
    /**
     * @remarks
     * Controls whether the day and night cycles progress.
     * 
     * 控制日夜循环是否进行。
     */
    DoDayLightCycle = 'doDayLightCycle',
    /**
     * @remarks
     * Controls whether non-mob entities do drops. ie. Item Frame
     * 
     * 控制非生物实体是否掉落物品。例如：物品展示框
     */
    DoEntityDrops = 'doEntityDrops',
    /**
     * @remarks
     * Controls whether fire spreads.
     * 
     * 控制火是否蔓延。
     */
    DoFireTick = 'doFireTick',
    /**
     * @remarks
     * Controls whether players immediately respawn or are shown
     * the death screen.
     * 
     * 控制玩家是否立即重生或显示死亡画面。
     */
    DoImmediateRespawn = 'doImmediateRespawn',
    /**
     * @remarks
     * Controls whether players deal with the effects of not
     * sleeping (such as Phantom spawning).
     * 
     * 控制玩家是否需要处理不睡觉的影响（如幻翼生成）。
     */
    DoInsomnia = 'doInsomnia',
    /**
     * @remarks
     * Determines whether players should be able to craft only
     * those recipes that they've unlocked first - when
     * dolimitedcrafting is set to true.
     * 
     * 确定玩家是否只能制作他们首先解锁的配方，当 dolimitedcrafting 设置为 true 时。
     */
    DoLimitedCrafting = 'doLimitedCrafting',
    /**
     * @remarks
     * Controls whether mobs drop loot.
     * 
     * 控制生物是否掉落战利品。
     */
    DoMobLoot = 'doMobLoot',
    /**
     * @remarks
     * Controls whether mobs spawn naturally in the world.
     * 
     * 控制生物是否自然生成于世界。
     */
    DoMobSpawning = 'doMobSpawning',
    /**
     * @remarks
     * Controls whether blocks drop items when destroyed.
     * 
     * 控制方块被破坏时是否掉落物品。
     */
    DoTileDrops = 'doTileDrops',
    /**
     * @remarks
     * Controls whether the weather can change naturally.
     * 
     * 控制天气是否可以自然改变。
     */
    DoWeatherCycle = 'doWeatherCycle',
    /**
     * @remarks
     * Controls whether entities take damage from drowning.
     * 
     * 控制实体是否从溺水受到伤害。
     */
    DrowningDamage = 'drowningDamage',
    /**
     * @remarks
     * Controls whether entities take damage from falling.
     * 
     * 控制实体是否从跌落受到伤害。
     */
    FallDamage = 'fallDamage',
    /**
     * @remarks
     * Controls whether entities take damage from fire.
     * 
     * 控制实体是否从火受到伤害。
     */
    FireDamage = 'fireDamage',
    /**
     * @remarks
     * Controls whether there is damage from freezing.
     * 
     * 控制是否有冻结伤害。
     */
    FreezeDamage = 'freezeDamage',
    /**
     * @remarks
     * The maximum number of commands that can be executed
     * simultaneously by the /function command.
     * 
     * /function 命令同时可执行的最大命令数。
     */
    FunctionCommandLimit = 'functionCommandLimit',
    /**
     * @remarks
     * Controls whether players keep their inventories when they
     * die.
     * 
     * 控制玩家死亡时是否保留他们的物品栏。
     */
    KeepInventory = 'keepInventory',
    /**
     * @remarks
     * The maximum number of chained commands that can execute per
     * tick.
     * 
     * 每刻可执行的链式命令的最大数量。
     */
    MaxCommandChainLength = 'maxCommandChainLength',
    /**
     * @remarks
     * Controls whether mob griefing can happen in the world.
     * Example: A Creeper explosion destroying blocks.
     * 
     * 控制生物破坏是否可以在世界中发生。例如：苦力怕爆炸破坏方块。
     */
    MobGriefing = 'mobGriefing',
    /**
     * @remarks
     * Controls whether players can regenerate health.
     * 
     * 控制玩家是否可以恢复生命值。
     */
    NaturalRegeneration = 'naturalRegeneration',
    /**
     * @remarks
     * The percentage of players required to be sleeping in order
     * to advance to the next day.
     * 
     * 进入下一天所需的睡眠玩家百分比。
     */
    PlayersSleepingPercentage = 'playersSleepingPercentage',
    /**
     * @remarks
     * Controls whether projectiles (entities with a projectile
     * component, like Arrows, thrown Tridents or Fireworks) can
     * destroy certain blocks that support this interaction (such
     * as Chorus Fruit, Dripstone or Decorated Pots). Restrictions
     * on which projectiles can destroy certain blocks apply.
     * 
     * 控制投射物（具有投射物组件的实体，如箭矢、投掷三叉戟或烟花）能否破坏某些支持此交互的方块（如音符果、滴水石笋或装饰花盆）。对哪些投射物能破坏某些方块有限制。
     */
    ProjectilesCanBreakBlocks = 'projectilesCanBreakBlocks',
    /**
     * @remarks
     * Controls whether players can damage each other.
     * 
     * 控制玩家是否可以互相伤害。
     */
    Pvp = 'pvp',
    /**
     * @remarks
     * Controls how frequently random ticks occur. A value of 0 or
     * less will disable random ticks. The default value is 1.
     * 
     * 控制随机刻发生的频率。0 或更小的值会禁用随机刻。默认值是 1。
     */
    RandomTickSpeed = 'randomTickSpeed',
    /**
     * @remarks
     * Controls whether built-in (vanilla) recipes automatically
     * unlock as the player progresses through the game (one
     * alternative to this is to use the /recipe command based on
     * custom gameplay logic.)
     * 
     * 控制内置（原版）配方是否在玩家游戏进程中自动解锁（另一种替代方法是基于自定义游戏逻辑使用 /recipe 命令）。
     */
    RecipesUnlock = 'recipesUnlock',
    /**
     * @remarks
     * Controls whether respawn blocks (e.g. Bed, Respawn Anchor)
     * explode in other dimensions.
     * 
     * 控制重生方块（如床、重生锚）是否在其他维度爆炸。
     */
    RespawnBlocksExplode = 'respawnBlocksExplode',
    /**
     * @remarks
     * Controls whether command output is displayed to players.
     * Also controls whether Command Block output is stored by
     * default.
     * 
     * 控制是否向玩家显示命令输出。同时也控制默认情况下是否存储命令方块的输出。
     */
    SendCommandFeedback = 'sendCommandFeedback',
    /**
     * @remarks
     * Controls whether Border Block effects are shown.
     * 
     * 控制是否显示边界方块效果。
     */
    ShowBorderEffect = 'showBorderEffect',
    /**
     * @remarks
     * Controls whether player coordinates are displayed.
     * 
     * 控制是否显示玩家坐标。
     */
    ShowCoordinates = 'showCoordinates',
    /**
     * @rc
     * @remarks
     * Controls whether the days a player has played is displayed.
     * 
     * 控制是否显示玩家已玩天数。
     */
    ShowDaysPlayed = 'showDaysPlayed',
    /**
     * @remarks
     * Controls whether death messages are displayed in chat.
     * 
     * 控制死亡信息是否在聊天中显示。
     */
    ShowDeathMessages = 'showDeathMessages',
    /**
     * @remarks
     * Controls whether standard player notifications for recipes
     * will show. When set to false, 'player unlocked recipes' are
     * no longer sent as player notifications.
     * 
     * 控制是否显示标准的玩家配方通知。设置为 false 时，不再将“玩家解锁了配方”作为玩家通知发送。
     */
    ShowRecipeMessages = 'showRecipeMessages',
    /**
     * @remarks
     * Controls whether item tags are shown. E.g. 'Can Place On',
     * 'Can Destroy', item lock icons, etc.
     * 
     * 控制是否显示物品标签。例如：“可放置于”，“可摧毁”，物品锁定图标等。
     */
    ShowTags = 'showTags',
    /**
     * @remarks
     * The block radius from world spawn that a player is allowed
     * to spawn in. Does not affect Adventure mode. The default
     * value is 10 blocks.
     * 
     * 允许玩家在世界出生点周围多少格半径内重生。不影响冒险模式。默认值是 10 格。
     */
    SpawnRadius = 'spawnRadius',
    /**
     * @remarks
     * Affects whether TNT blocks can be lit.
     * 
     * 影响 TNT 方块是否可以被点燃。
     */
    TntExplodes = 'tntExplodes',
    /**
     * @remarks
     * Controls whether blocks randomly drop loot or all blocks
     * drop loot when destroyed by an explosion. Defaults to false.
     * 
     * 控制方块是否随机掉落战利品，或者所有方块在被爆炸摧毁时都掉落战利品。默认为 false。
     */
    TntExplosionDropDecay = 'tntExplosionDropDecay',
}