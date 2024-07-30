/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Interface used to specify the options when a clipboard item
 * is being written to the world
 * 
 * 用于指定将剪贴板项写入世界时选项的接口。
 */
export interface ClipboardWriteOptions {
    /**
     * @remarks
     * The anchor is a unit vector representation of the side or
     * corner of the Clipboard Item to be written to the world.
     * `{0, 0, 0}` represents the center of the Clipboard item,
     * `{0, 1, 0}` represents the top, `{-1, -1, -1}` represents
     * the bottom/back/left corner, etc
     * The anchor is used in conjunction with the item size to
     * determine the object relative anchor point where the object
     * will be applied in the world.
     * Values for the X/Y/Z components should be within the range
     * `(-1 <= X/Y/Z <=1)`
     * 
     * 锚点是一个单位向量，表示要写入世界的剪贴板项的一侧或一角。
     * `{0, 0, 0}` 表示剪贴板项的中心，`{0, 1, 0}` 表示顶部，
     * `{-1, -1, -1}` 表示底部/背面/左角等。
     * 锚点与项大小一起用来确定对象相对于世界的应用位置。
     * X/Y/Z 组件的值应在范围内 `(-1 <= X/Y/Z <=1)`。
     */
    anchor?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum which represents the axis (or combination of axis')
     * along which the item should be mirrored
     * - X
     * - Z
     * - XZ
     * 
     * 一个枚举，表示沿哪个轴（或组合轴）对项进行镜像。
     * - X
     * - Z
     * - XZ
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    /**
     * @remarks
     * A position offset which should be applied to the paste
     * location while the clipboard item is being written
     * 
     * 在写入剪贴板项时应用于粘贴位置的位置偏移量。
     */
    offset?: minecraftserver.Vector3;
    /**
     * @remarks
     * An enum representing the rotation around the Y-Axis which
     * should be applied while the clipboard item is being written
     * 
     * 一个枚举，表示在写入剪贴板项时应应用的绕 Y 轴的旋转。
     */
    rotation?: minecraftserver.StructureRotation;
}