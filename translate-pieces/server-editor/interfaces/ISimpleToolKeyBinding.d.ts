/* IMPORT */ import { KeyBinding, KeyBindingInfo } from '../index';

/**
 * Define a key binding for the simple tool activation
 * 
 * 定义简单工具激活的关键绑定。
 */
export interface ISimpleToolKeyBinding {
    binding: KeyBinding;
    info?: KeyBindingInfo;
}