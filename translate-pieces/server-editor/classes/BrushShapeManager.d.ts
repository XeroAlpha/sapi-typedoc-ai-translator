/* IMPORT */ import { BrushPipelineOperation, BrushShape, SettingsUIElement, minecraftserver } from '../index';

export class BrushShapeManager {
    private constructor();
    readonly activeBrushShape?: BrushShape;
    readonly activeBrushVolume?: minecraftserver.CompoundBlockVolume;
    readonly brushShapeNames: string[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    activateBrushShape(name: string): minecraftserver.CompoundBlockVolume;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     */
    getBrushVolume(
        origin: minecraftserver.Vector3,
        pipeline: BrushPipelineOperation[],
    ): minecraftserver.CompoundBlockVolume | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    getSettingsUIElements(brushName: string): SettingsUIElement[];
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    registerBrushShape(
        name: string,
        icon: string,
        rebuild: () => minecraftserver.CompoundBlockVolume,
        getSettingsUIElements: () => SettingsUIElement[],
    ): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    uiSettingValueChanged(elementName: string, newValue: boolean | number | string | minecraftserver.Vector3): boolean;
}