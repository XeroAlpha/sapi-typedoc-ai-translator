/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Interface for properties used to attach cursors.
 * 
 * 用于附加光标的属性接口。
 */
export interface CursorAttachmentProperties {
    boundsFillColor?: minecraftserver.RGBA;
    /**
     * Color used to fill the bounding box.
     * 
     * 用于填充边界框的颜色。
     */
    boundsVisible?: boolean;
    /**
     * Determines if the bounding box is visible.
     * 
     * 决定边界框是否可见。
     */
    boundsWireframeColor?: minecraftserver.RGBA;
    /**
     * Wireframe color of the bounding box.
     * 
     * 边界框的线框颜色。
     */
    contentsFillColor?: minecraftserver.RGBA;
    /**
     * Color used to fill the cursor's content area.
     * 
     * 用于填充光标内容区域的颜色。
     */
    contentsWireframeColor?: minecraftserver.RGBA;
    /**
     * Wireframe color of the cursor's content area.
     * 
     * 光标内容区域的线框颜色。
     */
    mirror?: minecraftserver.StructureMirrorAxis;
    /**
     * Axis along which the structure is mirrored.
     * 
     * 结构被镜像的轴。
     */
    offset?: minecraftserver.Vector3;
    /**
     * Offset from the cursor's origin.
     * 
     * 光标原点的偏移量。
     */
    origin?: minecraftserver.Vector3;
    /**
     * Origin position of the cursor.
     * 
     * 光标的原点位置。
     */
    rotation?: minecraftserver.StructureRotation;
    /**
     * Rotation of the structure.
     * 
     * 结构的旋转。
     */
}