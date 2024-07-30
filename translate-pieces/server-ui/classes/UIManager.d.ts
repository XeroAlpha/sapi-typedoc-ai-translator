/* IMPORT */ import { minecraftserver } from '../index';

/**
 * @beta
 */
export class UIManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数不能在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能会抛出错误。
     */
    closeAllForms(player: minecraftserver.Player): void;
}