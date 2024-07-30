/* IMPORT */ import { CameraEaseOptions, Entity, Vector3 } from '../index';

/**
 * Options for setting the camera to face a specific direction.
 * 
 * 设置相机面向特定方向的选项。
 */
export interface CameraSetFacingOptions {
    easeOptions?: CameraEaseOptions;
    /**
     * The entity that the camera should face.
     * 
     * 相机应面向的实体。
     */
    facingEntity: Entity;
    /**
     * The location where the camera should be positioned.
     * 
     * 相机应定位的位置。
     */
    location?: Vector3;
}