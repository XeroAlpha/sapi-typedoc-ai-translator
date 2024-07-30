/**
 * @beta
 * Description of the resulting intersection test on two
 * BlockVolume objects
 * 
 * 两个 BlockVolume 对象相交测试的结果描述。
 */
export enum BlockVolumeIntersection {
    /**
     * @remarks
     * Volume B has no intersection points with Volume A
     * 
     * 体积 B 与体积 A 没有交点。
     */
    Disjoint = 0,
    /**
     * @remarks
     * Volume B resides completely inside Volume A
     * 
     * 体积 B 完全位于体积 A 内部。
     */
    Contains = 1,
    /**
     * @remarks
     * Volume B partially intersects Volume A
     * 
     * 体积 B 部分与体积 A 相交。
     */
    Intersects = 2,
}