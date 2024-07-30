/**
 * @beta
 * Operator represents a lower/upper bound structure for
 * expressing a potential range of numbers.
 * 
 * RangeComparison 接口表示用于表达潜在数字范围的下界/上界结构。
 */
export interface RangeComparison {
    /**
     * @remarks
     * Lower bound within a range.
     * 
     * 范围内的下界。
     */
    lowerBound: number;
    /**
     * @remarks
     * Upper bound within a range.
     * 
     * 范围内的上界。
     */
    upperBound: number;
}