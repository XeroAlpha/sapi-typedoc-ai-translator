/**
 * Responsible for querying and modifying various properties of
 * the simulation.
 * 
 * 负责查询和修改模拟的各种属性。
 */
export class SimulationState {
    private constructor();
    /**
     * @remarks
     * Returns `true` if mob simulation is paused.
     * 
     * 如果生物模拟被暂停，则返回 `true`。
     */
    isPaused(): boolean;
    /**
     * @remarks
     * Sets the state of mob simulation.  If set to `true`, mobs
     * are paused.
     * 
     * 设置生物模拟的状态。如果设置为 `true`，则生物被暂停。
     * 
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    setPaused(isPaused: boolean): void;
}