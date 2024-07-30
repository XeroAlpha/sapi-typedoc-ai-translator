/* IMPORT */ import { SettingsUIElementOptions, minecraftserver } from '../index';

export class SettingsUIElement {
    /**
     * The initial value of the UI element.
     * 
     * UI元素的初始值。
     */
    readonly initialValue: boolean | number | string | minecraftserver.Vector3;
    /**
     * The name of the UI element.
     * 
     * UI元素的名称。
     */
    readonly name: string;
    /**
     * The callback function that is called when the value changes.
     * 
     * 当值改变时被调用的回调函数。
     */
    readonly onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void;
    /**
     * The options for the UI element.
     * 
     * UI元素的选项。
     */
    readonly options: SettingsUIElementOptions;

    /**
     * Creates a new SettingsUIElement instance.
     * 
     * 创建一个新的 SettingsUIElement 实例。
     * 
     * @param name The name of the UI element.
     *            UI元素的名称。
     * @param initialValue The initial value of the UI element.
     *                     UI元素的初始值。
     * @param onChange The callback function that is called when the value changes.
     *                 当值改变时被调用的回调函数。
     * @param options Optional settings for the UI element.
     *                UI元素的可选设置。
     */
    constructor(
        name: string,
        initialValue: boolean | number | string | minecraftserver.Vector3,
        onChange: (arg: boolean | number | string | minecraftserver.Vector3) => void,
        options?: SettingsUIElementOptions,
    );
}