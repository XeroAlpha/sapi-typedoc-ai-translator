/**
 * Define the visibility of the status bar item If the tool
 * does not have an `ISimpleToolPropertyPane` component, then
 * this option is ignored
 * 
 * 定义状态栏项的可见性。如果工具没有 `ISimpleToolPropertyPane`
 * 组件，则忽略此选项。
 */
export declare enum SimpleToolStatusBarVisibility {
    AlwaysVisible = 0,
    VisibleWhenActive = 1,
}

// 翻译结果：
/**
 * 定义状态栏项目是否可见。如果工具没有 `ISimpleToolPropertyPane` 组件，则此设置会被忽略。
 */
export declare enum SimpleToolStatusBarVisibility {
    AlwaysVisible = 0, // 始终可见
    VisibleWhenActive = 1, // 在激活时可见
}