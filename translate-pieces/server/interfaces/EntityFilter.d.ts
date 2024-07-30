/* IMPORT */ import { EntityQueryPropertyOptions, EntityQueryScoreOptions, GameMode } from '../index';

/**
 * Contains options for filtering entities.
 * 
 * 包含用于过滤实体的选项。
 */
export interface EntityFilter {
    /**
     * @remarks
     * Excludes entities that match one or more of the specified
     * families.
     * 
     * 排除与指定家族之一匹配的实体。
     */
    excludeFamilies?: string[];
    /**
     * @remarks
     * Excludes entities if have a specific gamemode that matches
     * the specified gamemode.
     * 
     * 如果实体具有与指定游戏模式相匹配的特定游戏模式，则排除这些实体。
     */
    excludeGameModes?: GameMode[];
    /**
     * @remarks
     * Excludes entities that have a name that match one of the
     * specified values.
     * 
     * 排除名称与指定值之一匹配的实体。
     */
    excludeNames?: string[];
    /**
     * @remarks
     * Excludes entities with a tag that matches one of the
     * specified values.
     * 
     * 排除带有与指定值之一匹配标签的实体。
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Excludes entities if they are one of the specified types.
     * 
     * 如果实体是指定类型之一，则排除它们。
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * If specified, includes entities that match all of the
     * specified families.
     * 
     * 如果指定了，则包含与所有指定家族匹配的实体。
     */
    families?: string[];
    /**
     * @remarks
     * If specified, includes entities with a gamemode that matches
     * the specified gamemode.
     * 
     * 如果指定了，则包含具有与指定游戏模式匹配的游戏模式的实体。
     */
    gameMode?: GameMode;
    /**
     * @remarks
     * If specified, will only include entities that have at most
     * this horizontal rotation.
     * 
     * 如果指定了，则仅包含水平旋转最多为该值的实体。
     */
    maxHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at most this level are
     * returned.
     * 
     * 如果定义了，仅返回等级最多为该值的玩家。
     */
    maxLevel?: number;
    /**
     * @remarks
     * If specified, only entities that have at most this vertical
     * rotation are returned.
     * 
     * 如果指定了，则仅返回垂直旋转最多为该值的实体。
     */
    maxVerticalRotation?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at a
     * minimum this horizontal rotation.
     * 
     * 如果指定了，则仅包含水平旋转至少为该值的实体。
     */
    minHorizontalRotation?: number;
    /**
     * @remarks
     * If defined, only players that have at least this level are
     * returned.
     * 
     * 如果定义了，仅返回等级至少为该值的玩家。
     */
    minLevel?: number;
    /**
     * @remarks
     * If specified, will only include entities that have at least
     * this vertical rotation.
     * 
     * 如果指定了，则仅包含垂直旋转至少为该值的实体。
     */
    minVerticalRotation?: number;
    /**
     * @remarks
     * Includes entities with the specified name.
     * 
     * 包含具有指定名称的实体。
     */
    name?: string;
    /**
     * @beta
     */
    propertyOptions?: EntityQueryPropertyOptions[];
    /**
     * @remarks
     * Gets/sets a collection of EntityQueryScoreOptions objects
     * with filters for specific scoreboard objectives.
     * 
     * 获取/设置一组带有针对特定计分板目标的过滤器的 EntityQueryScoreOptions 对象。
     */
    scoreOptions?: EntityQueryScoreOptions[];
    /**
     * @remarks
     * Includes entities that match all of the specified tags.
     * 
     * 包含与所有指定标签匹配的实体。
     */
    tags?: string[];
    /**
     * @remarks
     * If defined, entities that match this type are included.
     * 
     * 如果定义了，包含与此类型匹配的实体。
     */
    type?: string;
}