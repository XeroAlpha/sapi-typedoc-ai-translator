/* IMPORT */ import { BlockPermutation, InvalidStructureError, StructureManager, StructureSaveMode, Vector3, minecraftcommon } from '../index';

/**
 * Represents a loaded structure template (.mcstructure file).
 * Structures can be placed in a world using the /structure
 * command or the {@link StructureManager} APIs.
 * 
 * 表示加载的结构模板（.mcstructure 文件）。可以使用 /structure
 * 命令或 {@link StructureManager} API 在世界中放置结构。
 */
export class Structure {
    private constructor();
    /**
     * @remarks
     * The name of the structure. The identifier must include a
     * namespace. For structures created via the /structure command
     * or structure blocks, this namespace defaults to
     * "mystructure".
     *
     * 结构的名称。标识符必须包含命名空间。对于通过 /structure
     * 命令或结构方块创建的结构，此命名空间默认为 "mystructure"。
     */
    readonly id: string;
    /**
     * @remarks
     * The dimensions of the structure. For example, a single block
     * structure will have a size of {x:1, y:1, z:1}
     *
     * 结构的尺寸。例如，一个单个方块的结构将具有 {x:1, y:1, z:1}
     * 的大小。
     * @throws This property can throw when used.
     *
     * 使用此属性时可能会抛出异常。
     *
     * {@link InvalidStructureError}
     */
    readonly size: Vector3;
    /**
     * @remarks
     * Returns a BlockPermutation representing the block contained
     * within the Structure at the given location.
     *
     * 返回表示在给定位置结构内的方块的 BlockPermutation。
     *
     * @param location
     * The block location relative to the Structure's origin.
     * 相对于结构原点的方块位置。
     * @returns
     * Returns a BlockPermutation. Returns undefined if a block
     * does not exist at the given location.
     * 返回 BlockPermutation。如果在给定位置不存在方块，则返回
     * undefined。
     * @throws
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * 如果位置超出结构边界则抛出异常。如果结构已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getBlockPermutation(location: Vector3): BlockPermutation | undefined;
    /**
     * @remarks
     * Returns whether the block at the given location is
     * waterlogged.
     *
     * 返回给定位置的方块是否被水淹没。
     *
     * @param location
     * The block location relative to the Structure's origin.
     * 相对于结构原点的方块位置。
     * @returns
     * Returns whether the block at the given location is
     * waterlogged. Returns false if a block does not exist at the
     * given location.
     * 返回给定位置的方块是否被水淹没。如果在给定位置不存在方块，则返回
     * false。
     * @throws
     * Throws if the location is outside the structure's bounds.
     * Throws if the Structure has been deleted.
     *
     * 如果位置超出结构边界则抛出异常。如果结构已被删除则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    getIsWaterlogged(location: Vector3): boolean;
    /**
     * @remarks
     * Returns whether the Structure is valid. The Structure may
     * become invalid if it is deleted.
     *
     * 返回结构是否有效。如果结构被删除，可能变为无效。
     *
     * @returns
     * Returns whether the Structure is valid.
     * 返回结构是否有效。
     */
    isValid(): boolean;
    /**
     * @remarks
     * Creates a copy of a Structure and saves it with a new name.
     *
     * 创建结构的副本并以新名称保存。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @param identifier
     * The name of the newly created Structure.
     * 新创建的结构的名称。
     * @param saveMode
     * Determines how the Structure should be saved. Defaults to
     * saving to the world.
     * 确定如何保存结构，默认为保存到世界。
     * @returns
     * Returns the newly created structure.
     * 返回新创建的结构。
     * @throws
     * Throws if the identifier is invalid. A valid identifier must
     * include a namespace and must be unique.
     * 如果标识符无效，则抛出异常。有效的标识符必须包含命名空间且必须唯一。
     * Throws if the Structure has been deleted.
     * 如果结构已被删除，则抛出异常。
     *
     * {@link minecraftcommon.EngineError}
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    saveAs(identifier: string, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * Saves a modified Structure to the world file.
     *
     * 将修改过的结构保存到世界文件中。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @throws
     * Throws if the Structure has been deleted.
     * 如果结构已被删除，则抛出异常。
     *
     * {@link InvalidStructureError}
     */
    saveToWorld(): void;
    /**
     * @remarks
     * Sets a BlockPermutation within a Structure.
     *
     * 在结构内设置 BlockPermutation。
     *
     * This function can't be called in read-only mode.
     *
     * 此函数无法在只读模式下调用。
     *
     * @param location
     * The block location relative to the Structure's origin.
     * 相对于结构原点的方块位置。
     * @param blockPermutation
     * The BlockPermutation to set.
     * 要设置的 BlockPermutation。
     * @throws
     * Throws if the type of block is StructureVoid.
     * 如果方块类型是 StructureVoid，则抛出异常。
     * Throws if the block is undefined and waterlogged is set to
     * true.
     * 如果方块未定义且 waterlogged 设置为 true，则抛出异常。
     * Throws if the block is air and waterlogged is set to true.
     * 如果方块为空气且 waterlogged 设置为 true，则抛出异常。
     * Throws if the location is outside the structure's bounds.
     * 如果位置超出结构边界，则抛出异常。
     * Throws if the Structure has been deleted.
     * 如果结构已被删除，则抛出异常。
     *
     * {@link minecraftcommon.InvalidArgumentError}
     *
     * {@link InvalidStructureError}
     */
    setBlockPermutation(location: Vector3, blockPermutation?: BlockPermutation): void;
}