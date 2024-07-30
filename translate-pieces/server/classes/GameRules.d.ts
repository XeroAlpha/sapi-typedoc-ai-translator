/**
 * Represents the game rules for a world experience.
 * 
 * 表示世界体验的游戏规则。
 */
export class GameRules {
    private constructor();
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    commandBlockOutput: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    commandBlocksEnabled: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doDayLightCycle: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doEntityDrops: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doFireTick: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doImmediateRespawn: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doInsomnia: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doLimitedCrafting: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doMobLoot: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doMobSpawning: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doTileDrops: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    doWeatherCycle: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    drowningDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    fallDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    fireDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    freezeDamage: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    functionCommandLimit: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    keepInventory: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    maxCommandChainLength: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    mobGriefing: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    naturalRegeneration: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    playersSleepingPercentage: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    projectilesCanBreakBlocks: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    pvp: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    randomTickSpeed: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    recipesUnlock: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    respawnBlocksExplode: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    sendCommandFeedback: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showBorderEffect: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showCoordinates: boolean;
    /**
     * @rc
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showDaysPlayed: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showDeathMessages: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showRecipeMessages: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    showTags: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    spawnRadius: number;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    tntExplodes: boolean;
    /**
     * @remarks
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    tntExplosionDropDecay: boolean;
}