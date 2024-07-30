/* IMPORT */ import { minecraftserver } from '../index';

export interface WeightedBlock {
    /**
     * The type of block for this weighted entry.
     * 
     * 此加权条目对应的方块类型。
     */
    block: minecraftserver.BlockType;
    /**
     * The weight assigned to this block type.
     * 
     * 分配给此方块类型的权重。
     */
    weight: number;
}