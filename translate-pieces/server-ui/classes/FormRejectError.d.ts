/* IMPORT */ import { FormRejectReason } from '../index';

export class FormRejectError extends Error {
    private constructor();
    reason: FormRejectReason;
    /**
     * This error class is thrown when a form is rejected.
     * It contains a property `reason` which is of type
     * `FormRejectReason`, indicating why the form was rejected.
     * 
     * 当表单被拒绝时抛出此错误类。
     * 其中包含一个类型为 `FormRejectReason` 的属性 `reason`，
     * 指明表单被拒绝的原因。
     */
}