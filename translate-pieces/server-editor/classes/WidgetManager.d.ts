/* IMPORT */ import { WidgetGroup, WidgetGroupCreateOptions } from '../index';

export class WidgetManager {
    private constructor();
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
    createGroup(options?: WidgetGroupCreateOptions): WidgetGroup;
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
    deleteGroup(groupToDelete: WidgetGroup): void;
}