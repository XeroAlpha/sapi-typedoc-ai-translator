/**
 * Contains return data on the result of a command execution.
 * 
 * 包含命令执行结果的返回数据。
 */
export class CommandResult {
    private constructor();
    /**
     * @remarks
     * If the command operates against a number of entities,
     * blocks, or items, this returns the number of successful
     * applications of this command.
     * 
     * 如果命令作用于多个实体、方块或物品，此属性返回该命令成功应用的次数。
     */
    readonly successCount: number;
}