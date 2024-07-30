export enum PlaytestSessionResult {
    /**
     * Indicates that the playtest session operation was successful.
     * 
     * 指示 playtest 会话操作成功。
     */
    OK = 0,
    /**
     * Indicates that the session handle provided is invalid.
     * 
     * 指示提供的会话句柄无效。
     */
    InvalidSessionHandle = 1,
    /**
     * Indicates that the session information could not be found.
     * 
     * 指示未能找到会话信息。
     */
    SessionInfoNotFound = 2,
    /**
     * Indicates that there are too many players in the session.
     * 
     * 指示会话中有太多玩家。
     */
    TooManyPlayers = 3,
    /**
     * Indicates that the world export failed.
     * 
     * 指示世界导出失败。
     */
    WorldExportFailed = 4,
    /**
     * Indicates that the world export is currently busy.
     * 
     * 指示世界导出当前繁忙。
     */
    WorldExportBusy = 5,
    /**
     * Indicates that the scenario provided is not supported.
     * 
     * 指示提供的场景不受支持。
     */
    UnsupportedScenario = 6,
    /**
     * Indicates that there was a failure in the editor system.
     * 
     * 指示编辑器系统中出现故障。
     */
    EditorSystemFailure = 7,
    /**
     * Indicates that the level ID provided is invalid.
     * 
     * 指示提供的关卡ID无效。
     */
    InvalidLevelId = 8,
    /**
     * Indicates that the player could not be found.
     * 
     * 指示未能找到玩家。
     */
    PlayerNotFound = 9,
    /**
     * Indicates that the response timed out.
     * 
     * 指示响应超时。
     */
    ResponseTimeout = 10,
    /**
     * Indicates an unspecified error occurred.
     * 
     * 指示发生未指定错误。
     */
    UnspecifiedError = 11,
}