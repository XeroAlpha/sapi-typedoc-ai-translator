/* IMPORT */ import { BlockCustomComponent, BlockCustomComponentAlreadyRegisteredError, BlockCustomComponentReloadNewComponentError, BlockCustomComponentReloadNewEventError, BlockCustomComponentReloadVersionError, CustomComponentInvalidRegistryError, CustomComponentNameError, minecraftcommon } from '../index';

/**
 * @rc
 */
export class BlockComponentRegistry {
    private constructor();
    /**
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     * 
     * {@link BlockCustomComponentAlreadyRegisteredError}
     * 
     * 已注册自定义组件错误
     * 
     * {@link BlockCustomComponentReloadNewComponentError}
     * 
     * 重新加载新组件时的自定义组件错误
     * 
     * {@link BlockCustomComponentReloadNewEventError}
     * 
     * 重新加载新事件时的自定义组件错误
     * 
     * {@link BlockCustomComponentReloadVersionError}
     * 
     * 自定义组件版本重载错误
     * 
     * {@link CustomComponentInvalidRegistryError}
     * 
     * 无效注册表的自定义组件错误
     * 
     * {@link CustomComponentNameError}
     * 
     * 自定义组件名称错误
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * Minecraft 引擎错误
     */
    registerCustomComponent(name: string, customComponent: BlockCustomComponent): void;
}