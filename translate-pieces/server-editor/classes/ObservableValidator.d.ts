/**
 * Used for validating an observable value before it gets set
 * 
 * 用于在设置可观察值之前对其进行验证。
 */
export declare abstract class ObservableValidator<T> {
    abstract validate(newValue: T): T;
}