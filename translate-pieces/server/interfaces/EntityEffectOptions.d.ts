/**
 * Contains additional options for entity effects.
 * 
 * 包含实体效果的附加选项。
 */
export interface EntityEffectOptions {
    /**
     * @remarks
     * The strength of the effect.
     * 
     * 效果的强度。
     */
    amplifier?: number;
    /**
     * @remarks
     * If true, will show particles when effect is on the entity.
     * 
     * 如果为真，在实体上施加效果时会显示粒子。
     */
    showParticles?: boolean;
}