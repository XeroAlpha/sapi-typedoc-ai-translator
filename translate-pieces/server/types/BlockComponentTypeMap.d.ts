/* IMPORT */ import { BlockInventoryComponent, BlockLavaContainerComponent, BlockPistonComponent, BlockPotionContainerComponent, BlockRecordPlayerComponent, BlockSignComponent, BlockSnowContainerComponent, BlockWaterContainerComponent } from '../index';

/**
 * @beta
 * 
 * 用于映射方块组件类型的字典，包含了方块可能具有的各种功能组件。
 */
export type BlockComponentTypeMap = {
    inventory: BlockInventoryComponent; // 物品栏组件
    lavaContainer: BlockLavaContainerComponent; // 溶岩容器组件
    'minecraft:inventory': BlockInventoryComponent; // Minecraft 特定的物品栏组件
    'minecraft:lavaContainer': BlockLavaContainerComponent; // Minecraft 特定的溶岩容器组件
    'minecraft:piston': BlockPistonComponent; // Minecraft 特定的活塞组件
    'minecraft:potionContainer': BlockPotionContainerComponent; // Minecraft 特定的药水容器组件
    'minecraft:record_player': BlockRecordPlayerComponent; // Minecraft 特定的唱片机组件
    'minecraft:sign': BlockSignComponent; // Minecraft 特定的告示牌组件
    'minecraft:snowContainer': BlockSnowContainerComponent; // Minecraft 特定的雪容器组件
    'minecraft:waterContainer': BlockWaterContainerComponent; // Minecraft 特定的水容器组件
    piston: BlockPistonComponent; // 活塞组件（简写）
    potionContainer: BlockPotionContainerComponent; // 药水容器组件（简写）
    record_player: BlockRecordPlayerComponent; // 唱片机组件（简写）
    sign: BlockSignComponent; // 告示牌组件（简写）
    snowContainer: BlockSnowContainerComponent; // 雪容器组件（简写）
    waterContainer: BlockWaterContainerComponent; // 水容器组件（简写）
};