/**
 * A collection of default Minecraft dimension types.
 * 
 * Minecraft 默认维度类型的集合。
 */
export class MinecraftDimensionTypes {
    private constructor();
    /**
     * @remarks
     * The Nether is a collection of biomes separate from the
     * Overworld, including Soul Sand Valleys and Crimson forests.
     * Nether fortresses contain exclusive resources. Mobs such as
     * Blaze, Hoglins, Piglins, and Ghasts congregate here.
     * 
     * 下界是一系列与主世界分开的生物群系的集合，包括灵魂沙峡谷和绯红森林。
     * 下界要塞包含专属资源。诸如烈焰人、猪灵、疣猪兽和凋灵骷髅等生物聚集于此。
     */
    static readonly nether = 'minecraft:nether';
    /**
     * @remarks
     * The overworld is a collection of biomes, including forests,
     * plains, jungles, mountains, deserts, taiga, and more. This
     * is the default starter dimension for Minecraft. Mobs such as
     * Axolotl, Cows, Creepers, and Zombies congregate here.
     * 
     * 主世界是一系列生物群系的集合，包括森林、平原、丛林、山脉、沙漠、针叶林等。
     * 这是 Minecraft 的默认起始维度。诸如美西螈、牛、苦力怕和僵尸等生物聚集于此。
     */
    static readonly overworld = 'minecraft:overworld';
    /**
     * @remarks
     * The End is separate from the Overworld and the Nether and is
     * generated whenever you create an End portal. Here, a giant
     * center island is surrounded by several smaller areas and
     * islands. You can find Endermen here. End midlands are larger
     * areas that transition you from the center to the outer edges
     * of the End. They contain Shulkers, Endermen, End gateway
     * portals, and End cities. End gateway portals are commonly
     * found at the outermost edge of the void. You usually find
     * End barrens toward the edges of the main areas or land in
     * the End.
     * 
     * 终界与主世界和下界分开，当你创造终界传送门时会生成。在这里，巨大的中心岛被数个较小的区域和岛屿环绕。
     * 你可以在这里找到末影人。末地高原是较大的区域，可以带你从中心过渡到终界的边缘。
     * 它们包含潜影贝、末影人、末地传送门和末地城。末地传送门通常位于虚空最外侧的边缘。
     * 你通常会在主要区域或末地的边缘发现末地荒地。
     */
    static readonly theEnd = 'minecraft:the_end';
}