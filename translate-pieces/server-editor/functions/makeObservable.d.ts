/* IMPORT */ import { IObservable, ObservableValidator } from '../index';

/**
 * @remarks
 * Creates an observable object that stores a value state.
 * 
 * 创建一个可观察对象，用于存储值状态。
 *
 * @param initialValue
 * Initial value of the observable.
 * 
 * 可观察对象的初始值。
 * @param validator
 * Optional validator to use for the setter.
 * 
 * 为设置器使用的可选验证器。
 */
export declare function makeObservable<T>(initialValue: T, validator?: ObservableValidator<T>): IObservable<T>;