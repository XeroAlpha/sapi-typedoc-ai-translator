export enum ExportResult {
    ValidWorldExport = 0, // 有效的世界导出
    LevelFetchFailed = 1, // 级别获取失败
    FileArchiverFetchFailed = 2, // 文件归档器获取失败
    ProjectConverterFetchFailed = 3, // 项目转换器获取失败
    PlayerNotFound = 4, // 未找到玩家
    WorldExportFailed = 5, // 世界导出失败
    WorldExportBusy = 6, // 世界导出正忙
    EditorSystemFailure = 7, // 编辑器系统故障
}