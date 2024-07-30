/**
 * Contains information on a type of enchantment.
 * 
 * 包含有关某种附魔类型的信息。
 */
export class EnchantmentType {
    /**
     * @remarks
     * The name of the enchantment type.
     * 
     * 附魔类型的名称。
     */
    readonly id: string;
    /**
     * @remarks
     * The maximum level this type of enchantment can have.
     * 
     * 此种附魔可能拥有的最大等级。
     */
    readonly maxLevel: number;
    /**
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     */
    constructor(enchantmentType: string);
}