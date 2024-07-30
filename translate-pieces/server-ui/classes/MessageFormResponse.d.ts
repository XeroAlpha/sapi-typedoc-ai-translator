/* IMPORT */ import { FormResponse } from '../index';

/**
 * 返回有关从模态消息表单获得的玩家结果的数据。
 * @example messageFormSimple.ts
 * ```typescript
 * import { Player } from '@minecraft/server';
 * import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';
 *
 * function showMessage(player: Player) {
 *     const messageForm = new MessageFormData()
 *         .title({ translate: 'permissions.removeplayer' }) // "移除玩家"
 *         .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // "Player 1 或 Player 2"
 *         .button1('Player 1')
 *         .button2('Player 2');
 *
 *     messageForm
 *         .show(player)
 *         .then((formData: MessageFormResponse) => {
 *             // 玩家取消了表单，或者有其他对话框弹出并打开。
 *             if (formData.canceled || formData.selection === undefined) {
 *                 return;
 *             }
 *
 *             player.sendMessage(`您选择了 ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
 *         })
 *         .catch((error: Error) => {
 *             player.sendMessage('显示表单失败: ' + error);
 *         });
 * }
 * ```
 */
// @ts-ignore 允许原生定义类的类继承
export class MessageFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * Returns the index of the button that was pushed.
     * 
     * 返回被按下按钮的索引。
     */
    readonly selection?: number;
}