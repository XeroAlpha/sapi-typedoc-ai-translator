/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Represents the context for a game test error, including
 * the absolute and relative positions, and the tick count.
 * 
 * 表示游戏测试错误的上下文，包括绝对位置、相对位置以及计数的刻数。
 */
export interface GameTestErrorContext {
    absolutePosition: minecraftserver.Vector3;
    relativePosition: minecraftserver.Vector3;
    tickCount: number;
}