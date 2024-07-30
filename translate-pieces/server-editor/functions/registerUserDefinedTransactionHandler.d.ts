/* IMPORT */ import { TransactionManager, UserDefinedTransactionHandle } from '../index';

/**
 * @remarks
 * Creates a strongly typed transaction handle to enforce type
 * safety when adding user defined transactions. This function
 * is a wrapper around the more generalized transaction manager
 * API for script based transactions. Any Editor Extension that
 * needs to insert data into the transaction log for undo/redo
 * should use this function to create a handler for the
 * specific type of data that needs to be inserted. When a
 * transaction is undone/redone, the associated handler
 * function will be invoked with a copy of the payload data
 * that was inserted into the log. As a general rule,
 * transaction data should contain 2 things:<br> 1. The data
 * that will be used to perform the operation we're trying to
 * record<br> 2. The data that will be used to restore the
 * state of the program to what it was before the
 * operation.<br> NOTE/WARNING:<br> The payload data is
 * serialized to JSON before being inserted into the
 * transaction log and the underlying implementation uses the
 * JSON.stringify() function to serialize the data. Any
 * non-primitive data, such as classes or minecraft native
 * objects will not serialize to JSON properly, so you should
 * avoid using them as payload data.
 * 
 * 创建一个强类型的事务句柄，在添加用户定义的事务时强制执行类型安全。此函数是脚本事务的更通用的事务管理器 API 的包装器。任何需要向事务日志插入数据以进行撤销/重做操作的编辑器扩展都应使用此函数为要插入的具体类型的数据创建处理程序。当事务被撤销或重做时，将调用与之关联的处理程序函数，并传入已插入日志的有效负载数据的副本。通常，事务数据应包含以下两项：<br> 1. 将用于执行我们试图记录的操作的数据<br> 2. 将用于恢复程序状态到操作前状态的数据。<br> 注意/警告：<br> 在将有效负载数据插入事务日志之前，会将其序列化为 JSON，底层实现使用 JSON.stringify() 函数来序列化数据。任何非原始数据，如类或 Minecraft 本地对象，都不能正确序列化为 JSON，因此你不应将它们用作有效负载数据。
 * 
 * @param transactionManager
 * A reference to the TransactionManager (from the extension
 * context for your extension)
 * 
 * 引用事务管理器（来自你的扩展的扩展上下文）
 * @param undoHandler
 * A function that will be invoked when the transaction is
 * undone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * 
 * 当事务被撤销时将调用的函数。该函数将接收到一份插入到事务日志中的有效负载数据的副本。
 * @param redoHandler
 * A function that will be invoked when the transaction is
 * redone. The function will be passed a copy of the payload
 * data that was inserted into the transaction log.
 * 
 * 当事务被重做时将调用的函数。该函数将接收到一份插入到事务日志中的有效负载数据的副本。
 * @returns
 * - {@link UserDefinedTransactionHandle} - A strongly typed
 * transaction handle that can be used to add transactions to
 * the transaction manager.
 * 
 * - 返回 {@link UserDefinedTransactionHandle} —— 可用于向事务管理器添加事务的强类型事务句柄。
 */
export declare function registerUserDefinedTransactionHandler<T>(
    transactionManager: TransactionManager,
    undoHandler: (payload: T) => void,
    redoHandler: (payload: T) => void,
): UserDefinedTransactionHandle<T>;