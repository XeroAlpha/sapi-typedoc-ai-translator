/* IMPORT */ import { Dimension, InvalidStructureError, Structure, StructureCreateOptions, StructurePlaceOptions, StructureSaveMode, Vector3, minecraftcommon } from '../index';

/**
 * Manager for Structure related APIs. Includes APIs for
 * creating, getting, placing and deleting Structures.
 * 
 * 结构管理器，包含用于创建、获取、放置和删除结构的相关API。
 */
export class StructureManager {
    private constructor();
    /**
     * @remarks
     * 创建一个空的结构体在内存中。使用 {@link
     * Structure.setBlockPermutation} 来填充结构体的方块，并使用 {@link Structure.saveAs}
     * 保存更改。
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @param identifier
     * 结构体的名称。有效的标识符必须包含命名空间且必须是唯一的。
     * @param size
     * 结构体的尺寸。例如，要创建单个方块的结构体，尺寸应为 {x:1, y:1, z:1}。
     * @param saveMode
     * 结构体创建时的保存方式，默认为 StructureSaveMode.Memory。
     * @returns
     * 返回新创建的 Structure。
     * @throws
     * 如果标识符无效则抛出异常。有效的标识符必须包含命名空间且必须唯一。
     * 
     * {@link minecraftcommon.EngineError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    /**
     * @remarks
     * 根据世界中的方块创建一个新的结构体。这在功能上等同于 /structure save 命令。
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @param identifier
     * 结构体的名称。有效的标识符必须包含命名空间且必须是唯一的。
     * @param dimension
     * 应从中读取方块的维度。
     * @param options
     * 从世界创建结构体的附加选项。
     * @returns
     * 返回新创建的 Structure。
     * @throws
     * 如果标识符无效则抛出异常。有效的标识符必须包含命名空间且必须唯一。
     * 如果结构体边界超过最大尺寸则抛出异常。
     * 如果结构体边界包含超出世界边界的方块则抛出异常。
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    /**
     * @remarks
     * 从内存和世界中（如果存在）删除一个结构体。
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @param structure
     * 应被删除的结构体标识符或Structure对象。注意，删除后Structure对象将变为无效。
     * @returns
     * 返回结构体是否被移除。
     * @throws
     * 如果无法移除结构体则抛出异常。例如，从行为包加载的结构体。
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     */
    delete(structure: string | Structure): boolean;
    /**
     * @remarks
     * 获取一个保存在内存或世界中的结构体。
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @param identifier
     * 要获取的结构体的名称。
     * @returns
     * 如果结构体存在则返回它，否则返回undefined。
     */
    get(identifier: string): Structure | undefined;
    /**
     * @remarks
     * 此函数不能在只读模式下调用。
     * 
     */
    getWorldStructureIds(): string[];
    /**
     * @remarks
     * 在世界中放置一个结构体。放置在未加载区块中的结构体会被排队等待加载。
     * 
     * 此函数不能在只读模式下调用。
     * 
     * @param structure
     * 结构体的标识符或一个Structure对象。
     * @param dimension
     * 结构体应被放置的维度。
     * @param location
     * 结构体在维度中的放置位置。
     * @param options
     * 结构体放置的附加选项。
     * @throws
     * 如果完整性值超出范围[0,1]则抛出异常。
     * 如果完整性种子无效则抛出异常。
     * 如果放置位置包含超出世界边界的方块则抛出异常。
     * 
     * {@link minecraftcommon.ArgumentOutOfBoundsError}
     * 
     * {@link minecraftcommon.InvalidArgumentError}
     * 
     * {@link InvalidStructureError}
     */
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
}