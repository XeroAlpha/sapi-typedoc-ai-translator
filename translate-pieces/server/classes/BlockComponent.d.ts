/* IMPORT */ import { Block, Component } from '../index';

/**
 * Base type for components associated with blocks.
 * 
 * 与方块相关联的组件的基本类型。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockComponent extends Component {
    private constructor();
    /**
     * @remarks
     * Block instance that this component pertains to.
     * 
     * 此组件所关联的方块实例。
     */
    readonly block: Block;
}