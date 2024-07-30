/* IMPORT */ import { IModalTool, ModalToolCreationParameters, NoArgsAction, RegisteredAction } from '../index';

/**
 * @remarks
 * Tools within this container.
 * 
 * 此容器内的工具。
 */
readonly currentTools: IModalTool[];

/**
 * @remarks
 * The id of the selected tool in container.
 * 
 * 容器内选定工具的 ID。
 */
readonly selectedOptionId?: string;

addTool(params: ModalToolCreationParameters, action?: RegisteredAction<NoArgsAction>): IModalTool;
dispose(): void;
hide(): void;
removeTool(id: string): void;
setSelectedOptionId(value: string | undefined, update?: boolean): void;
show(): void;

请注意，上述翻译仅适用于接口方法和属性的注释部分。由于接口定义本身不需要翻译，因此未对这些部分进行修改。