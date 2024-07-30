/* IMPORT */ import { CustomComponentInvalidRegistryError, CustomComponentNameError, ItemCustomComponent, ItemCustomComponentAlreadyRegisteredError, ItemCustomComponentReloadNewComponentError, ItemCustomComponentReloadNewEventError, ItemCustomComponentReloadVersionError, minecraftcommon } from '../index';

/**
 * @rc
 * Provides the functionality for registering custom components
 * for items.
 * 
 * 提供了注册物品自定义组件的功能。
 */
export class ItemComponentRegistry {
    private constructor();
    /**
     * @remarks
     * Registers an item custom component that can be used in item
     * JSON configuration.
     * 
     * 注册可在物品 JSON 配置中使用的物品自定义组件。
     *
     * @param name
     * The id that represents this custom component. Must have a
     * namespace. This id can be specified in a item's JSON
     * configuration under the 'minecraft:custom_components' item
     * component.
     * 
     * 代表此自定义组件的 ID。必须具有命名空间。此 ID 可以在物品的 JSON 配置中，在 'minecraft:custom_components' 物品组件下指定。
     * @param itemCustomComponent
     * The collection of event functions that will be called when
     * the event occurs on an item using this custom component id.
     * 
     * 当使用此自定义组件 ID 的物品发生事件时将调用的事件函数集合。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link CustomComponentInvalidRegistryError}
     * 
     * {@link CustomComponentNameError}
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link ItemCustomComponentAlreadyRegisteredError}
     * 
     * {@link ItemCustomComponentReloadNewComponentError}
     * 
     * {@link ItemCustomComponentReloadNewEventError}
     * 
     * {@link ItemCustomComponentReloadVersionError}
     */
    registerCustomComponent(name: string, itemCustomComponent: ItemCustomComponent): void;
}