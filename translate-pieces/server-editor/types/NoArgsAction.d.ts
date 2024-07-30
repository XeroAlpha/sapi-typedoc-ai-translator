/* IMPORT */ import { ActionTypes } from '../index';

/**
 * An action which needs no additional client side arguments on
 * execute
 * 
 * 执行时不需要额外客户端参数的动作。
 */
export type NoArgsAction = {
    actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};