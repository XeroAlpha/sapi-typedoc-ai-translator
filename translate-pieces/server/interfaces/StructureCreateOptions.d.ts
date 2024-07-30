/* IMPORT */ import { StructureSaveMode } from '../index';

/**
 * Provides additional options for {@link
 * StructureManager.createFromWorld}
 * 
 * 为 {@link StructureManager.createFromWorld} 提供额外选项。
 */
export interface StructureCreateOptions {
    /**
     * @remarks
     * Whether blocks should be included in the structure. Defaults
     * to true.
     * 
     * 是否应将方块包含在结构中。默认为 true。
     */
    includeBlocks?: boolean;
    /**
     * @remarks
     * Whether entities should be included in the structure.
     * Defaults to true.
     * 
     * 是否应将实体包含在结构中。默认为 true。
     */
    includeEntities?: boolean;
    /**
     * @remarks
     * How the Structure should be saved. Defaults to
     * StructureSaveMode.World.
     * 
     * 结构应如何保存。默认为 StructureSaveMode.World。
     */
    saveMode?: StructureSaveMode;
}