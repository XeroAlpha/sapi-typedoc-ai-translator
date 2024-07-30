/**
 * An interface which defines the set of optional parameters
 * which can be used when calling the `registerEditorExtension`
 * function
 * 
 * 定义调用 `registerEditorExtension` 函数时可以使用的可选参数集的接口。
 */
export interface ExtensionOptionalParameters {
    /**
     * @remarks
     * An optional text description of the extension being
     * registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The description is meant to be a very short snappy one-liner
     * which quickly and uniquely identifies the extension
     * The length of the string is capped to 256 characters
     * 
     * 注册扩展的可选文本描述。
     * 这可以是一个直接的文字描述，或者是在扩展的资源包文本文件中本地化字符串的字符串标识符键。
     * 描述应该是非常简短且能快速唯一识别扩展的一行文字。
     * 字符串的长度被限制在256个字符以内。
     */
    description?: string;
    /**
     * @remarks
     * Optional notes for the extension being registered.
     * This can be a straight textual description or a string
     * identifier key for a localized string in the extension's
     * resource pack text files.
     * The notes section is meant to convey more detailed
     * information and notes (e.g. a link to the author's website)
     * The length of this string is capped to 1024 characters
     * 
     * 注册扩展的可选备注。
     * 这可以是一个直接的文字描述，或者是在扩展的资源包文本文件中本地化字符串的字符串标识符键。
     * 备注部分旨在传达更详细的信息和备注（例如，指向作者网站的链接）。
     * 此字符串的长度被限制在1024个字符以内。
     */
    notes?: string;
    /**
     * @remarks
     * An optional custom identifier that will be used for all
     * Modal Tools created from the registered extension.
     * The length of the string is capped to 256 characters
     * 
     * 一个可选的自定义标识符，用于从注册的扩展创建的所有模态工具。
     * 字符串的长度被限制在256个字符以内。
     */
    toolGroupId?: string;
}