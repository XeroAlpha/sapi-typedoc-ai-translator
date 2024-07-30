/**
 * Base class for downstream Component implementations.
 * 
 * 下游 Component 实现的基础类。
 */
export class Component {
    private constructor();
    /**
     * @remarks
     * Identifier of the component.
     * 
     * 组件的标识符。
     */
    readonly typeId: string;
    /**
     * @remarks
     * Returns whether the component is valid. A component is
     * considered valid if its owner is valid, in addition to any
     * addition to any additional validation required by the
     * component.
     * 
     * 返回组件是否有效。如果组件的所有者有效，并且满足组件所需的任何额外验证要求，则认为该组件有效。
     * 
     * @returns
     * Whether the component is valid.
     * 
     * 组件是否有效。
     */
    isValid(): boolean;
}