/* IMPORT */ import { EntityOperationType, Selection, UserDefinedTransactionHandlerId, minecraftserver } from '../index';

/**
 * The Transaction Manager is responsible for tracking and
 * managing all of the registered transaction operations which
 * represent creator changes in the world.
 * Transaction Manager is the basis of the UNDO and REDO
 * operations, and allows a creator to store the changes made
 * to the world and the state of the world BEFORE those changes
 * were applied, making it possible to UNDO those changes and
 * restore the world state.
 * The transactions are stored as a stack, and can be undone in
 * stack order to restore the world to it's original state
 * 
 * 事务管理器负责跟踪和管理所有注册的事务操作，这些操作代表了世界中的创作者更改。
 * 事务管理器是撤销（UNDO）和重做（REDO）操作的基础，允许创作者存储对世界的更改以及应用这些更改之前的
 * 世界状态，从而使撤销这些更改并恢复世界状态成为可能。
 * 交易以堆栈的形式存储，可以按堆栈顺序撤销，以将世界恢复到其原始状态。
 */
export class TransactionManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     *
     * {@link Error}
     */
    addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    addUserDefinedOperation(
        transactionHandlerId: UserDefinedTransactionHandlerId,
        operationData: string,
        operationName?: string,
    ): void;
    /**
     * @remarks
     * Commit all of the transaction operations currently attached
     * to the open transaction record to the manager.  These will
     * be added as a single transaction manager entry.
     * The open record will be closed and all tracking operations
     * will cease.
     * 
     * 将当前附加到打开的事务记录的所有事务操作提交给管理器。这些将作为一个单独的事务管理器条目添加。
     * 打开的记录将被关闭，所有跟踪操作都将停止。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    commitOpenTransaction(): boolean;
    /**
     * @remarks
     * This function will commit the pending changes caused by any
     * of the track changes variants.  The changes will be
     * committed to the currently open transaction, but the
     * transaction will remain open for further records.
     * Pending block changes from tracking operations will be added
     * to the transaction record before submission to the
     * transaction manager
     * 
     * 此函数将提交由任何跟踪更改变体引起的待处理更改。更改将被提交到当前打开的事务中，但事务将保持打开状态以备后续记录使用。
     * 来自跟踪操作的待处理区块更改将在提交给事务管理器之前添加到事务记录中。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @returns
     * Returns the number of change requests that were being
     * tracked
     * 
     * 返回被跟踪的更改请求的数量
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    commitTrackedChanges(): number;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    createUserDefinedTransactionHandler(
        undoClosure: (arg: string) => void,
        redoClosure: (arg: string) => void,
    ): UserDefinedTransactionHandlerId;
    /**
     * @remarks
     * Discard the currently open transaction without committing it
     * to the transaction manager stack.
     * All records within the transaction will be discarded, and
     * any tracking requests currently active will be stopped
     * 
     * 不提交到事务管理器堆栈的情况下，丢弃当前打开的事务。
     * 事务中的所有记录都将被丢弃，任何当前活动的跟踪请求都将停止。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    discardOpenTransaction(): boolean;
    /**
     * @remarks
     * Discard any pending tracked changes.  This does not affect
     * the current open transaction contents, only the pending
     * tracked block operations
     * 
     * 丢弃任何待处理的已跟踪更改。这不会影响当前打开的事务内容，只影响待处理的已跟踪区块操作。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @returns
     * Returns the number of change requests that were discarded
     * 
     * 返回被丢弃的更改请求的数量
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    discardTrackedChanges(): number;
    /**
     * @remarks
     * Open a transaction record which will be a container for any
     * number of transaction operations.
     * All transaction operations within a record are grouped and
     * treated as a single atomic unit
     * 
     * 打开一个事务记录，该记录将成为任意数量事务操作的容器。
     * 记录内的所有事务操作都被分组并视为一个单一的原子单元。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param name
     * Give the transaction record a name
     * 
     * 给事务记录命名
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    openTransaction(name: string): boolean;
    /**
     * @remarks
     * Perform an redo operation.  This will take the last
     * transaction record on the redo stack and store the current
     * world state and then apply the changes in the record.  This
     * will reduce the redo record stack by one.
     * 
     * 执行重做操作。这会获取重做堆栈上的最后一个事务记录，存储当前的世界状态，然后应用记录中的更改。这将使重做记录堆栈减少一个。
     *
     * The transaction record affected by this operation will be
     * transferred to the undo stack in case the creator decides to
     * undo it
     * 
     * 受此操作影响的事务记录将在创作者决定撤销时转移到撤销堆栈中。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    redo(): void;
    /**
     * @remarks
     * Return the number of transaction records on the redo stack.
     * 
     * 返回重做堆栈上的事务记录数。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * @throws 此函数可能抛出错误。
     */
    redoSize(): number;
    /**
     * @remarks
     * Begin tracking block changes in a specified area.  These
     * will be added to a pending changes list.
     * The pending list will be added to the open transaction
     * record when a commit has been issued.
     * 
     * 开始跟踪指定区域内的区块更改。这些更改将被添加到待处理更改列表中。
     * 当提交指令发出时，待处理列表将被添加到打开的事务记录中。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param from
     * Min block location of a bounding area
     * 
     * 边界区域的最小区块位置
     * @param to
     * Max block location of a bounding area
     *