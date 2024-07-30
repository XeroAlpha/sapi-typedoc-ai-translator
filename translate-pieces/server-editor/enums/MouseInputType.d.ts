/**
 * Input event information about mouse actions
 * 
 * 关于鼠标操作的输入事件信息
 */
export declare enum MouseInputType {
    ButtonDown = 1, // 鼠标按钮按下
    ButtonUp = 2,   // 鼠标按钮抬起
    WheelIn = 3,    // 滚轮向前滚动
    WheelOut = 4,   // 滚轮向后滚动
    DragStart = 5,  // 拖拽开始
    Drag = 6,       // 正在拖拽
    DragEnd = 7,    // 拖拽结束
}