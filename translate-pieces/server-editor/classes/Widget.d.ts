export class Widget {
    private constructor();
    readonly valid: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     */
    deleteWidget(): void;
    getIsSelected(): boolean;
    getIsVisible(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @throws This function can throw errors.
     * 
     * 可能会抛出错误。
     */
    setIsSelected(isSelected: boolean): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     */
    setIsVisible(isVisible: boolean): void;
}