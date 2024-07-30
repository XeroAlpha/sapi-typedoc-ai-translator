/* IMPORT */ import { DimensionType } from '../index';

/**
 * Used for accessing all available dimension types.
 * 
 * 用于访问所有可用的维度类型。
 */
export class DimensionTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves a dimension type using a string-based identifier.
     * 
     * 使用基于字符串的标识符获取维度类型。
     */
    static get(dimensionTypeId: string): DimensionType | undefined;
    /**
     * @remarks
     * Retrieves an array of all dimension types.
     * 
     * 获取所有维度类型的数组。
     */
    static getAll(): DimensionType[];
}