/* IMPORT */ import { EditorMode } from '../index';

/**
 * Contains information related to changes in player editor
 * mode.
 * 
 * 包含与玩家编辑模式变更相关的信息。
 */
export class ModeChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The editor mode that the player is changed to.
     * 
     * 玩家变更后的编辑模式。
     */
    readonly mode: EditorMode;
}