/* IMPORT */ import { IPropertyItemOptions } from '../index';

/**
 * @remarks
 * controls appearance of the boolean. checkbox or toggleswitch
 * 
 * 控制布尔值的显示方式。复选框或切换开关
 */
export interface IPropertyItemOptionsBool extends IPropertyItemOptions {
    displayAsToggleSwitch?: boolean;
}