/* IMPORT */ import { MessageFormResponse, minecraftserver } from '../index';

/**
 * Builds a simple two-button modal dialog.
 * @example messageFormSimple.ts
 * ```typescript
 * import { Player } from '@minecraft/server';
 * import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';
 *
 * function showMessage(player: Player) {
 *     const messageForm = new MessageFormData()
 *         .title({ translate: 'permissions.removeplayer' }) // "Remove player"
 *         .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // "Player 1 or Player 2"
 *         .button1('Player 1')
 *         .button2('Player 2');
 *
 *     messageForm
 *         .show(player)
 *         .then((formData: MessageFormResponse) => {
 *             // player canceled the form, or another dialog was up and open.
 *             if (formData.canceled || formData.selection === undefined) {
 *                 return;
 *             }
 *
 *             player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
 *         })
 *         .catch((error: Error) => {
 *             player.sendMessage('Failed to show form: ' + error);
 *         });
 * }
 * ```
 * 
 * 构建一个简单的双按钮模态对话框。
 */
export class MessageFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * 
     * 设置模态对话框正文的方法。
     */
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks
     * Method that sets the text for the first button of the
     * dialog.
     * 
     * 设置对话框第一个按钮文本的方法。
     */
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    /**
     * @remarks
     * This method sets the text for the second button on the
     * dialog.
     * 
     * 设置对话框第二个按钮文本的方法。
     */
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
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
     * 
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * 
     * 设置模态对话框标题的构建方法。
     */
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}