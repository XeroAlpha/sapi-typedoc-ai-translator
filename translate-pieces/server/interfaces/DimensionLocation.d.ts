/* IMPORT */ import { Dimension } from '../index';

/**
 * An exact coordinate within the world, including its
 * dimension and location.
 * 
 * 世界中确切的坐标，包括其维度和位置。
 */
export interface DimensionLocation {
    /**
     * @remarks
     * Dimension that this coordinate is associated with.
     * 
     * 此坐标所关联的维度。
     */
    dimension: Dimension;
    /**
     * @remarks
     * X component of this dimension-location.
     * 
     * 此维度-位置的X分量。
     */
    x: number;
    /**
     * @remarks
     * Y component of this dimension-location.
     * 
     * 此维度-位置的Y分量。
     */
    y: number;
    /**
     * @remarks
     * Z component of this dimension-location.
     * 
     * 此维度-位置的Z分量。
     */
    z: number;
}