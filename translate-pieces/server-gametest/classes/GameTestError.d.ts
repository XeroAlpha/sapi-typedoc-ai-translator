/* IMPORT */ import { GameTestErrorContext, GameTestErrorType } from '../index';

export class GameTestError extends Error {
    private constructor();
    context?: GameTestErrorContext;
    /**
     * An array of strings that are used as parameters for formatting
     * the error message.
     * 
     * 用于格式化错误消息的字符串参数数组。
     */
    messageParameters: string[];
    /**
     * The type of the game test error.
     * 
     * 游戏测试错误的类型。
     */
    type: GameTestErrorType;
}