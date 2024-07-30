/* IMPORT */ import { EditorInputContext, KeyBinding, KeyBindingInfo, SupportedKeyboardActionTypes } from '../index';

/**
 * Interface for global input management.
 * 
 * 全局输入管理的接口。
 */

export interface IGlobalInputManager {
    /**
     * Registers a key binding.
     * 
     * 注册一个按键绑定。
     * 
     * @param inputContextId - The context ID of the input.
     * @param action - The supported keyboard action type.
     * @param binding - The key binding.
     * @param info - Optional information about the key binding.
     */
    registerKeyBinding(
        inputContextId: EditorInputContext,
        action: SupportedKeyboardActionTypes,
        binding: KeyBinding,
        info?: KeyBindingInfo,
    ): void;
}