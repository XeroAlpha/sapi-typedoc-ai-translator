/* IMPORT */ import { ThemeSettingsColorKey, minecraftserver } from '../index';

export class ThemeSettings {
    private constructor();
    getThemeList(): string[];
    resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA | undefined;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @throws This function can throw errors.
     * 
     * 可能抛出错误。
     *
     * {@link Error}
     */
    setCurrentTheme(name: string): void;
}