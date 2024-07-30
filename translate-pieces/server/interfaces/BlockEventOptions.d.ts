/* IMPORT */ import { BlockPermutation } from '../index';

/**
 * Contains optional parameters for registering a block event.
 * 
 * 包含用于注册方块事件的可选参数。
 */
export interface BlockEventOptions {
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's type matches this parameter.
     * 
     * 如果设置了此值，则只有当受影响方块的类型与此参数匹配时，此事件才会触发。
     */
    blockTypes?: string[];
    /**
     * @remarks
     * If this value is set, this event will only fire if the
     * impacted block's permutation matches this parameter.
     * 
     * 如果设置了此值，则只有当受影响方块的变体与此参数匹配时，此事件才会触发。
     */
    permutations?: BlockPermutation[];
}