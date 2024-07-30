/* IMPORT */ import { ActionTypes, MouseProps, Ray } from '../index';

/**
 * An action which returns the ray corresponding to a vector
 * from the users mouse click in the viewport.
 * 
 * 一种动作，返回对应于用户在视口内鼠标点击生成向量的射线。
 */
export type MouseRayCastAction = {
    actionType: ActionTypes.MouseRayCastAction;
    readonly onExecute: (mouseRay: Ray, mouseProps: MouseProps) => void;
};