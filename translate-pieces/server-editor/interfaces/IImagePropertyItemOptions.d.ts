/* IMPORT */ import { IPropertyItemOptionsBase, LayoutAlignment } from '../index';

/**
 * Optional properties for Image property item
 * 
 * 图像属性项的可选属性
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IImagePropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * Alignment of the image in the container. If not defined,
     * LayoutAlignment.Left is used.
     * 
     * 图像在容器中的对齐方式。如果不定义，默认使用 LayoutAlignment.Left。
     */
    alignment?: LayoutAlignment;
    /**
     * @remarks
     * Size of the image. If undefined, defaults to 10.
     * 
     * 图像的大小。如果未定义，默认值为 10。
     */
    imageSize?:
        | number
        | {
              width: number;
              height: number;
          };
    /**
     * @remarks
     * Called when image is clicked.
     * 
     * 当图像被点击时调用。
     */
    onClick?: (x: number, y: number) => void;
}