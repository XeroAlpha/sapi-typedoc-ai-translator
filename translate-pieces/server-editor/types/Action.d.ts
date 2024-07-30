/* IMPORT */ import { MouseRayCastAction, NoArgsAction } from '../index';

/**
 * Full set of all possible raw actions
 * 
 * 所有可能的原始操作的完整集合
 */
export type Action = NoArgsAction | MouseRayCastAction;