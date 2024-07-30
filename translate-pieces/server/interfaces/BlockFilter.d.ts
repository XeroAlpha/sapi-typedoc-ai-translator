/* IMPORT */ import { BlockPermutation } from '../index';

/**
 * Options to include or exclude blocks based on type, tag or
 * permutation. If no include options are added it will select
 * all blocks that are not rejected by the exclude options. If
 * at least one include option is added the block must match
 * one of the include options to not be rejected.
 * 
 * 根据类型、标签或排列来包含或排除方块的选项。如果没有添加包含选项，
 * 它会选择所有未被排除选项拒绝的方块。如果至少添加了一个包含选项，
 * 方块必须匹配其中一个包含选项才不会被拒绝。
 */
export interface BlockFilter {
    /**
     * @remarks
     * Array of block permutations that the filter should reject if
     * any matches.
     * 
     * 过滤器应拒绝的方块排列数组（如果匹配任何排列）。
     */
    excludePermutations?: BlockPermutation[];
    /**
     * @remarks
     * Array of block tags that the filter should reject if any
     * matches.
     * 
     * 过滤器应拒绝的方块标签数组（如果匹配任何标签）。
     */
    excludeTags?: string[];
    /**
     * @remarks
     * Array of block types that the filter should reject if any
     * matches.
     * 
     * 过滤器应拒绝的方块类型数组（如果匹配任何类型）。
     */
    excludeTypes?: string[];
    /**
     * @remarks
     * Array of block permutations that the filter should select if
     * at least one matches.
     * 
     * 如果至少匹配一个排列，过滤器应选择的方块排列数组。
     */
    includePermutations?: BlockPermutation[];
    /**
     * @remarks
     * Array of block tags that the filter should select if at
     * least one matches.
     * 
     * 如果至少匹配一个标签，过滤器应选择的方块标签数组。
     */
    includeTags?: string[];
    /**
     * @remarks
     * Array of block types that the filter should select if at
     * least one matches.
     * 
     * 如果至少匹配一个类型，过滤器应选择的方块类型数组。
     */
    includeTypes?: string[];
}