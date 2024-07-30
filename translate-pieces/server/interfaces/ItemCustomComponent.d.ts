/* IMPORT */ import { ItemComponentBeforeDurabilityDamageEvent, ItemComponentCompleteUseEvent, ItemComponentConsumeEvent, ItemComponentHitEntityEvent, ItemComponentMineBlockEvent, ItemComponentUseEvent, ItemComponentUseOnEvent } from '../index';

/**
 * @rc
 * Contains a set of events that will be raised for an item.
 * This object must be bound using the ItemComponentRegistry.
 * 
 * 包含一组针对物品触发的事件。此对象必须通过 ItemComponentRegistry 进行绑定。
 */
export interface ItemCustomComponent {
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is hitting an entity and about to take durability
     * damage.
     * 
     * 当包含此组件的物品击中实体并即将承受耐久度损失时调用此函数。
     */
    onBeforeDurabilityDamage?: (arg: ItemComponentBeforeDurabilityDamageEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component's use duration was completed.
     * 
     * 当包含此组件的物品使用持续时间完成时调用此函数。
     */
    onCompleteUse?: (arg: ItemComponentCompleteUseEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is eaten by an entity.
     * 
     * 当包含此组件的物品被实体食用时调用此函数。
     */
    onConsume?: (arg: ItemComponentConsumeEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to hit another entity.
     * 
     * 当使用包含此组件的物品击中另一个实体时调用此函数。
     */
    onHitEntity?: (arg: ItemComponentHitEntityEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used to mine a block.
     * 
     * 当使用包含此组件的物品挖掘方块时调用此函数。
     */
    onMineBlock?: (arg: ItemComponentMineBlockEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used by a player.
     * 
     * 当玩家使用包含此组件的物品时调用此函数。
     */
    onUse?: (arg: ItemComponentUseEvent) => void;
    /**
     * @remarks
     * This function will be called when an item containing this
     * component is used on a block.
     * 
     * 当在方块上使用包含此组件的物品时调用此函数。
     */
    onUseOn?: (arg: ItemComponentUseOnEvent) => void;
}