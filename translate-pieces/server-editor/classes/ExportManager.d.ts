/* IMPORT */ import { ExportResult, GameOptions } from '../index';

export class ExportManager {
    private constructor();
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    beginExportProject(options: GameOptions): Promise<ExportResult>;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     */
    canExportProject(): boolean;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getGameOptions(useDefault?: boolean): GameOptions;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 此函数可能抛出错误。
     *
     * {@link Error}
     */
    getGameVersion(): string;
}