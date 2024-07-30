/**
 * Enumerates the different types of errors that can occur during game tests.
 * 
 * 枚举游戏测试过程中可能出现的不同类型的错误。
 */
export enum GameTestErrorType {
    Assert = 'Assert',
    AssertAtPosition = 'AssertAtPosition',
    ExecutionTimeout = 'ExecutionTimeout',
    ExhaustedAttempts = 'ExhaustedAttempts',
    FailConditionsMet = 'FailConditionsMet',
    LevelStateModificationFailed = 'LevelStateModificationFailed',
    MethodNotImplemented = 'MethodNotImplemented',
    SimulatedPlayerOutOfBounds = 'SimulatedPlayerOutOfBounds',
    Unknown = 'Unknown',
    Waiting = 'Waiting',
}