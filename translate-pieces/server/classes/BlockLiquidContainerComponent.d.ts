/* IMPORT */ import { BlockComponent } from '../index';

/**
 * @beta
 * For blocks that can contain a liquid (e.g., a cauldron),
 * this is a base component for liquid containers.
 * 
 * 对于能够包含液体的方块（例如，炼药锅），这是液体容器的基本组件。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class BlockLiquidContainerComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * Relative fill level of the liquid container.
     *
     * This property can't be edited in read-only mode.
     *
     * 液体容器的相对填充水平。
     *
     * 此属性在只读模式下无法编辑。
     */
    fillLevel: number;
    /**
     * @remarks
     * Returns true if this reference to a liquid container is
     * still valid and contains the liquid of the type you have a
     * reference for (for example, if the block is unloaded, no
     * longer a liquid container or contains lava when you have a
     * potion container component, isValidLiquid will not be true.)
     *
     * @returns
     * True if this liquid container still exists, is valid and
     * contains the expected liquid type.
     * 
     * 如果指向液体容器的引用仍然有效且包含您有所指类型的液体，则返回 true（例如，如果方块未加载、不再是液体容器或者当您有一个药水容器组件时包含岩浆，isValidLiquid 将不会为 true）。
     *
     * @returns
     * 如果此液体容器仍然存在、有效并且包含预期的液体类型，则返回 true。
     */
    isValidLiquid(): boolean;
}