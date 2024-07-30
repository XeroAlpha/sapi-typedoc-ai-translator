export enum FormCancelationReason {
    /**
     * Indicates the user is busy and cannot interact with the form.
     * 
     * 表示用户正忙，无法与表单进行交互。
     */
    UserBusy = 'UserBusy',
    /**
     * Indicates the user closed the form without completing it.
     * 
     * 表示用户未完成表单就将其关闭了。
     */
    UserClosed = 'UserClosed',
}