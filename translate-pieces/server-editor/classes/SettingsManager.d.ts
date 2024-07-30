/* IMPORT */ import { GraphicsSettings, ThemeSettings } from '../index';

/**
 * The SettingsManager (accessible from the {@link
 * ExtensionContext}) is responsible for the management all
 * player settings.
 * 
 * SettingsManager（可通过 {@link ExtensionContext} 访问）
 * 负责管理所有玩家设置。
 */
export class SettingsManager {
    private constructor();
    /**
     * @remarks
     * Manages graphics settings properties.
     * 
     * 管理图形设置属性。
     */
    readonly graphics: GraphicsSettings;
    readonly theme: ThemeSettings;
}