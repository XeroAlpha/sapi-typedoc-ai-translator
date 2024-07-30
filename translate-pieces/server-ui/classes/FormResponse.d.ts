/* IMPORT */ import { FormCancelationReason } from '../index';

/**
 * Base type for a form response.
 * 
 * 表单响应的基本类型。
 */
export class FormResponse {
    private constructor();
    /**
     * @remarks
     * Contains additional details as to why a form was canceled.
     * 
     * 包含表单被取消的额外详细信息。
     */
    readonly cancelationReason?: FormCancelationReason;
    /**
     * @remarks
     * If true, the form was canceled by the player (e.g., they
     * selected the pop-up X close button).
     * 
     * 如果为 true，则表示表单被玩家取消（例如，他们选择了弹出窗口的关闭按钮）。
     */
    readonly canceled: boolean;
}