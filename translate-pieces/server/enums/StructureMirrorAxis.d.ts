/**
 * Specifies how a structure should be mirrored when placed.
 * 
 * 指定放置结构时应如何镜像。
 */
export enum StructureMirrorAxis {
    /**
     * @remarks
     * No mirroring.
     * 
     * 无镜像。
     */
    None = 'None',
    /**
     * @remarks
     * Structure is mirrored across the X axis.
     * 
     * 结构沿 X 轴镜像。
     */
    X = 'X',
    /**
     * @remarks
     * Structure is mirrored across both the X and Z axes.
     * 
     * 结构沿 X 和 Z 轴镜像。
     */
    XZ = 'XZ',
    /**
     * @remarks
     * Structure is mirrored across the Z axis.
     * 
     * 结构沿 Z 轴镜像。
     */
    Z = 'Z',
}