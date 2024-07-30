/**
 * Contains additional options for registering a script event
 * event callback.
 * 
 * 包含用于注册脚本事件回调的额外选项。
 */
export interface ScriptEventMessageFilterOptions {
    /**
     * @remarks
     * Optional list of namespaces to filter inbound script event
     * messages.
     * 
     * 可选的命名空间列表，用于过滤传入的脚本事件消息。
     */
    namespaces: string[];
}