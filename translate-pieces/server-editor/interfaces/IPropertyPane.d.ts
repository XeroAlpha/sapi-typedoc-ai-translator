/* IMPORT */ import { EventSink, IBlockListPropertyItem, IBoolPropertyItem, IBoolPropertyItemOptions, IButtonPropertyItem, IButtonPropertyItemOptions, IDropdownPropertyItem, IImagePropertyItem, IImagePropertyItemOptions, IObservableProp, IPropertyItem, IPropertyItemBase, IPropertyItemOptions, IPropertyItemOptionsBlockList, IPropertyItemOptionsBool, IPropertyItemOptionsColorPicker, IPropertyItemOptionsDataPicker, IPropertyItemOptionsDropdown, IPropertyItemOptionsNumber, IPropertyItemOptionsTable, IPropertyItemOptionsVector3, IPropertyPaneOptions, ITablePropertyItem, ITextPropertyItem, ITextPropertyItemOptions, IVector3PropertyItem, IVector3PropertyItemOptions, IVector3PropertyItem_deprecated, ImageResourceData, LocalizedString, NoArgsAction, PropertyBag, PropertyPaneVisibilityUpdate, RegisteredAction, minecraftserver } from '../index';

/**
 * 属性面板展示动态内容。它可以与对象关联并以不同类型的控件呈现。
 */
export interface IPropertyPane {
    /**
     * @remarks
     * 面板的展开或折叠状态。
     */
    collapsed: boolean;

    /**
     * @remarks
     * 属性面板的唯一ID。
     */
    readonly id: string;

    /**
     * @remarks
     * 提供可见性变更事件。
     */
    onPropertyPaneVisibilityUpdated: EventSink<PropertyPaneVisibilityUpdate>;

    /**
     * @remarks
     * 若为子面板，此为父面板的ID。
     */
    readonly parentPaneId?: string;

    /**
     * @remarks
     * 属性面板的本地化标题。
     */
    title: string;

    /**
     * @remarks
     * 检查面板的可见性。
     */
    visible: boolean;

    /**
     * @remarks
     * 面板宽度，单位为rem。
     */
    width?: number;

    /**
     * @remarks
     * 向面板添加一个块列表。
     */
    addBlockList(options?: IPropertyItemOptionsBlockList): IBlockListPropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>;

    /**
     * @remarks
     * 向面板添加一个块选择器项。
     */
    addBlockPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 添加布尔值项到面板。
     */
    addBool(value: IObservableProp<boolean>, options?: IBoolPropertyItemOptions): IBoolPropertyItem;

    /**
     * @deprecated 使用addBool代替。
     * @remarks
     * 向面板添加一个布尔型项。
     */
    addBool_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsBool,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加按钮，并将指定操作绑定到按钮激活。
     */
    addButton(
        action: (() => void) | RegisteredAction<NoArgsAction>,
        options?: IButtonPropertyItemOptions,
    ): IButtonPropertyItem;

    /**
     * @remarks
     * 向面板添加颜色选择器项。
     */
    addColorPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsColorPicker,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加分隔线项。
     */
    addDivider(): IPropertyItemBase;

    /**
     * @remarks
     * 向面板添加下拉菜单项。
     */
    addDropdown<
        T extends Omit<PropertyBag, Prop> & {
            [key in Prop]: number;
        },
        Prop extends keyof T & string,
    >(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDropdown,
    ): IDropdownPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加实体选择器项。
     */
    addEntityPicker<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsDataPicker,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加图片项。
     */
    addImage(
        value: IObservableProp<string | ImageResourceData>,
        options?: IImagePropertyItemOptions,
    ): IImagePropertyItem;

    /**
     * @remarks
     * 向面板添加数字项。
     */
    addNumber<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsNumber,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加字符串项。
     */
    addString<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptions,
    ): IPropertyItem<T, Prop>;

    /**
     * @remarks
     * 向面板添加表格。
     */
    addTable(options?: IPropertyItemOptionsTable): ITablePropertyItem<{
        EMPTY: undefined;
    }, 'EMPTY'>;

    /**
     * @remarks
     * 向面板添加多行文本项。
     */
    addText(value: IObservableProp<LocalizedString>, options?: ITextPropertyItemOptions): ITextPropertyItem;

    /**
     * @remarks
     * 向面板添加三维向量项。
     */
    addVector3(
        value: IObservableProp<minecraftserver.Vector3>,
        options?: IVector3PropertyItemOptions,
    ): IVector3PropertyItem;

    /**
     * @deprecated 使用addVector3替代。
     * @remarks
     * 向面板添加三维向量项。
     */
    addVector3_deprecated<T extends PropertyBag, Prop extends keyof T & string>(
        obj: T,
        property: Prop,
        options?: IPropertyItemOptionsVector3,
    ): IVector3PropertyItem_deprecated<T, Prop>;

    /**
     * @remarks
     * 收起面板。
     */
    collapse(): void;

    /**
     * @remarks
     * 创建一个内部子面板，该子面板显示在扩展器控件内部。
     */
    createPropertyPane(options: IPropertyPaneOptions): IPropertyPane;

    /**
     * @remarks
     * 展开面板。
     */
    expand(): void;

    /**
     * @remarks
     * 隐藏面板。
     */
    hide(): void;

    /**
     * @remarks
     * 从父面板移除子属性面板。
     */
    removePropertyPane(paneToRemove: IPropertyPane): boolean;

    /**
     * @remarks
     * 显示面板及其所有属性项。
     */
    show(): void;
}