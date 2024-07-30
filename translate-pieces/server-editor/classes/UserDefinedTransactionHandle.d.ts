/* IMPORT */ import { TransactionManager, UserDefinedTransactionHandlerId, registerUserDefinedTransactionHandler } from '../index';

/**
 * A strongly typed transaction handle to enforce type safety
 * when adding user defined transactions.<br> This transaction
 * handle becomes the context for adding the transaction to the
 * transaction manager.<br> You can obtain one of these handles
 * by calling {@link registerUserDefinedTransactionHandler}
 * 
 * 一个强类型的事务句柄，在添加用户定义的事务时强制执行类型安全。<br>
 * 此事务句柄成为将事务添加到事务管理器上下文的一部分。<br>
 * 你可以通过调用 {@link registerUserDefinedTransactionHandler}
 * 来获得这样的句柄之一。
 */
export declare class UserDefinedTransactionHandle<T> {
    /**
     * @remarks
     * Constructs a new instance of the
     * `UserDefinedTransactionHandle` class
     * 
     * 构建 `UserDefinedTransactionHandle` 类的新实例
     */
    constructor(nativeHandle: UserDefinedTransactionHandlerId, transactionManager: TransactionManager);
    /**
     * @remarks
     * Add a user defined transaction operation to the transaction
     * manager with a payload of the specified type. This allows
     * the extension to open a transaction, and insert custom data
     * objects into the transaction log which are stored until an
     * undo or redo event occurs. The payload data added here is
     * stored and then passed to the undo/redo handlers (registered
     * with {@link registerUserDefinedTransactionHandler}) when an
     * undo/redo event is requested. NOTE:<br> Transactions can
     * contain multiple operations - you can open a transaction and
     * add any (reasonable) number of operations to it (of the same
     * or differing types) before committing to the transaction
     * log. NOTE/WARNING:<br> The payload data is serialized to
     * JSON before being inserted into the transaction log and the
     * underlying implementation uses the JSON.stringify() function
     * to serialize the data. Any non-primitive data, such as
     * classes or minecraft native objects will not serialize to
     * JSON properly, so you should avoid using them as payload
     * data.
     * 
     * 将具有指定类型负载的用户定义事务操作添加到事务管理器。
     * 这允许扩展程序开启一个事务，并将自定义数据对象插入事务日志中，
     * 直到撤销或重做事件发生。在这里添加的有效载荷数据被存储，
     * 并在请求撤销/重做事件时传递给撤销/重做处理程序（使用
     * {@link registerUserDefinedTransactionHandler} 注册）。
     * 注意：<br> 事务可以包含多个操作 - 您可以打开一个事务并添加任何（合理）
     * 数量的操作（相同或不同类型），然后才提交到事务日志。
     * 注意/警告：<br> 在将有效载荷数据插入事务日志之前，将其序列化为 JSON。
     * 底层实现使用 JSON.stringify() 函数来序列化数据。任何非原始数据，如类或
     * Minecraft 本机对象都无法正确序列化为 JSON，因此您应避免将它们作为有效载荷数据使用。
     * 
     * @param payload
     * The data object to be inserted into the transaction log.
     * 
     * 要插入到事务日志中的数据对象。
     * @param transactionName
     * A string name that will be associated with this operation
     * 
     * 与此操作相关联的字符串名称
     */
    addUserDefinedOperation(payload: T, transactionName: string): void;
}