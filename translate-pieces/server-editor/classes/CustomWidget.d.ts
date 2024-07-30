/* IMPORT */ import { Widget, minecraftserver } from '../index';

export class CustomWidget extends Widget {
    private constructor();
    readonly location: minecraftserver.Vector3;
    readonly rotation: minecraftserver.Vector2;
    readonly showTextOnlyWhenSelected: boolean;
    getText(): string;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    moveBy(delta: minecraftserver.Vector3): void;
    /**
     * @remarks
     * This function can't be called in read-only mode.
     * 
     * 此函数在只读模式下无法调用。
     */
    setText(text: string): void;
}