/* IMPORT */ import { BlockComponentRegistry, ItemComponentRegistry } from '../index';

/**
 * @rc
 * Contains information and methods that can be used at the
 * initialization of the scripting environment for a World.
 * Also, use the supplied blockRegistry object to register
 * block custom components within the scope of the World
 * Initialize execution.
 * 
 * 包含在世界脚本环境初始化时可以使用的相关信息和方法。
 * 同时，利用提供的 blockComponentRegistry 对象，在世界初始化执行的范围内注册方块自定义组件。
 */
export class WorldInitializeBeforeEvent {
    private constructor();
    readonly blockComponentRegistry: BlockComponentRegistry;
    /**
     * @remarks
     * Provides the functionality for registering custom components
     * for items.
     * 
     * 提供了为物品注册自定义组件的功能。
     */
    readonly itemComponentRegistry: ItemComponentRegistry;
}