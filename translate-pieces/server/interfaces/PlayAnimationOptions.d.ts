/**
 * Contains additional options for how an animation is played.
 * 
 * 包含播放动画的附加选项。
 */
export interface PlayAnimationOptions {
    /**
     * @remarks
     * Amount of time to fade out after an animation stops.
     * 
     * 动画停止后淡出的时间量。
     */
    blendOutTime?: number;
    /**
     * @remarks
     * Specifies a controller to use that has been defined on the
     * entity.
     * 
     * 指定实体上定义的控制器。
     */
    controller?: string;
    /**
     * @remarks
     * Specifies the state to transition to.
     * 
     * 指定要转换到的状态。
     */
    nextState?: string;
    /**
     * @remarks
     * A list of players the animation will be visible to.
     * 
     * 动画可见的玩家列表。
     */
    players?: string[];
    /**
     * @remarks
     * Specifies a Molang expression for when this animation should
     * complete.
     * 
     * 指定此动画应完成时的 Molang 表达式。
     */
    stopExpression?: string;
}