/* IMPORT */ import { GraphicsSettingsPropertyTypeMap } from '../index';

/**
 * Settings category that manages {@link
 * GraphicsSettingsProperty} configurations.
 * 
 * 管理 {@link GraphicsSettingsProperty} 配置的设置类别。
 */
export class GraphicsSettings {
    private constructor();
    /**
     * @remarks
     * Retrieves a graphics settings property value.
     * 
     * 获取图形设置属性值。
     *
     * @param property
     * Property identifier.
     * 
     * 属性标识符。
     * @returns
     * Returns the property value if it is found. If the property
     * is not available, it returns undefined.
     * 
     * 如果找到属性，则返回其值。如果属性不可用，则返回 undefined。
     */
    get<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T): GraphicsSettingsPropertyTypeMap[T] | undefined;
    /**
     * @remarks
     * Retrieves all graphics settings properties and their values.
     * 
     * 获取所有图形设置属性及其值。
     *
     * @returns
     * Returns a property value map for all available properties.
     * 
     * 返回所有可用属性的值映射。
     */
    getAll(): GraphicsSettingsPropertyTypeMap;
    /**
     * @remarks
     * Modifies a graphics settings property value.
     * 
     * 修改图形设置属性值。
     *
     * @param property
     * Property identifier.
     * 
     * 属性标识符。
     * @param value
     * New property value.
     * 
     * 新的属性值。
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    set<T extends keyof GraphicsSettingsPropertyTypeMap>(property: T, value: GraphicsSettingsPropertyTypeMap[T]): void;
    /**
     * @remarks
     * Modify multiple graphics settings properties.
     * 
     * 修改多个图形设置属性。
     *
     * @param properties
     * Property map to set available property values. If the
     * property is not defined in the map, it will not be modified.
     * 
     * 可用属性值的属性映射。如果映射中未定义属性，则不会对其进行修改。
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setAll(properties: GraphicsSettingsPropertyTypeMap): void;
}