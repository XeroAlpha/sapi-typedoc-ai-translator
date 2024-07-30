/* IMPORT */ import { FormResponse } from '../index';

/**
 * 返回有关玩家从模态操作表单获得的结果的数据。
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
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class ActionFormResponse extends FormResponse {
    private constructor();
    /**
     * @remarks
     * Returns the index of the button that was pushed.
     * 
     * 返回被按下按钮的索引。
     */
    readonly selection?: number;
}