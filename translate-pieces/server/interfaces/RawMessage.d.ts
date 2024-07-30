/* IMPORT */ import { RawMessageScore } from '../index';

/**
 * 定义了一个用于更灵活操作的JSON结构。
 * 
 * @example addTranslatedSign.ts
 * ```typescript
 * 导入 { DimensionLocation, world, BlockPermutation, BlockComponentTypes } 来自 '@minecraft/server';
 *
 * 函数 placeTranslatedSign(位置: DimensionLocation, 文本: string) {
 *     const 木牌方块 = 位置.dimension.getBlock(位置);
 *
 *     如果 (!木牌方块) {
 *         控制台.warn('在指定位置找不到方块。');
 *         返回;
 *     }
 *     const 木牌配置 = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
 *     木牌方块.setPermutation(木牌配置);
 *
 *     const 木牌组件 = 木牌方块.getComponent(BlockComponentTypes.Sign);
 *     如果 (木牌组件) {
 *         木牌组件.setText({ translate: 'item.skull.player.name', with: [文本] });
 *     } 否则 {
 *         控制台.error('在方块上找不到木牌组件。');
 *     }
 * }
 *
 * placeTranslatedSign(
 *     {
 *         维度: world.getDimension('主世界'),
 *         x: 0,
 *         y: 0,
 *         z: 0,
 *     },
 *     '史蒂夫',
 * );
 * ```
 * 
 * @example showTranslatedMessageForm.ts
 * ```typescript
 * 导入 { world, Player } 来自 '@minecraft/server';
 * 导入 { MessageFormData, MessageFormResponse } 来自 '@minecraft/server-ui';
 *
 * 函数 showMessage(玩家: Player) {
 *     const 消息表单 = 新 MessageFormData()
 *         .标题({ translate: 'permissions.removeplayer' })
 *         .正文({ translate: 'accessibility.list.or.two', with: ['玩家 1', '玩家 2'] })
 *         .按钮1('玩家 1')
 *         .按钮2('玩家 2');
 *
 *     消息表单
 *         .显示(玩家)
 *         .然后((formData: MessageFormResponse) => {
 *             // 玩家取消了表单，或者另一个对话框已经打开。
 *             如果 (formData.canceled || formData.selection === 未定义) {
 *                 返回;
 *             }
 *
 *             控制台.warn(`您选择了 ${formData.selection === 0 ? '玩家 1' : '玩家 2'}`);
 *         })
 *         .捕获((错误: 错误) => {
 *             控制台.warn('未能显示表单: ' + 错误);
 *         });
 * };
 *
 * showMessage(world.getAllPlayers()[0]);
 * ```
 */
export interface RawMessage {
    /**
     * @remarks
     * 提供当前消息的原始文本等效值。
     *
     */
    rawtext?: RawMessage[];
    /**
     * @remarks
     * 提供一个令牌，该令牌将被分数的值替换。
     *
     */
    score?: RawMessageScore;
    /**
     * @remarks
     * 提供一个字符串字面值以供使用。
     *
     */
    text?: string;
    /**
     * @remarks
     * 提供一个翻译令牌，如果客户端有与令牌匹配的、玩家语言的可用资源，
     * 则会在客户端上进行翻译。
     *
     */
    translate?: string;
    /**
     * @remarks
     * 翻译令牌的参数。可以是字符串数组或包含原始文本对象数组的RawMessage。
     *
     */
    with?: string[] | RawMessage;
}