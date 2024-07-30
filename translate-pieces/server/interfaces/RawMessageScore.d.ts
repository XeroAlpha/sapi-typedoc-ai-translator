/**
 * Provides a description of a score token to use within a raw
 * message.
 * 
 * 提供在原始消息中使用的分数标记的描述。
 */
export interface RawMessageScore {
    /**
     * @remarks
     * Name of the score value to match.
     * 
     * 要匹配的分数值名称。
     */
    name?: string;
    /**
     * @remarks
     * Name of the score value to match.
     * 
     * 要匹配的分数值名称。
     */
    objective?: string;
}