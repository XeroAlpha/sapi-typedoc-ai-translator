/* IMPORT */ import { BrushPipelineOperationType, minecraftserver } from '../index';

export interface BrushPipelineOperation {
    /**
     * An array of BlockType objects representing the types of
     * blocks that this operation will apply to.
     * 
     * 一个 BlockType 对象数组，表示此操作将应用到的方块类型。
     */
    blockTypes: minecraftserver.BlockType[];

    /**
     * The type of operation that this pipeline operation will
     * perform.
     * 
     * 此管线操作将执行的操作类型。
     */
    operation: BrushPipelineOperationType;
}