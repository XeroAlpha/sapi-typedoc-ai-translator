/* IMPORT */ import { Action, ActionID } from '../index';

/**
 * A registered action is an action that has been registered
 * with the action manager system and has a unique ID
 * representing the action now. An action must be registered
 * before it can be used in other systems.
 * 
 * 已注册操作是已向操作管理器系统注册并具有唯一ID代表当前操作的操作。
 * 在其他系统中使用前，必须先注册操作。
 */
export type RegisteredAction<T extends Action> = T & ActionID;