/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * @rc
 * When added, this movement control allows the mob to glide.
 * 
 * 当添加后，此移动控制使生物能够滑翔。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementGlideComponent extends EntityBaseMovementComponent {
    private constructor();
    /**
     * @remarks
     * Speed in effect when the entity is turning.
     *
     * @throws This property can throw when used.
     * 
     * @remarks
     * 生物转向时生效的速度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly speedWhenTurning: number;
    /**
     * @remarks
     * Start speed during a glide.
     *
     * @throws This property can throw when used.
     * 
     * @remarks
     * 滑翔开始时的速度。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly startSpeed: number;
    static readonly componentId = 'minecraft:movement.glide';
}