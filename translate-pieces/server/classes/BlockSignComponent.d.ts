/* IMPORT */ import { BlockComponent, DyeColor, RawMessage, RawText, SignSide } from '../index';

/**
 * 表示一个可以显示文字的方块。
 * @example addTwoSidedSign.ts
 * ```typescript
 * // 在指定位置创建一个双面带文字和染料颜色的牌子的函数
 * // 示例代码省略，注释同上
 * ```
 * @example setSignText.ts
 * ```typescript
 * // 更新牌子方块文字为原始文本的函数
 * // 示例代码省略，注释同上
 * ```
 * @example createTranslatedSign.ts
 * ```typescript
 * // 在指定位置创建带有指定文字的牌子的函数
 * // 示例代码省略，注释同上
 * ```
 */
// @ts-ignore 允许原生定义类的继承
export class BlockSignComponent extends BlockComponent {
    private constructor();
    /**
     * @remarks
     * 指示玩家是否可以编辑这块牌子。这发生在牌子被蜂蜜瓶使用过或对牌子调用了 `setWaxed` 方法后。
     *
     * @throws 使用此属性时可能抛出异常。
     */
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    /**
     * @remarks
     * 如果 `setText` 方法是通过 RawMessage 或 RawText 对象调用的，则返回牌子的 RawText，否则返回 undefined。
     *
     * @param side
     * 从牌子的哪一面读取消息。如果不提供，默认从牌子的正面读取。
     * @throws 此函数可能抛出错误。
     */
    getRawText(side?: SignSide): RawText | undefined;
    /**
     * @remarks
     * 如果 `setText` 方法是通过字符串调用的，则返回牌子的文字，否则返回 undefined。
     *
     * @param side
     * 从牌子的哪一面读取消息。如果不提供，默认从牌子的正面读取。
     * @throws 此函数可能抛出错误。
     */
    getText(side?: SignSide): string | undefined;
    /**
     * @remarks
     * 获取牌子文字的染料颜色，如果牌子未染色则返回 undefined。
     *
     * @param side
     * 从牌子的哪一面读取染料颜色。如果不提供，默认从牌子的正面读取。
     * @throws 此函数可能抛出错误。
     */
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    /**
     * @remarks
     * 设置牌子组件的文字。
     *
     * 无法在只读模式下调用此函数。
     *
     * @param message
     * 要设置在牌子上的消息。如果设置为字符串，则应使用 `getText` 来读取该字符串。如果设置为 RawMessage，则调用 `getRawText` 将返回 RawText。如果设置为 RawText，则调用 `getRawText` 将返回传入的相同对象。
     * @param side
     * 消息将被设置在牌子的哪一面。如果不提供，默认设置在牌子的正面。
     * @throws 如果提供的消息长度超过512个字符，则抛出异常。
     * @example setSignText.ts
     * ```typescript
     * // 示例代码省略，注释同上
     * ```
     */
    setText(message: RawMessage | RawText | string, side?: SignSide): void;
    /**
     * @remarks
     * 设置文字的染料颜色。
     *
     * 无法在只读模式下调用此函数。
     *
     * @param color
     * 要应用到牌子上的染料颜色，或设置为 undefined 以清除牌子上的染料。
     * @param side
     * 颜色将被设置在牌子的哪一面。如果不提供，默认设置在牌子的正面。
     * @throws 此函数可能抛出错误。
     */
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    /**
     * @remarks
     * 使玩家无法编辑这块牌子。
     *
     * 无法在只读模式下调用此函数。
     *
     * @throws 此函数可能抛出错误。
     */
    setWaxed(waxed: boolean): void;
}