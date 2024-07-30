export enum FormRejectReason {
    MalformedResponse = 'MalformedResponse', // 表单响应格式错误
    PlayerQuit = 'PlayerQuit', // 玩家退出
    ServerShutdown = 'ServerShutdown', // 服务器关闭
}