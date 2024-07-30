/**
 * Keyboard key
 * 
 * 键盘按键
 */
export declare enum KeyboardKey {
    UNDEFINED = 0,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_SPACE
     * 
     * Backspace 键
     */
    BACKSPACE = 8,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_TAB
     * 
     * Tab 键
     */
    TAB = 9,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_RETURN
     * 
     * Enter 键
     */
    ENTER = 13,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SHIFT
     * 
     * Shift 键
     */
    SHIFT = 16,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CONTROL
     * 
     * Control 键
     */
    CTRL = 17,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ALT
     * 
     * Alt 键
     */
    ALT = 18,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CAPS_LOCK
     * 
     * Caps Lock 键
     */
    CAPS_LOCK = 20,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ESCAPE
     * 
     * Escape 键
     */
    ESCAPE = 27,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SPACE
     * 
     * Space 键
     */
    SPACE = 32,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PAGE_UP
     * 
     * Page Up 键
     */
    PAGE_UP = 33,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PAGE_DOWN
     * 
     * Page Down 键
     */
    PAGE_DOWN = 34,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_END
     * 
     * End 键
     */
    END = 35,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_HOME
     * 
     * Home 键
     */
    HOME = 36,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_LEFT
     * 
     * Left Arrow 键
     */
    LEFT = 37,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_UP
     * 
     * Up Arrow 键
     */
    UP = 38,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_RIGHT
     * 
     * Right Arrow 键
     */
    RIGHT = 39,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DOWN
     * 
     * Down Arrow 键
     */
    DOWN = 40,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PRINTSCREEN
     * 
     * Print Screen 键
     */
    PRINT_SCREEN = 44,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_INSERT
     * 
     * Insert 键
     */
    INSERT = 45,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DELETE
     * 
     * Delete 键
     */
    DELETE = 46,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_0
     * 
     * 数字键 0
     */
    KEY_0 = 48,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_1
     * 
     * 数字键 1
     */
    KEY_1 = 49,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_2
     * 
     * 数字键 2
     */
    KEY_2 = 50,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_3
     * 
     * 数字键 3
     */
    KEY_3 = 51,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_4
     * 
     * 数字键 4
     */
    KEY_4 = 52,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_5
     * 
     * 数字键 5
     */
    KEY_5 = 53,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_6
     * 
     * 数字键 6
     */
    KEY_6 = 54,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_7
     * 
     * 数字键 7
     */
    KEY_7 = 55,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_8
     * 
     * 数字键 8
     */
    KEY_8 = 56,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_9
     * 
     * 数字键 9
     */
    KEY_9 = 57,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_A
     * 
     * A 键
     */
    KEY_A = 65,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_B
     * 
     * B 键
     */
    KEY_B = 66,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_C
     * 
     * C 键
     */
    KEY_C = 67,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_D
     * 
     * D 键
     */
    KEY_D = 68,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_E
     * 
     * E 键
     */
    KEY_E = 69,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F
     * 
     * F 键
     */
    KEY_F = 70,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_G
     * 
     * G 键
     */
    KEY_G = 71,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_H
     * 
     * H 键
     */
    KEY_H = 72,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_I
     * 
     * I 键
     */
    KEY_I = 73,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_J
     * 
     * J 键
     */
    KEY_J = 74,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_K
     * 
     * K 键
     */
    KEY_K = 75,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_L
     * 
     * L 键
     */
    KEY_L = 76,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_M
     * 
     * M 键
     */
    KEY_M = 77,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_N
     * 
     * N 键
     */
    KEY_N = 78,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_O
     * 
     * O 键
     */
    KEY_O = 79,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_P
     * 
     * P 键
     */
    KEY_P = 80,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Q
     * 
     * Q 键
     */
    KEY_Q = 81,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_R
     * 
     * R 键
     */
    KEY_R = 82,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_S
     * 
     * S 键
     */
    KEY_S = 83,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_T
     * 
     * T 键
     */
    KEY_T = 84,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_U
     * 
     * U 键
     */
    KEY_U = 85,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_V
     * 
     * V 键
     */
    KEY_V = 86,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_W
     * 
     * W 键
     */
    KEY_W = 87,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_X
     * 
     * X 键
     */
    KEY_X = 88,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Y
     * 
     * Y 键
     */
    KEY_Y = 89,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_Z
     * 
     * Z 键
     */
    KEY_Z = 90,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD0
     * 
     * 小键盘 0
     */
    NUMPAD_0 = 96,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD1
     * 
     * 小键盘 1
     */
    NUMPAD_1 = 97,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD2
     * 
     * 小键盘 2
     */
    NUMPAD_2 = 98,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD3
     * 
     * 小键盘 3
     */
    NUMPAD_3 = 99,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD4
     * 
     * 小键盘 4
     */
    NUMPAD_4 = 100,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD5
     * 
     * 小键盘 5
     */
    NUMPAD_5 = 101,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD6
     * 
     * 小键盘 6
     */
    NUMPAD_6 = 102,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD7
     * 
     * 小键盘 7
     */
    NUMPAD_7 = 103,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD8
     * 
     * 小键盘 8
     */
    NUMPAD_8 = 104,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_NUMPAD9
     * 
     * 小键盘 9
     */
    NUMPAD_9 = 105,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_MULTIPLY
     * 
     * 小键盘乘号
     */
    NUMPAD_MULTIPLY = 106,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_ADD
     * 
     * 小键盘加号
     */
    NUMPAD_ADD = 107,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SEPARATOR
     * 
     * 小键盘分隔符
     */
    NUMPAD_SEPARATOR = 108,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SUBTRACT
     * 
     * 小键盘减号
     */
    NUMPAD_SUBTRACT = 109,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DECIMAL
     * 
     * 小键盘小数点
     */
    NUMPAD_DECIMAL = 110,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_DIVIDE
     * 
     * 小键盘除号
     */
    NUMPAD_DIVIDE = 111,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F1
     * 
     * F1 键
     */
    F1 = 112,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F2
     * 
     * F2 键
     */
    F2 = 113,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F3
     * 
     * F3 键
     */
    F3 = 114,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F4
     * 
     * F4 键
     */
    F4 = 115,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F5
     * 
     * F5 键
     */
    F5 = 116,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F6
     * 
     * F6 键
     */
    F6 = 117,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F7
     * 
     * F7 键
     */
    F7 = 118,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F8
     * 
     * F8 键
     */
    F8 = 119,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F9
     * 
     * F9 键
     */
    F9 = 120,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F10
     * 
     * F10 键
     */
    F10 = 121,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F11
     * 
     * F11 键
     */
    F11 = 122,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_F12
     * 
     * F12 键
     */
    F12 = 123,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_COMMA, ie. ','
     * 
     * 逗号键
     */
    COMMA = 188,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_PERIOD, ie. '.'
     * 
     * 句点键
     */
    PERIOD = 190,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_SLASH, ie. '/'
     * 
     * 斜杠键
     */
    SLASH = 191,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_QUOTE, ie. '`'
     * 
     * 反引号键
     */
    BACK_QUOTE = 192,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_OPEN_BRACKET, ie. '['
     * 
     * 开括号键
     */
    BRACKET_OPEN = 219,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_SLASH, ie. '\'
     * 
     * 反斜杠键
     */
    BACK_SLASH = 220,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_CLOSE_BRACKET, ie. ']'
     * 
     * 闭括号键
     */
    BRACKET_CLOSE = 221,
    /**
     * @remarks
     * KeyboardEvent.DOM_VK_BACK_QUOTE, ie. '"'
     * 
     * 引号键
     */
    QUOTE = 222,
}