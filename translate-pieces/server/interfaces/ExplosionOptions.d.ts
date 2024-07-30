/* IMPORT */ import { Entity } from '../index';

/**
 * Additional configuration options for the {@link
 * Dimension.createExplosion} method.
 * 
 * 用于 {@link Dimension.createExplosion} 方法的附加配置选项。
 * 
 * @example createExplosions.ts
 * 
 * ```typescript
 * // Creates an explosion of radius 15 that does not break blocks
 * // 创建半径为15、不会破坏方块的爆炸
 * import { DimensionLocation } from '@minecraft/server';
 *
 * function createExplosions(location: DimensionLocation) {
 *     // Creates an explosion of radius 15 that does not break blocks
     // 创建半径为15、不会破坏方块的爆炸
 *     location.dimension.createExplosion(location, 15, { breaksBlocks: false });
 *
 *     // Creates an explosion of radius 15 that does not cause fire
     // 创建半径为15、不会引发火灾的爆炸
 *     location.dimension.createExplosion(location, 15, { causesFire: true });
 *
 *     // Creates an explosion of radius 10 that can go underwater
     // 创建半径为10、可以发生在水下的爆炸
 *     location.dimension.createExplosion(location, 10, { allowUnderwater: true });
 * }
 * ```
 */
export interface ExplosionOptions {
    /**
     * @remarks
     * Whether parts of the explosion also impact underwater.
     * 
     * 爆炸是否也影响水下区域。
     */
    allowUnderwater?: boolean;
    /**
     * @remarks
     * Whether the explosion will break blocks within the blast
     * radius.
     * 
     * 爆炸是否会在爆炸半径内破坏方块。
     */
    breaksBlocks?: boolean;
    /**
     * @remarks
     * If true, the explosion is accompanied by fires within or
     * near the blast radius.
     * 
     * 如果为真，爆炸会伴随在爆炸半径内或附近的火灾。
     */
    causesFire?: boolean;
    /**
     * @remarks
     * Optional source of the explosion.
     * 
     * 爆炸的可选来源。
     */
    source?: Entity;
}