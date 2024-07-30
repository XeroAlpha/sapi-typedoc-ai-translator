/* IMPORT */ import { Block, BlockStateType } from '../index';

/**
 * Enumerates all {@link BlockStateType}s.
 * 
 * 枚举所有 {@link BlockStateType}。
 */
export class BlockStates {
    private constructor();
    /**
     * @remarks
     * Retrieves a specific block state instance.
     * 
     * 获取特定的方块状态实例。
     *
     * @returns
     * Returns the {@link Block} state instance if it is found. If
     * the block state instance is not found returns undefined.
     * 
     * 如果找到，返回 {@link Block} 状态实例。如果未找到方块状态实例，则返回 undefined。
     */
    static get(stateName: string): BlockStateType | undefined;
    /**
     * @remarks
     * Retrieves a set of all available block states.
     * 
     * 获取所有可用方块状态的集合。
     */
    static getAll(): BlockStateType[];
}