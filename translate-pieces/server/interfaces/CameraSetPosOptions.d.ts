/* IMPORT */ import { CameraEaseOptions, Vector3 } from '../index';

/**
 * Options for setting the camera position.
 * 
 * 设置相机位置的选项。
 */
export interface CameraSetPosOptions {
    easeOptions?: CameraEaseOptions;
    /**
     * The target location the camera should face.
     * 
     * 相机应面对的目标位置。
     */
    facingLocation: Vector3;
    /**
     * The new location of the camera.
     * 
     * 相机的新位置。
     */
    location?: Vector3;
}