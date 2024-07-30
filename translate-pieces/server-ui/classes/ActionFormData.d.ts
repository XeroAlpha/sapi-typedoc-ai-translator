/* IMPORT */ import { ActionFormResponse, minecraftserver } from '../index';

/**
 * Builds a simple player form with buttons that let the player
 * take action.
 * @example actionFormAskFavoriteMonth.ts
 * ```typescript
 * import { Player } from '@minecraft/server';
 * import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';
 *
 * function askFavoriteMonth(player: Player) {
 *     const form = new ActionFormData()
 *         .title('Months')
 *         .body('Choose your favorite month!')
 *         .button('January')
 *         .button('February')
 *         .button('March')
 *         .button('April')
 *         .button('May');
 *
 *     form.show(player).then((response: ActionFormResponse) => {
 *         if (response.selection === 3) {
 *             player.sendMessage('I like April too!');
 *         } else {
 *             player.sendMessage('Nah, April is the best.');
 *         }
 *     });
 * }
 * ```
 * 
 * 构建一个带有按钮的简单玩家表单，让玩家可以采取行动。
 */
export class ActionFormData {
    /**
     * @remarks
     * Method that sets the body text for the modal form.
     * 
     * 设置模态表单正文文本的方法。
     */
    body(bodyText: minecraftserver.RawMessage | string): ActionFormData;
    /**
     * @remarks
     * Adds a button to this form with an icon from a resource
     * pack.
     * 
     * 从资源包添加一个图标到此表单的按钮。
     */
    button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData;
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
    show(player: minecraftserver.Player): Promise<ActionFormResponse>;
    /**
     * @remarks
     * This builder method sets the title for the modal dialog.
     * 
     * 此构建器方法设置模态对话框的标题。
     */
    title(titleText: minecraftserver.RawMessage | string): ActionFormData;
}