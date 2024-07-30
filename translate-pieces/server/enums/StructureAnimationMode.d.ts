/**
 * Specifies how structure blocks should be animated when a
 * structure is placed.
 * 
 * 指定放置结构时结构块应如何动画化。
 */
export enum StructureAnimationMode {
    /**
     * @remarks
     * Blocks will be randomly placed one at at time. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 
     * 方块将以随机顺序逐一放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置所需的时间。
     */
    Blocks = 'Blocks',
    /**
     * @remarks
     * Blocks will be placed one layer at a time from bottom to
     * top. Use
     * @minecraft/server.StructurePlaceOptions.animationSeconds to
     * control how long it takes for all blocks to be placed.
     * 
     * 方块将从下至上逐层放置。使用
     * @minecraft/server.StructurePlaceOptions.animationSeconds 来
     * 控制所有方块放置所需的时间。
     */
    Layers = 'Layers',
    /**
     * @remarks
     * All blocks will be placed immediately.
     * 
     * 所有方块将立即放置。
     */
    None = 'None',
}