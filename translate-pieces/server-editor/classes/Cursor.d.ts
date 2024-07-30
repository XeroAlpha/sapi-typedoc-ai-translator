/* IMPORT */ import { ClipboardItem, CursorAttachmentProperties, CursorProperties, minecraftserver } from '../index';

/**
 * The 3D block cursor is controlled through this read only
 * object and provides the Editor some control over the input
 * methods, display properties and positioning of the 3D block
 * cursor within the world.
 * The 3D block cursor is a native object which is constantly
 * calculating a screen/mouse -> world raycast, and recording
 * the resultant block collision position and facing direction.
 * Depending on the properties of the cursor state, this is not
 * always true – the cursor can also be manually manipulated by
 * keyboard input and moved around independently of mouse
 * movement; when the mouse is moved, the block cursor will
 * return to the mouse/world ray intersection point.
 * The cursor can also be set to either block or face mode;
 * block mode represents the block the mouse is pointing at,
 * and face mode represents the adjacent block that the mouse
 * is pointing at (i.e. the block attached to the face of the
 * intersection point).
 * In practical use, each tool when activated grabs the current
 * cursor state object and stores it.  The active tool then
 * sets the current state to represent the functionality of the
 * tool (color, input mode, etc).  When the tool loses focus,
 * it restores the cursor state using the stored state object
 * that was grabbed during activation.
 * The 3D block cursor can also be used to query the current
 * block at which the mouse is pointing (or the current block
 * to which the cursor has been manually moved by the user)
 * 
 * 通过此只读对象控制三维方块光标，并为编辑器提供一些控制输入方法、显示属性和在世界中定位三维方块光标的能力。
 * 三维方块光标是一个原生对象，持续计算屏幕/鼠标->世界的射线投射，并记录方块碰撞位置和朝向方向。
 * 根据光标状态的属性，这并不总是正确的——光标也可以通过键盘输入手动操控，并且独立于鼠标移动；当鼠标移动时，方块光标会回到鼠标/世界射线交点处。
 * 光标还可以设置为方块模式或面模式；方块模式代表鼠标所指向的方块，而面模式代表鼠标所指向的相邻方块（即，与交点面相连的方块）。
 * 在实际使用中，每个工具激活时都会抓取当前光标状态对象并存储它。活动工具然后设置当前状态以表示工具的功能（颜色、输入模式等）。当工具失去焦点时，它使用在激活期间抓取的存储状态对象恢复光标状态。
 * 三维方块光标也可以用于查询鼠标当前所指的方块（或者用户手动移动光标到的当前方块）。
 */
export class Cursor {
    private constructor();
    /**
     * @remarks
     * The face at of the block beneath the 3D block cursor which
     * is intersected by the mouse raycast
     * 
     * 被鼠标射线投射相交的位于三维方块光标下方的方块的面。
     *
     * @throws This property can throw when used.
     */
    readonly faceDirection: number;
    /**
     * @remarks
     * Query whether or not the 3D block cursor is visible or
     * hidden
     * 
     * 查询三维方块光标是否可见或隐藏。
     *
     * @throws This property can throw when used.
     */
    readonly isVisible: boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    attachClipboardItem(item: ClipboardItem): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    clearAttachment(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    getAttachmentProperties(): CursorAttachmentProperties;
    /**
     * @remarks
     * Get the world position of the 3D block cursor
     * 
     * 获取三维方块光标的世界位置。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    getPosition(): minecraftserver.Vector3;
    /**
     * @remarks
     * Get a property object which represents the current
     * properties of the 3D block cursor.
     * 
     * 获取表示三维方块光标当前属性的属性对象。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    getProperties(): CursorProperties;
    /**
     * @remarks
     * Hide the 3D block cursor from view until the corresponding
     * {@link Cursor.show} function is called
     * 
     * 隐藏三维方块光标直到对应的{@link Cursor.show}函数被调用。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    hide(): void;
    /**
     * @remarks
     * Manually offset the 3D block cursor by given amount.
     * Depending on the {@link CursorProperties.controlMode} - this
     * function may have no effect
     * 
     * 手动根据给定量偏移三维方块光标。根据{@link CursorProperties.controlMode}，此函数可能没有效果。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param offset
     * Amount by which the 3D block cursor should be moved
     * 
     * 应该移动三维方块光标的量。
     * @returns
     * Return the newly modified position (or previous position if
     * movement was restricted)
     * 
     * 返回新修改的位置（如果移动受到限制，则返回前一个位置）。
     * @throws This function can throw errors.
     */
    moveBy(offset: minecraftserver.Vector3): minecraftserver.Vector3;
    /**
     * @remarks
     * Reset the 3D block cursor to the system default state
     * 
     * 将三维方块光标重置为系统默认状态。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    resetToDefaultState(): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    setAttachmentProperties(properties: CursorAttachmentProperties): void;
    /**
     * @remarks
     * Set the 3D block cursor properties to a given state
     * 
     * 将三维方块光标属性设置为给定状态。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @param properties
     * A set of optional parameters within a property state which
     * represent the intended 3D block cursor state
     * 
     * 在属性状态中的一组可选参数，表示预期的三维方块光标状态。
     * @throws This function can throw errors.
     */
    setProperties(properties: CursorProperties): void;
    /**
     * @remarks
     * Make the 3D block cursor visible on screen
     * 
     * 让三维方块光标在屏幕上可见。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     */
    show(): void;
}