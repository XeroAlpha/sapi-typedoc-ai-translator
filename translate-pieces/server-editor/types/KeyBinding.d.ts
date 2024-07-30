/* IMPORT */ import { InputModifier, KeyboardKey } from '../index';

/**
 * Keyboard binding properties.
 * 
 * 键盘绑定属性。
 */
export type KeyBinding = {
    key: KeyboardKey;
    modifier?: InputModifier;
};