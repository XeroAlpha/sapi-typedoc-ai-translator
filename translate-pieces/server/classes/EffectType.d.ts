/**
 * Represents a type of effect - like poison - that can be
 * applied to an entity.
 * 
 * 表示可以应用于实体的效果类型，如中毒效果。
 */
export class EffectType {
    private constructor();
    /**
     * @remarks
     * Identifier name of this effect type.
     * 
     * 此效果类型的标识名称。
     * 
     * @returns
     * Identifier of the effect type.
     * 
     * 返回效果类型的标识。
     */
    getName(): string;
}