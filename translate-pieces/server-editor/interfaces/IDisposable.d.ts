/**
 * Simple abstraction for disposable objects.
 * 
 * 可释放对象的简单抽象。
 */
export interface IDisposable {
    /**
     * @remarks
     * Initiates the teardown and cleanup of this disposable item.
     * 
     * 开始清理并释放此可释放项。
     */
    teardown(): void;
}