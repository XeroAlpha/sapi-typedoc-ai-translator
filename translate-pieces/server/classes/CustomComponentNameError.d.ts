/* IMPORT */ import { CustomComponentNameErrorReason } from '../index';

/**
 * @rc
 * 
 * 此类是用于自定义组件命名错误的基类。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class CustomComponentNameError extends Error {
    private constructor();
    reason: CustomComponentNameErrorReason;
}

请注意，这里的`@rc`注释可能意味着这是处于RC（Release Candidate，候选版本）阶段的功能或类，而在中文中通常会直接翻译为“此功能正处于候选版本阶段”。但是，由于这是一个标记，并没有具体的描述，所以我将其保持为英文并添加了中文解释。对于`CustomComponentNameError`类的翻译，我保留了其原有的含义，即这是用于处理自定义组件命名错误的类。同时，`CustomComponentNameErrorReason`被假设为是一个已定义的枚举或者类，表示自定义组件命名错误的原因，在翻译时保持了原样。