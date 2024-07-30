/* IMPORT */ import { Vector3 } from '../index';

/**
 * @beta
 * Contains additional options for searches for the
 * dimension.findNearestBiome API.
 * 
 * 包含 dimension.findNearestBiome API 搜索的附加选项。
 */
export interface BiomeSearchOptions {
    /**
     * @remarks
     * Bounding volume size to look within.
     * 
     * 要查找的边界体积大小。
     */
    boundingSize?: Vector3;
}