/* IMPORT */ import { Action, RegisteredAction } from '../index';

/**
 * Binds actions to the client and manages their lifetime.
 * Action managers are managed on a per player basis since
 * client side UI is per player.
 * 
 * 将动作绑定到客户端并管理其生命周期。
 * 动作管理器按玩家进行管理，因为客户端用户界面是按玩家的。
 */
export interface ActionManager {
    /**
     * @remarks
     * The active tool ID
     * 
     * 当前活动工具的ID
     */
    activeToolId: string | undefined;
    /**
     * @remarks
     * Creates an action and registers it on the client
     * 
     * 创建一个动作并在客户端注册它。
     *
     * @param rawAction
     * The raw action to create. See ActionTypes for supported
     * parameters
     * 
     * 待创建的原始动作。参见 ActionTypes 以了解支持的参数。
     */
    createAction<T extends Action>(rawAction: T): RegisteredAction<T>;
}