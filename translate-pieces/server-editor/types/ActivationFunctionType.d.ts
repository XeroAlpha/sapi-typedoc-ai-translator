/* IMPORT */ import { IDisposable, IPlayerUISession } from '../index';

/**
 * Callback type when an extension instance is activated for a
 * given player. It is expected to return an array of
 * disposables that will automatically be cleaned up on
 * shutdown.
 * 
 * 当为指定玩家激活扩展实例时的回调类型。期望此回调返回一个可释放对象数组，在关闭时这些对象会自动被清理。
 */
export type ActivationFunctionType<PerPlayerStorageType> = (
    uiSession: IPlayerUISession<PerPlayerStorageType>,
) => IDisposable[];