/**
 * Optional parameter definition for RegisterEditorExtension
 * function Allows the extension registrar to specify optional
 * textual description and notes which would be visible through
 * the extension manager
 * 
 * RegisterEditorExtension 函数的可选参数定义。
 * 允许扩展注册器指定可选的文字描述和备注，这些描述和备注将通过扩展管理器可见。
 */
export interface IRegisterExtensionOptionalParameters {
    /**
     * @remarks
     * Description of the extension.
     * 
     * 扩展的描述。
     */
    description?: string;
    /**
     * @remarks
     * Additional notes and description of the extension.
     * 
     * 扩展的附加备注和描述。
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom group identifier that will be used for
     * all Modal Tools created from the registered extension.
     * 
     * 一个可选的自定义组标识符，将用于从已注册扩展创建的所有模态工具。
     */
    toolGroupId?: string;
}