export interface MoveToOptions {
    /**
     * @remarks
     * Determines if the entity should face the target while moving.
     * 
     * 决定实体在移动时是否面向目标。
     */
    faceTarget?: boolean;
    /**
     * @remarks
     * Sets the speed at which the entity moves towards the target.
     * 
     * 设置实体向目标移动的速度。
     */
    speed?: number;
}