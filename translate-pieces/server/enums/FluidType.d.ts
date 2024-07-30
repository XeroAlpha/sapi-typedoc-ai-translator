/**
 * Represents the type of fluid for use within a fluid
 * containing block, like a cauldron.
 * 
 * 表示可用于包含流体的方块（如炼药锅）中的流体类型。
 */
export enum FluidType {
    /**
     * @remarks
     * Represents lava as a type of fluid.
     * 
     * 表示熔岩作为一种流体类型。
     */
    Lava = 'Lava',
    /**
     * @remarks
     * Represents a potion as a type of fluid.
     * 
     * 表示药水作为一种流体类型。
     */
    Potion = 'Potion',
    /**
     * @remarks
     * Represents powder snow as a type of fluid.
     * 
     * 表示粉末雪作为一种流体类型。
     */
    PowderSnow = 'PowderSnow',
    /**
     * @remarks
     * Represents water as a type of fluida.
     * 
     * 表示水作为一种流体类型。
     */
    Water = 'Water',
}