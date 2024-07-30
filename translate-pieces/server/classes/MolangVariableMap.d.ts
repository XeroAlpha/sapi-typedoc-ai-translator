/* IMPORT */ import { RGB, RGBA, Vector3 } from '../index';

/**
 * Contains a set of additional variable values for further
 * defining how rendering and animations function.
 * 
 * 包含一组额外的变量值，用于进一步定义渲染和动画的功能。
 */
export class MolangVariableMap {
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     *
     * @throws This function can throw errors.
     * 
     * 将以下变量添加到 Molang：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * 
     * @throws 此函数可能抛出错误。
     */
    setColorRGB(variableName: string, color: RGB): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.r` - Red color value [0-1]
     * - `<variable_name>.g` - Green color value [0-1]
     * - `<variable_name>.b` - Blue color value [0-1]
     * - `<variable_name>.a` - Alpha (transparency) color value
     * [0-1]
     *
     * @throws This function can throw errors.
     * 
     * 将以下变量添加到 Molang：
     * - `<variable_name>.r` - 红色颜色值 [0-1]
     * - `<variable_name>.g` - 绿色颜色值 [0-1]
     * - `<variable_name>.b` - 蓝色颜色值 [0-1]
     * - `<variable_name>.a` - Alpha（透明度）颜色值 [0-1]
     * 
     * @throws 此函数可能抛出错误。
     */
    setColorRGBA(variableName: string, color: RGBA): void;
    /**
     * @remarks
     * Sets a numeric (decimal) value within the Molang variable
     * map.
     *
     * @param variableName
     * Name of the float-based number to set.
     * @param number
     * Value for the Molang-based variable to set.
     * @throws This function can throw errors.
     * 
     * 在 Molang 变量映射中设置数值（十进制）。
     * 
     * @param variableName
     * 要设置的基于浮点数的数字名称。
     * @param number
     * 要设置的基于 Molang 的变量的值。
     * @throws 此函数可能抛出错误。
     */
    setFloat(variableName: string, number: number): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.speed` - Speed number provided
     * - `<variable_name>.direction_x` - X value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_y` - Y value from the {@link
     * Vector3} provided
     * - `<variable_name>.direction_z` - Z value from the {@link
     * Vector3} provided
     *
     * @throws This function can throw errors.
     * 
     * 将以下变量添加到 Molang：
     * - `<variable_name>.speed` - 提供的速度数字
     * - `<variable_name>.direction_x` - 来自提供的 {@link Vector3} 的 X 值
     * - `<variable_name>.direction_y` - 来自提供的 {@link Vector3} 的 Y 值
     * - `<variable_name>.direction_z` - 来自提供的 {@link Vector3} 的 Z 值
     * 
     * @throws 此函数可能抛出错误。
     */
    setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void;
    /**
     * @remarks
     * Adds the following variables to Molang:
     * - `<variable_name>.x` - X value from the {@link Vector3}
     * provided
     * - `<variable_name>.y` - Y value from the {@link Vector3}
     * provided
     * - `<variable_name>.z` - Z value from the {@link Vector3}
     * provided
     *
     * @throws This function can throw errors.
     * 
     * 将以下变量添加到 Molang：
     * - `<variable_name>.x` - 来自提供的 {@link Vector3} 的 X 值
     * - `<variable_name>.y` - 来自提供的 {@link Vector3} 的 Y 值
     * - `<variable_name>.z` - 来自提供的 {@link Vector3} 的 Z 值
     * 
     * @throws 此函数可能抛出错误。
     */
    setVector3(variableName: string, vector: Vector3): void;
}