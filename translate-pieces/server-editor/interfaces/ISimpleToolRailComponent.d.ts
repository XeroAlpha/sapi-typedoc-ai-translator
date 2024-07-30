/* IMPORT */ import { IModalTool, IPlayerUISession, ISimpleTool } from '../index';

/**
 * @remarks
 * Get a reference to the IPlayerUISession. This is the primary
 * interface to the editor UI and all of the editor extension
 * controls
 * 
 * 获取 `IPlayerUISession` 的引用。这是编辑器 UI 和所有编辑器扩展控件的主要接口。
 */
get session(): IPlayerUISession;

/**
 * @remarks
 * Get a reference to the parent tool.
 * 
 * 获取父工具的引用。
 */
get simpleTool(): ISimpleTool;

/**
 * @remarks
 * Get the implementation interface of the underlying tool rail
 * component
 * 
 * 获取底层工具栏组件的实现接口。
 */
get toolRail(): IModalTool;

请注意，上述代码片段已按照您的要求进行了格式调整，并且将每个 getter 方法独立出来。由于 TypeScript 接口中不支持方法体，因此这里展示的是接口定义，而不是完整的类实现。