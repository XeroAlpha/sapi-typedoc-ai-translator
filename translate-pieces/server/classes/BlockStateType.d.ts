/**
 * Represents a configurable state value of a block instance.
 * For example, the facing direction of stairs is accessible as
 * a block state.
 * 
 * 表示方块实例的可配置状态值。例如，楼梯的朝向可以作为方块状态访问。
 */
export class BlockStateType {
    private constructor();
    /**
     * @remarks
     * Identifier of the block property.
     * 
     * 方块属性的标识符。
     */
    readonly id: string;
    /**
     * @remarks
     * A set of valid values for the block property.
     * 
     * 方块属性的有效值集合。
     */
    readonly validValues: (boolean | number | string)[];
}