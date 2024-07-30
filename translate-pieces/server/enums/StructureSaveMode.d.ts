/**
 * Specifies how a structure should be saved.
 * 
 * 指定结构体如何保存。
 */
export enum StructureSaveMode {
    /**
     * @remarks
     * The structure will be temporarily saved to memory. The
     * structure will persist until the world is shut down.
     * 
     * 结构体会被临时保存到内存中。该结构体将持续存在直到世界关闭。
     */
    Memory = 'Memory',
    /**
     * @remarks
     * The structure will be saved to the world file and persist
     * between world loads. A saved structure can be removed from
     * the world via @minecraft/server.StructureManager.delete.
     * 
     * 结构体会被保存到世界文件中，并且可以在世界加载之间持续存在。已保存的结构体可以通过 @minecraft/server.StructureManager.delete 从世界中移除。
     */
    World = 'World',
}