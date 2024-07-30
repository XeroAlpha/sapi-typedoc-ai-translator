/**
 * The types of block components that are accessible via
 * function Block.getComponent.
 * 
 * 可通过 Block.getComponent 函数访问的方块组件类型。
 */
export enum BlockComponentTypes {
    /**
     * @remarks
     * Represents the inventory of a block in the world. Used with
     * blocks like chests.
     * 
     * 表示世界中方块的库存。用于像箱子这样的方块。
     */
    Inventory = 'minecraft:inventory',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * lava.
     * 
     * 表示当前包含熔岩的流体容器方块。
     */
    LavaContainer = 'minecraft:lavaContainer',
    /**
     * @remarks
     * When present, this block has piston-like behavior. Contains
     * additional properties for discovering block piston state.
     * 
     * 当存在时，此方块具有活塞般的特性。包含用于发现方块活塞状态的额外属性。
     */
    Piston = 'minecraft:piston',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains a
     * potion.
     * 
     * 表示当前包含药水的流体容器方块。
     */
    PotionContainer = 'minecraft:potionContainer',
    /**
     * @beta
     * @remarks
     * Represents a block that can play a record.
     * 
     * 表示可以播放唱片的方块。
     */
    RecordPlayer = 'minecraft:record_player',
    /**
     * @remarks
     * Represents a block that can display text on it.
     * 
     * 表示可以在其上显示文本的方块。
     */
    Sign = 'minecraft:sign',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * snow.
     * 
     * 表示当前包含雪的流体容器方块。
     */
    SnowContainer = 'minecraft:snowContainer',
    /**
     * @beta
     * @remarks
     * Represents a fluid container block that currently contains
     * water.
     * 
     * 表示当前包含水的流体容器方块。
     */
    WaterContainer = 'minecraft:waterContainer',
}