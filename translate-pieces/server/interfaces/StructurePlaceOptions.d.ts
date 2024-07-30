/* IMPORT */ import { StructureAnimationMode, StructureMirrorAxis, StructureRotation } from '../index';

/**
 * Provides additional options for {@link
 * StructureManager.place}
 * 
 * 为 {@link StructureManager.place} 提供额外选项。
 */
export interface StructurePlaceOptions {
    /**
     * @remarks
     * How the Structure should be animated when placed.
     * 
     * 放置结构时应如何动画化。
     */
    animationMode?: StructureAnimationMode;
    /**
     * @remarks
     * How many seconds the animation should take.
     * 
     * 动画应持续多少秒。
     */
    animationSeconds?: number;
    /**
     * @remarks
     * Whether blocks should be included in the structure. Defaults
     * to true.
     * 
     * 是否应在结构中包含方块。默认为 true。
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     * 
     * 是否应在结构中包含实体。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * What percentage of blocks should be placed. A value of 1
     * will place 100% of the blocks while a value of 0 will place
     * none. The blocks are chosen randomly based on the {@link
     * StructurePlaceOptions.integritySeed}.
     * 
     * 应放置多少百分比的方块。值为 1 将放置 100% 的方块，
     * 而值为 0 则不放置任何方块。根据 {@link
     * StructurePlaceOptions.integritySeed} 随机选择方块。
     */
    integrity?: number;
    /**
     * @remarks
     * Seed that determines which blocks are randomly chosen to be
     * placed. Defaults to a random seed.
     * 
     * 确定哪些方块被随机选择放置的种子。默认为随机种子。
     */
    integritySeed?: string;
    /**
     * @remarks
     * Which axes the Structure should be mirrored on when placed.
     * Defaults to StructureMirrorAxis.None.
     * 
     * 放置时结构应在哪些轴上进行镜像。默认为 StructureMirrorAxis.None。
     */
    mirror?: StructureMirrorAxis;
    /**
     * @remarks
     * How the Structure should be rotated when placed. Defaults to
     * AxisAlignedRotation.None.
     * 
     * 放置时结构应如何旋转。默认为 AxisAlignedRotation.None。
     */
    rotation?: StructureRotation;
    /**
     * @remarks
     * Whether the structure should be waterlogged when placed.
     * Defaults to false. If true, blocks will become waterlogged
     * when placed in water.
     * 
     * 放置时结构是否应被水淹没。默认为 false。如果为 true，
     * 在水中放置时方块将被水淹没。
     */
    waterlogged?: boolean;
}