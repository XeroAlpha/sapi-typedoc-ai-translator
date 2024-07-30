/**
 * Describes how the cursor targets a point on the screen.
 * 
 * 描述光标如何定位屏幕上的点。
 */
export enum CursorTargetMode {
    /**
     * @remarks
     * Target a nearest block.
     * 
     * 定位最近的方块。
     */
    Block = 0,
    /**
     * @remarks
     * Targets the face of a nearest block.
     * 
     * 定位最近方块的一个面。
     */
    Face = 1,
}