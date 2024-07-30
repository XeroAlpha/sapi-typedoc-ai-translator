/**
 * Enumeration that specifies how to treat the visibility of a
 * HUD element.
 * 
 * 指定如何处理 HUD 元素的可见性的枚举。
 */
export enum HudVisibility {
    /**
     * @remarks
     * Specifies that this HUD element should be hidden.
     * 
     * 指定此 HUD 元素应被隐藏。
     */
    Hide = 0,
    /**
     * @remarks
     * Specifies that this HUD element should be reset to its
     * default state (while most HUD elements are visible, some HUD
     * elements can be hidden by the player via settings.)
     * 
     * 指定此 HUD 元素应重置为其默认状态（虽然大多数 HUD 元素是可见的，
     * 但有些 HUD 元素可以通过设置被玩家隐藏）。
     */
    Reset = 1,
}