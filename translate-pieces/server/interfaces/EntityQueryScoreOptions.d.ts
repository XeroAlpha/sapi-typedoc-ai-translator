/**
 * Contains additional options for filtering players based on
 * their score for an objective.
 * 
 * 包含根据玩家在某个目标得分的基础上进行筛选的附加选项。
 */
export interface EntityQueryScoreOptions {
    /**
     * @remarks
     * If set to true, entities and players within this score range
     * are excluded from query results.
     * 
     * 如果设置为 `true`，则排除得分范围内的实体和玩家。
     */
    exclude?: boolean;
    /**
     * @remarks
     * If defined, only players that have a score equal to or under
     * maxScore are included.
     * 
     * 如果定义了此值，仅包括得分等于或低于 `maxScore` 的玩家。
     */
    maxScore?: number;
    /**
     * @remarks
     * If defined, only players that have a score equal to or over
     * minScore are included.
     * 
     * 如果定义了此值，仅包括得分等于或高于 `minScore` 的玩家。
     */
    minScore?: number;
    /**
     * @remarks
     * Identifier of the scoreboard objective to filter on.
     * 
     * 要进行筛选的计分板目标的标识符。
     */
    objective?: string;
}