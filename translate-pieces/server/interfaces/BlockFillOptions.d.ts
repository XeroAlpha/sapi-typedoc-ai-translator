/* IMPORT */ import { BlockFilter } from '../index';

/**
 * @beta
 * Contains additional options for a block fill operation.
 * 
 * 包含块填充操作的附加选项。
 */
export interface BlockFillOptions {
    blockFilter?: BlockFilter;
    ignoreChunkBoundErrors?: boolean;
}