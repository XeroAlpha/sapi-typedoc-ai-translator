/* IMPORT */ import { Trigger } from '../index';

/**
 * Contains a set of updates to the component definition state
 * of an entity.
 * 
 * 包含一组对实体组件定义状态的更新。
 */
export interface DefinitionModifier {
    /**
     * @remarks
     * Retrieves the list of component groups that will be added
     * via this definition modification.
     * 
     * 获取通过此定义修改将添加的组件组列表。
     */
    addedComponentGroups: string[];
    /**
     * @remarks
     * The list of component groups that will be removed via this
     * definition modification.
     * 
     * 将通过此定义修改移除的组件组列表。
     */
    removedComponentGroups: string[];
    /**
     * @beta
     * @remarks
     * The list of entity definition events that will be fired via
     * this update.
     * 
     * 将通过此更新触发的实体定义事件列表。
     */
    triggers: Trigger[];
}