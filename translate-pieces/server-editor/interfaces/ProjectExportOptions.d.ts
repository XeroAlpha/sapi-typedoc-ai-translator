/* IMPORT */ import { ProjectExportType, minecraftserver } from '../index';

/**
 * Options for exporting a project.
 * 
 * 导出项目时的选项。
 */
export interface ProjectExportOptions {
    alwaysDay?: boolean;
    difficulty?: minecraftserver.Difficulty;
    disableWeather?: boolean;
    exportName?: string;
    exportType: ProjectExportType;
    gameMode?: minecraftserver.GameMode;
    initialTimeOfDay?: number;
}