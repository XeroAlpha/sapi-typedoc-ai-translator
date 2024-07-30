/* IMPORT */ import { ObservableValidator } from '../index';

/**
 * Represents a stateful value that can be observed by
 * different objects.
 * 
 * 表示可以被不同对象观察的状态化值。
 */
export interface IObservable<T> {
    /**
     * @remarks
     * Optional validator that will pre-process the new value.
     * 
     * 可选的验证器，用于预处理新值。
     */
    readonly validator?: ObservableValidator<T>;
    /**
     * @remarks
     * Current value of the observable.
     * 
     * 可观察值的当前值。
     */
    readonly value: Readonly<T>;
    /**
     * @remarks
     * Updates the value and notifies dependent objects.
     * 
     * 更新值并通知依赖的对象。
     *
     * @param newValue
     * New value to be set (will be processed by the validator if
     * it exists).
     * 
     * 要设置的新值（如果存在验证器，则会被验证器处理）。
     */
    set(newValue: T): boolean;
}