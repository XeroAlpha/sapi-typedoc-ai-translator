/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * @rc
 * When added, this move control causes the mob to sway side to
 * side giving the impression it is swimming.
 * 
 * 添加后，此移动控制会使实体左右摇摆，给人以游泳的印象。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementSwayComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Amplitude of the sway motion.
     *
     * @throws This property can throw when used.
     * 
     * 摇摆运动的幅度。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly swayAmplitude: number;
    /**
     * @remarks
     * Amount of sway frequency.
     *
     * @throws This property can throw when used.
     * 
     * 摇摆频率的数量。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly swayFrequency: number;
    static readonly componentId = 'minecraft:movement.sway';
}