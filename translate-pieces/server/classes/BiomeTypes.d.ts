/* IMPORT */ import { BiomeType } from '../index';

/**
 * @beta
 * Supports a catalog of available biome types registered
 * within Minecraft.
 * 
 * 支持 Minecraft 中注册的所有生物群系类型的目录。
 */
export class BiomeTypes {
    private constructor();
    /**
     * @remarks
     * Returns a specific biome type.
     * 
     * 返回特定的生物群系类型。
     *
     * @param typeName
     * Identifier of the biome.  Generally, namespaced identifiers
     * (e.g., minecraft:frozen_peaks) should be used.
     * 
     * 生物群系的标识符。通常情况下，应使用命名空间标识符（例如，minecraft:frozen_peaks）。
     * @returns
     * If the biome exists, a BiomeType object is returned. If not,
     * undefined is returned.
     * 
     * 如果存在该生物群系，则返回 BiomeType 对象；否则返回 undefined。
     */
    static get(typeName: string): BiomeType | undefined;
    /**
     * @remarks
     * Returns all registered biome types within Minecraft
     * 
     * 返回 Minecraft 中所有已注册的生物群系类型。
     */
    static getAll(): BiomeType[];
}