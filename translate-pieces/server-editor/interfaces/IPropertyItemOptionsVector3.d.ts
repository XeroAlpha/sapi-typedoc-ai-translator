/* IMPORT */ import { IPropertyItemOptions } from '../index';

export interface IPropertyItemOptionsVector3 extends IPropertyItemOptions {
    /**
     * @remarks
     * The max possible value for the X axis. By default
     * Number.MAX_SAFE_INTEGER
     * 
     * X 轴的最大可能值，默认为 Number.MAX_SAFE_INTEGER
     */
    maxX?: number;

    /**
     * @remarks
     * The max possible value for the Y axis. By default
     * Number.MAX_SAFE_INTEGER
     * 
     * Y 轴的最大可能值，默认为 Number.MAX_SAFE_INTEGER
     */
    maxY?: number;

    /**
     * @remarks
     * The max possible value for the z axis. By default
     * Number.MAX_SAFE_INTEGER
     * 
     * Z 轴的最大可能值，默认为 Number.MAX_SAFE_INTEGER
     */
    maxZ?: number;

    /**
     * @remarks
     * The min possible value for the X axis. By default
     * Number.MIN_SAFE_INTEGER
     * 
     * X 轴的最小可能值，默认为 Number.MIN_SAFE_INTEGER
     */
    minX?: number;

    /**
     * @remarks
     * The min possible value for the Y axis. By default
     * Number.MIN_SAFE_INTEGER
     * 
     * Y 轴的最小可能值，默认为 Number.MIN_SAFE_INTEGER
     */
    minY?: number;

    /**
     * @remarks
     * The min possible value for the Z axis. By default
     * Number.MIN_SAFE_INTEGER
     * 
     * Z 轴的最小可能值，默认为 Number.MIN_SAFE_INTEGER
     */
    minZ?: number;
}