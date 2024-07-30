/* IMPORT */ import { CustomWidget, CustomWidgetCreateOptions, Widget, minecraftserver } from '../index';

export class WidgetGroup {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    areAnySelected(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 可能会抛出错误。
     */
    createCustomWidget(
        customEntityName: string,
        location: minecraftserver.Vector3,
        rotation?: minecraftserver.Vector2,
        options?: CustomWidgetCreateOptions,
    ): CustomWidget;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 可能会抛出错误。
     */
    deleteWidget(widgetToDelete: Widget): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    deselectAllWidgets(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    moveSelectedWidgets(delta: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    selectAllWidgets(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    setIsVisible(isVisible: boolean): void;
}