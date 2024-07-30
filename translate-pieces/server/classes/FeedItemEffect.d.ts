/**
 * Represents an effect that is applied as a result of a food
 * item being fed to an entity.
 * 
 * 表示因实体食用食物物品而产生的效果。
 */
export class FeedItemEffect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Valid values are integers starting at 0 and up - but usually
     * ranging between 0 and 4.
     * 
     * 获取可能应用于此效果的增强等级。
     * 合法的值是从 0 开始的整数，通常范围在 0 至 4 之间。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Chance that this effect is applied as a result of the entity
     * being fed this item. Valid values range between 0 and 1.
     * 
     * 因实体食用此物品而使该效果生效的概率。
     * 合法的值范围在 0 和 1 之间。
     */
    readonly chance: number;
    /**
     * @remarks
     * Gets the duration, in ticks, of this effect.
     * 
     * 获取此效果的持续时间（以刻为单位）。
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the identifier of the effect to apply. Example values
     * include 'fire_resistance' or 'regeneration'.
     * 
     * 获取要应用的效果的标识符。示例值包括 'fire_resistance' 或 'regeneration'。
     */
    readonly name: string;
}