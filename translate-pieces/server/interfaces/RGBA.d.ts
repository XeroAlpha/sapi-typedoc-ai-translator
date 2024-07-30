/* IMPORT */ import { RGB } from '../index';

/**
 * Represents a fully customizable color within Minecraft.
 * 
 * 表示 Minecraft 中可完全自定义的颜色。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface RGBA extends RGB {
    /**
     * @remarks
     * Determines a color's alpha (opacity) component. Valid values
     * are between 0 (transparent) and 1.0 (opaque).
     * 
     * 确定颜色的 alpha（不透明度）分量。有效值介于 0（透明）到 1.0（不透明）之间。
     */
    alpha: number;
}