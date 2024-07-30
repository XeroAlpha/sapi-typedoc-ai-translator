/* IMPORT */ import { EventSink, IPropertyPane, KeyBinding, KeyBindingInfo, ModalToolLifecycleEventPayload, SupportedKeyboardActionTypes, SupportedMouseActionTypes } from '../index';

export interface IModalTool {
    /**
     * @remarks
     * Unique ID for the tool
     * 
     * 工具的唯一ID
     */
    readonly id: string;
    /**
     * @remarks
     * Provides lifecycle activation events for a modal tool
     * 
     * 为模态工具提供生命周期激活事件
     */
    onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;
    /**
     * Binds the property pane to the modal tool.
     * 
     * 将属性面板绑定到模态工具。
     * 
     * @param pane - The property pane to be bound.
     */
    bindPropertyPane(pane: IPropertyPane): void;
    /**
     * Releases resources and cleans up the tool.
     * 
     * 释放资源并清理工具。
     */
    dispose(): void;
    /**
     * Hides the modal tool from view.
     * 
     * 隐藏模态工具使其不可见。
     */
    hide(): void;
    /**
     * Registers a keyboard action binding with optional information.
     * 
     * 注册键盘动作绑定，并可选地提供附加信息。
     * 
     * @param action - The type of keyboard action.
     * @param binding - The key binding details.
     * @param info - Optional information about the key binding.
     */
    registerKeyBinding(action: SupportedKeyboardActionTypes, binding: KeyBinding, info?: KeyBindingInfo): void;
    /**
     * Registers a mouse button action binding.
     * 
     * 注册鼠标按钮动作绑定。
     * 
     * @param action - The type of mouse button action.
     */
    registerMouseButtonBinding(action: SupportedMouseActionTypes): void;
    /**
     * Registers a mouse drag action binding.
     * 
     * 注册鼠标拖动动作绑定。
     * 
     * @param action - The type of mouse drag action.
     */
    registerMouseDragBinding(action: SupportedMouseActionTypes): void;
    /**
     * Registers a mouse wheel action binding.
     * 
     * 注册鼠标滚轮动作绑定。
     * 
     * @param action - The type of mouse wheel action.
     */
    registerMouseWheelBinding(action: SupportedMouseActionTypes): void;
    /**
     * Displays the modal tool.
     * 
     * 显示模态工具。
     */
    show(): void;
    /**
     * Removes all registered input bindings.
     * 
     * 移除所有已注册的输入绑定。
     */
    unregisterInputBindings(): void;
}