/* IMPORT */ import { ActivationFunctionType, Extension, IRegisterExtensionOptionalParameters, ShutdownFunctionType } from '../index';

/**
 * @remarks
 * Registers an editor extension into Minecraft. This function
 * calls underlying functionality to register an extension but
 * provides helpful and contextual wrappers for individual
 * client lifetimes. The onActivation function is called
 * whenever a client joins a session, while the shutdown is
 * called when a client leaves. There may be other
 * circumstances in which these are called as well based on
 * client state that is an implementation detail of the system.
 * 
 * 注册编辑器扩展到 Minecraft 中。此函数调用底层功能来注册扩展，
 * 但为单个客户端生命周期提供了有用且上下文相关的包装。每当客户端加入会话时，
 * 将调用 onActivation 函数；当客户端离开时，将调用 shutdown 函数。根据系统的实现细节，
 * 还可能基于客户端状态在其他情况下调用这些函数。
 *
 */
export declare function registerEditorExtension<PerPlayerStorageType = Record<string, never>>(
    extensionName: string,
    activationFunction: ActivationFunctionType<PerPlayerStorageType>,
    shutdownFunction: ShutdownFunctionType<PerPlayerStorageType>,
    options?: IRegisterExtensionOptionalParameters,
): Extension;