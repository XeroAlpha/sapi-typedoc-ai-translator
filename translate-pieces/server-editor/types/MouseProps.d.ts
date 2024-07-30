/* IMPORT */ import { MouseActionType, MouseInputType, MouseModifiers } from '../index';

/**
 * Mouse properties that provide additional information from
 * client event handling
 * 
 * 提供客户端事件处理中额外信息的鼠标属性。
 */
export declare type MouseProps = {
    mouseAction: MouseActionType;
    modifiers: MouseModifiers;
    inputType: MouseInputType;
};