/* IMPORT */ import { IPropertyItemBase, ImageResourceData } from '../index';

/**
 * A property item which supports Image properties
 * 
 * 支持图像属性的属性项。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IImagePropertyItem extends IPropertyItemBase {
    /**
     * @remarks
     * Height of the image.
     * 
     * 图像的高度。
     */
    readonly imageHeight: number;
    /**
     * @remarks
     * Width of the image.
     * 
     * 图像的宽度。
     */
    readonly imageWidth: number;
    /**
     * @remarks
     * Current value of the property item.
     * 
     * 属性项当前的值。
     */
    readonly value: Readonly<string | ImageResourceData>;
    /**
     * @remarks
     * Updates the size of the image.
     * 
     * 更新图像的尺寸。
     *
     * @param width
     * New width of the image.
     * 
     * 图像的新宽度。
     * @param height
     * New height of the image.
     * 
     * 图像的新高度。
     */
    resizeImage(width: number, height: number): void;
}