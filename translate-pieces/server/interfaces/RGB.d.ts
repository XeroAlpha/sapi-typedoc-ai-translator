/**
 * Represents a fully customizable color within Minecraft.
 * 
 * 在 Minecraft 中表示完全可自定义的颜色。
 */
export interface RGB {
    /**
     * @remarks
     * Determines a color's blue component. Valid values are
     * between 0 and 1.0.
     * 
     * 决定颜色的蓝色分量。有效值介于 0 和 1.0 之间。
     */
    blue: number;
    /**
     * @remarks
     * Determines a color's green component. Valid values are
     * between 0 and 1.0.
     * 
     * 决定颜色的绿色分量。有效值介于 0 和 1.0 之间。
     */
    green: number;
    /**
     * @remarks
     * Determines a color's red component. Valid values are between
     * 0 and 1.0.
     * 
     * 决定颜色的红色分量。有效值介于 0 和 1.0 之间。
     */
    red: number;
}