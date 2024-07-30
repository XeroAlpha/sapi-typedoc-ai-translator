/* IMPORT */ import { ModalFormResponse, minecraftserver } from '../index';

/**
 * Used to create a fully customizable pop-up form for a
 * player.
 * @example modalFormSimple.ts
 * ```typescript
 * import { Player } from '@minecraft/server';
 * import { ModalFormData } from '@minecraft/server-ui';
 *
 * function showExampleModal(player: Player) {
 *     const modalForm = new ModalFormData().title('Example Modal Controls for §o§7ModalFormData§r');
 *
 *     modalForm.toggle('Toggle w/o default');
 *     modalForm.toggle('Toggle w/ default', true);
 *
 *     modalForm.slider('Slider w/o default', 0, 50, 5);
 *     modalForm.slider('Slider w/ default', 0, 50, 5, 30);
 *
 *     modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);
 *     modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);
 *
 *     modalForm.textField('Input w/o default', 'type text here');
 *     modalForm.textField('Input w/ default', 'type text here', 'this is default');
 *
 *     modalForm
 *         .show(player)
 *         * .then(formData => {
 *             player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
 *         })
 *         .catch((error: Error) => {
 *             player.sendMessage('Failed to show form: ' + error);
 *             return -1;
 *         });
 * }
 * ```
 * 
 * 用于为玩家创建完全可自定义的弹出表单。
 */
export class ModalFormData {
    /**
     * @remarks
     * Adds a dropdown with choices to the form.
     * 
     * 向表单添加下拉列表选项。
     */
    dropdown(
        label: minecraftserver.RawMessage | string,
        options: (minecraftserver.RawMessage | string)[],
        defaultValueIndex?: number,
    ): ModalFormData;
    /**
     * @remarks
     * Creates and shows this modal popup form. Returns
     * asynchronously when the player confirms or cancels the
     * dialog.
     * 
     * This function can't be called in read-only mode.
     * 
     * 创建并显示此模态弹出表单。当玩家确认或取消对话框时异步返回。
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param player
     * Player to show this dialog to.
     * 
     * 要向其显示此对话框的玩家。
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    show(player: minecraftserver.Player): Promise<ModalFormResponse>;
    /**
     * @remarks
     * Adds a numeric slider to the form.
     * 
     * 向表单添加数字滑块。
     */
    slider(
        label: minecraftserver.RawMessage | string,
        minimumValue: number,
        maximumValue: number,
        valueStep: number,
        defaultValue?: number,
    ): ModalFormData;
    /**
     * @rc
     */
    submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a textbox to the form.
     * 
     * 向表单添加文本框。
     */
    textField(
        label: minecraftserver.RawMessage | string,
        placeholderText: minecraftserver.RawMessage | string,
        defaultValue?: minecraftserver.RawMessage | string,
    ): ModalFormData;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * 
     * 此构建方法设置模态对话框的标题。
     */
    title(titleText: minecraftserver.RawMessage | string): ModalFormData;
    /**
     * @remarks
     * Adds a toggle checkbox button to the form.
     * 
     * 向表单添加切换复选按钮。
     */
    toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData;
}