/* IMPORT */ import { Component, Entity } from '../index';

/**
 * Base class for downstream entity components.
 * 
 * 下游实体组件的基础类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityComponent extends Component {
    private constructor();
    /**
     * @remarks
     * The entity that owns this component. The entity will be
     * undefined if it has been removed.
     * 
     * 拥有此组件的实体。如果实体已被移除，则该实体将为未定义。
     */
    readonly entity: Entity;
}