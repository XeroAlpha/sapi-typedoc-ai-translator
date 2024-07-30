/* IMPORT */ import { Selection } from '../index';

/**
 * The SelectionManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management of all
 * {@link Selection} objects, and provides the user the ability
 * to create new {@link Selection} objects for use within an
 * extension.
 * 
 * `SelectionManager`（可通过 {@link ExtensionContext} 访问）负责管理所有
 * {@link Selection} 对象，并提供用户在扩展中创建新的
 * {@link Selection} 对象的能力。
 */
export class SelectionManager {
    private constructor();
    /**
     * @remarks
     * The primary {@link Selection} object is always present (even
     * if it's empty) and cannot be deleted.  This object
     * represents the main selection object which is always
     * accessible through the UI, and by default is synchronized
     * between the client and server.
     *
     * @throws This property can throw when used.
     * 
     * 主要的 {@link Selection} 对象始终存在（即使它是空的），并且不能被删除。
     * 此对象代表主要的选择对象，该对象始终可以通过用户界面访问，默认情况下在客户端和服务器之间同步。
     *
     * @throws 使用此属性时可能会抛出异常。
     */
    readonly selection: Selection;
    /**
     * @remarks
     * Create a new, empty {@link Selection} object
     *
     * This function can't be called in read-only mode.
     *
     * @throws This function can throw errors.
     * 
     * 创建一个新的空 {@link Selection} 对象。
     *
     * 此函数不能在只读模式下调用。
     *
     * @throws 此函数可能抛出错误。
     */
    create(): Selection;
}