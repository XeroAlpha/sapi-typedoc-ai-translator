/**
 * Represents an effect - like poison - that has been added to
 * an Entity.
 * 
 * 表示添加到实体上的效果，如中毒等。
 */
export class Effect {
    private constructor();
    /**
     * @remarks
     * Gets an amplifier that may have been applied to this effect.
     * Sample values range typically from 0 to 4. Example: The
     * effect 'Jump Boost II' will have an amplifier value of 1.
     * 
     * 获取可能已应用于此效果的放大倍数。
     * 典型值范围通常为 0 至 4。例如：“跳跃增强 II”的放大倍数值为 1。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly amplifier: number;
    /**
     * @remarks
     * Gets the player-friendly name of this effect.
     * 
     * 获取此效果的玩家友好名称。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly displayName: string;
    /**
     * @remarks
     * Gets the entire specified duration, in ticks, of this
     * effect. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     * 
     * 获取此效果的整个指定持续时间，以刻为单位。每秒有 20 刻。使用 {@link
     * TicksPerSecond} 常量在刻和秒之间进行转换。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly duration: number;
    /**
     * @remarks
     * Gets the type id of this effect.
     * 
     * 获取此效果的类型 ID。
     *
     * @throws This property can throw when used.
     * 
     * 使用此属性时可能会抛出异常。
     */
    readonly typeId: string;
    /**
     * @remarks
     * Returns whether an effect instance is available for use in
     * this context.
     * 
     * 返回在此上下文中是否可以使用效果实例。
     */
    isValid(): boolean;
}