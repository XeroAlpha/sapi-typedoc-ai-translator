/* IMPORT */ import { BlockComponentEntityFallOnEvent, BlockComponentOnPlaceEvent, BlockComponentPlayerDestroyEvent, BlockComponentPlayerInteractEvent, BlockComponentPlayerPlaceBeforeEvent, BlockComponentRandomTickEvent, BlockComponentStepOffEvent, BlockComponentStepOnEvent, BlockComponentTickEvent } from '../index';

/**
 * @rc
 * Contains a set of events that will be raised for a block.
 * This object must be bound using the BlockRegistry.
 * 
 * 包含一组针对方块触发的事件。此对象必须通过 BlockRegistry 进行绑定。
 */
export interface BlockCustomComponent {
    /**
     * @remarks
     * This function will be called before a player places the
     * block.
     *
     * 在玩家放置方块之前调用此函数。
     */
    beforeOnPlayerPlace?: (arg: BlockComponentPlayerPlaceBeforeEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity falls onto the
     * block that this custom component is bound to.
     *
     * 当实体落到绑定了此自定义组件的方块上时调用此函数。
     */
    onEntityFallOn?: (arg: BlockComponentEntityFallOnEvent) => void;
    /**
     * @remarks
     * This function will be called when the block that this custom
     * component is bound to is placed.
     *
     * 当绑定了此自定义组件的方块被放置时调用此函数。
     */
    onPlace?: (arg: BlockComponentOnPlaceEvent) => void;
    /**
     * @remarks
     * This function will be called when a player destroys a
     * specific block.
     *
     * 当玩家破坏特定方块时调用此函数。
     */
    onPlayerDestroy?: (arg: BlockComponentPlayerDestroyEvent) => void;
    /**
     * @remarks
     * This function will be called when a player sucessfully
     * interacts with the block that this custom component is bound
     * to.
     *
     * 当玩家成功与绑定了此自定义组件的方块交互时调用此函数。
     */
    onPlayerInteract?: (arg: BlockComponentPlayerInteractEvent) => void;
    /**
     * @remarks
     * This function will be called when a block randomly ticks.
     *
     * 当方块随机刻更新时调用此函数。
     */
    onRandomTick?: (arg: BlockComponentRandomTickEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps off the
     * block that this custom component is bound to.
     *
     * 当实体离开绑定了此自定义组件的方块时调用此函数。
     */
    onStepOff?: (arg: BlockComponentStepOffEvent) => void;
    /**
     * @remarks
     * This function will be called when an entity steps onto the
     * block that this custom component is bound to.
     *
     * 当实体踏上绑定了此自定义组件的方块时调用此函数。
     */
    onStepOn?: (arg: BlockComponentStepOnEvent) => void;
    /**
     * @remarks
     * This function will be called when a block ticks.
     *
     * 当方块刻更新时调用此函数。
     */
    onTick?: (arg: BlockComponentTickEvent) => void;
}