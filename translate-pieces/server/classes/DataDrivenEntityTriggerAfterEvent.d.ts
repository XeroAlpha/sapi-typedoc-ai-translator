/* IMPORT */ import { DefinitionModifier, Entity } from '../index';

/**
 * Contains information related to firing of a data driven
 * entity event - for example, the minecraft:ageable_grow_up
 * event on a chicken.
 * 
 * 包含与触发数据驱动实体事件相关的信息，例如鸡身上的
 * `minecraft:ageable_grow_up` 事件。
 */
export class DataDrivenEntityTriggerAfterEvent {
    private constructor();
    /**
     * @remarks
     * Entity that the event triggered on.
     * 
     * 触发事件的实体。
     */
    readonly entity: Entity;
    /**
     * @remarks
     * Name of the data driven event being triggered.
     * 
     * 被触发的数据驱动事件的名称。
     */
    readonly eventId: string;
    /**
     * @remarks
     * An updateable list of modifications to component state that
     * are the effect of this triggered event.
     * 
     * 受此触发事件影响的组件状态修改的可更新列表。
     */
    getModifiers(): DefinitionModifier[];
}