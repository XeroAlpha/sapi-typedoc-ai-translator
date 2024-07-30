/* IMPORT */ import { EffectType } from '../index';

/**
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 * 
 * 表示可应用于实体的效果类型，如中毒效果。
 */
export class EffectTypes {
    private constructor();
    /**
     * @remarks
     * Effect type for the given identifier.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * Effect type for the given identifier or undefined if the
     * effect does not exist.
     * 
     * 根据给定的标识符获取效果类型。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 如果效果存在，则返回给定标识符对应的效果类型；否则返回 undefined。
     */
    static get(identifier: string): EffectType | undefined;
    /**
     * @remarks
     * Gets all effects.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * A list of all effects.
     * 
     * 获取所有效果。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 所有效果的列表。
     */
    static getAll(): EffectType[];
}