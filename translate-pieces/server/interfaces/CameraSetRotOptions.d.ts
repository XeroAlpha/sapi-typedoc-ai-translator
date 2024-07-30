/* IMPORT */ import { CameraEaseOptions, Vector2, Vector3 } from '../index';

/**
 * Options for setting camera rotation.
 * 
 * 设置相机旋转的角度选项。
 */
export interface CameraSetRotOptions {
    easeOptions?: CameraEaseOptions;
    location?: Vector3;
    rotation: Vector2;
}