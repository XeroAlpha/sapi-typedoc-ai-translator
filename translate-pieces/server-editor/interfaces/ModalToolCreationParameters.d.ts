/**
 * Parameters for creating a modal tool in the tool container
 * 
 * 在工具容器中创建模态工具的参数
 */
export interface ModalToolCreationParameters {
    /**
     * @remarks
     * Icon, if any (from resource pack on client)
     * 
     * 图标（如果有，来自客户端的资源包）
     */
    icon?: string;
    /**
     * @remarks
     * Modal input context identifier
     * 
     * 模态输入上下文标识符
     */
    inputContextId?: string;
    /**
     * @remarks
     * Localized text label for modal input context
     * 
     * 模态输入上下文的本地化文本标签
     */
    inputContextLabel?: string;
    /**
     * @remarks
     * Title of the tool
     * 
     * 工具的标题
     */
    title: string;
    /**
     * @remarks
     * Tooltip description of the toll
     * 
     * 工具提示描述
     */
    tooltip?: string;
}