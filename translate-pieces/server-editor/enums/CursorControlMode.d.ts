/* IMPORT */ import { Cursor } from '../index';

/**
 * An enumeration used by the 3D block cursor {@link Cursor}
 * 
 * 用于3D方块光标 {@link Cursor} 的枚举。
 */
export enum CursorControlMode {
    /**
     * @remarks
     * Using Keyboard mode will remove the dependence of the 3D
     * block cursor on the player mouse position.  The 3D block
     * cursor can be positioned using the keyboard (or the Cursor
     * move methods on the cursor object) and the position will not
     * be reset if the mouse is moved
     * 
     * 使用键盘模式会移除3D方块光标对玩家鼠标位置的依赖。
     * 可以使用键盘（或光标对象上的 Cursor 移动方法）来定位3D方块光标，
     * 并且即使移动了鼠标也不会重置其位置。
     */
    Keyboard = 0,
    /**
     * @remarks
     * The Mouse movement mode will disable keyboard or manual 3D
     * block cursor movement and make the 3D block cursor only
     * react to player mouse movement
     * 
     * 鼠标移动模式会禁用键盘或手动的3D方块光标移动，并使3D方块光标仅响应玩家的鼠标移动。
     */
    Mouse = 1,
    /**
     * @remarks
     * This is generally the default move mode for the 3D block
     * cursor.
     * The 3D block cursor can be positioned using the keyboard (or
     * the Cursor move methods on the cursor object) but the
     * position will be reset to the block location under the
     * players mouse position if any mouse movement is detected.
     * 
     * 这通常是3D方块光标的默认移动模式。
     * 可以使用键盘（或光标对象上的 Cursor 移动方法）来定位3D方块光标，
     * 但如果检测到任何鼠标移动，则位置会被重置到玩家鼠标下方的方块位置。
     */
    KeyboardAndMouse = 2,
    /**
     * @remarks
     * When in fixed mode, the 3D block cursor will remain in a
     * fixed position directly in front of the players facing
     * direction.  It cannot be moved without moving the player (or
     * adjusting the fixed block distance).
     * This mode is useful for addressing block locations in the
     * air (put the cursor into fixed mode, and fly the player
     * until the desired air block is beneath the cursor, at which
     * point it is selectable without being clickable)
     * 
     * 在固定模式下，3D方块光标会保持在玩家面向方向正前方的固定位置。
     * 不移动玩家（或调整固定的方块距离）则无法移动它。
     * 此模式适用于处理空中的方块位置（将光标置于固定模式，
     * 并驾驶玩家飞行直至所需的空气方块位于光标下方，此时可选择该方块而不必点击）。
     */
    Fixed = 3,
}