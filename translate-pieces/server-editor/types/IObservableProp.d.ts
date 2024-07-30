/* IMPORT */ import { IObservable } from '../index';

/**
 * Type that can be an observable or a value.
 * 
 * 可以是可观察对象或值的类型。
 */
export type IObservableProp<T> = IObservable<T> | T;