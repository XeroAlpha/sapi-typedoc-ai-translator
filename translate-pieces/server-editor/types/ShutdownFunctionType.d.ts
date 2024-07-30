/* IMPORT */ import { IPlayerUISession } from '../index';

/**
 * Callback type when an extension instance is shutdown for a
 * given player. Used for performing any final work or clean up
 * that can't be handled automatically via Disposables.
 * 
 * 当为指定玩家关闭扩展实例时的回调类型。用于执行任何最终工作或清理操作，
 * 这些操作无法通过 Disposables 自动处理。
 */
export type ShutdownFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => void;