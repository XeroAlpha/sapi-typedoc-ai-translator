/* IMPORT */ import { CameraEaseOptions, Vector3 } from '../index';

/**
 * Options for setting the camera's location.
 * 
 * 设置相机位置的选项。
 */
export interface CameraSetLocationOptions {
    easeOptions?: CameraEaseOptions;
    /**
     * The new location of the camera.
     * 
     * 相机的新位置。
     */
    location: Vector3;
}