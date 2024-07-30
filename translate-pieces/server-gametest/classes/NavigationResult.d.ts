/* IMPORT */ import { minecraftserver } from '../index';

export class NavigationResult {
    private constructor();
    readonly isFullPath: boolean;
    /**
     * @remarks
     * Retrieves the path as an array of Vector3 points.
     * 
     * 获取路径，以 Vector3 点数组形式。
     */
    getPath(): minecraftserver.Vector3[];
}