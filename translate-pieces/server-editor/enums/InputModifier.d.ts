/**
 * Input modifier flags to create chorded bindings
 * 
 * 用于创建组合键绑定的输入修饰符标志。
 */
export declare enum InputModifier {
    Unused = 0,
    None = 1,
    Alt = 2,
    Control = 4,
    Shift = 8,
    Any = 15,
}