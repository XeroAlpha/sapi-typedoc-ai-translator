/* IMPORT */ import { EasingType } from '../index';

/**
 * Contains options associated with a camera ease operation.
 * 
 * 包含与相机平滑操作相关的选项。
 */
export interface CameraEaseOptions {
    /**
     * @remarks
     * Time for the ease operation.
     * 
     * 平滑操作的时间。
     */
    easeTime?: number;
    /**
     * @remarks
     * Type of ease operation to use.
     * 
     * 要使用的平滑操作类型。
     */
    easeType?: EasingType;
}