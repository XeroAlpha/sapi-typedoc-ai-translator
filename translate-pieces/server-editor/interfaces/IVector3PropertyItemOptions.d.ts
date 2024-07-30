/* IMPORT */ import { IPropertyItemOptionsBase, LocalizedString, minecraftserver } from '../index';

/**
 * Optional properties for Vector3 property item
 * 
 * Vector3 属性项的可选属性。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface IVector3PropertyItemOptions extends IPropertyItemOptionsBase {
    /**
     * @remarks
     * If true label text will be hidden. It will be visible by
     * default.
     * 
     * 如果为 true，则隐藏标签文本。默认情况下，它是可见的。
     */
    hiddenLabel?: boolean;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MAX_SAFE_INTEGER will be used.
     * 
     * 可能的最大限制。如果未定义，将使用 Number.MAX_SAFE_INTEGER。
     */
    max?: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * The min possible limits. If undefined,
     * Number.MIN_SAFE_INTEGER will be used.
     * 
     * 可能的最小限制。如果未定义，将使用 Number.MIN_SAFE_INTEGER。
     */
    min?: Partial<minecraftserver.Vector3>;
    /**
     * @remarks
     * This callback is called when UI control is changed.
     * 
     * 当 UI 控件更改时，会调用此回调。
     */
    onChange?: (newValue: minecraftserver.Vector3, oldValue: minecraftserver.Vector3) => void;
    /**
     * @remarks
     * Localized title of the property item
     * 
     * 属性项的本地化标题。
     */
    title?: LocalizedString;
    /**
     * @remarks
     * Tooltip description of the property item
     * 
     * 属性项的工具提示描述。
     */
    tooltip?: LocalizedString;
}