/* IMPORT */ import { BlockLocationIterator, BoundingBox, CompoundBlockVolumeItem, CompoundBlockVolumePositionRelativity, Vector3 } from '../index';

/**
 * @beta
 * The Compound Block Volume is a collection of individual
 * block volume definitions which, as a collection, define a
 * larger volume of (sometimes non-contiguous) irregular
 * shapes.
 * This class is loosely based on the concept of CSG
 * (Computational Solid Geometry) and allows a user to create
 * complex volumes by building a stack of volumes and voids to
 * make a larger single volume.
 * For example - normally a creator would create a hollow cube
 * by creating 6 "wall" surfaces for each face.
 * With a Compound Block Volume, a creator can define a hollow
 * cube by creating a single outer solid cube, and then
 * defining a further single 'void' cube inside the larger one.
 * Similarly, the Compound Block Volume can represent irregular
 * shaped volumes (e.g. a tree consists of a trunk and lots of
 * leaf cubes which are not necessarily contiguously placed).
 * Each of the volumes added to the CompoundBlockVolume are (by
 * default) relative to the origin set (either at construction
 * or via one of the set functions).
 * However, it is also possible to push volumes to the compound
 * collection which are absolute in nature and are not affected
 * by origin changes.
 * 
 * CompoundBlockVolume 是一系列单独的方块体积定义的集合，
 * 这些定义作为一个整体，可以定义出更大的、有时不连续的、不规则形状的体积。
 * 这个类松散地基于 CSG（计算实体几何学）的概念，允许用户通过构建体积和空洞的堆栈来创建复杂的体积，以形成一个更大的单一体积。
 * 例如，通常创作者会通过为每个面创建 6 个“墙”表面来创建一个空心立方体。
 * 而使用 CompoundBlockVolume，创作者可以通过创建一个外部实心立方体，然后在较大的立方体内定义一个额外的‘空洞’立方体来定义一个空心立方体。
 * 同样，CompoundBlockVolume 可以表示不规则形状的体积（例如，一棵树由一个树干和许多叶子立方体组成，这些立方体不一定连续放置）。
 * 添加到 CompoundBlockVolume 的每个体积（默认情况下）都是相对于设置的原点（无论是在构造过程中还是通过其中一个设置函数）。
 * 但是，也可以向复合集合中推入本质上是绝对的体积，它们不受原点变化的影响。
 */
export class CompoundBlockVolume {
    /**
     * @remarks
     * Return the 'capacity' of the bounding rectangle which
     * represents the collection of volumes in the stack
     * 
     * 返回代表堆栈中体积集合的包围矩形的“容量”
     */
    readonly capacity: number;
    readonly items: CompoundBlockVolumeItem[];
    readonly itemsAbsolute: CompoundBlockVolumeItem[];
    /**
     * @remarks
     * Return the number of volumes (positive and negative) in the
     * volume stack
     * 
     * 返回体积堆栈中体积的数量（正向和负向）
     */
    readonly volumeCount: number;
    /**
     * @remarks
     * Create a CompoundBlockVolume object
     * 
     * 创建一个 CompoundBlockVolume 对象
     *
     * @param origin
     * An optional world space origin on which to center the
     * compound volume.
     * If not specified, the origin is set to (0,0,0)
     * 
     * 一个可选的世界空间原点，用于居中复合体积。
     * 如果未指定，则原点被设置为 (0,0,0)
     */
    constructor(origin?: Vector3);
    /**
     * @remarks
     * Clear the contents of the volume stack
     * 
     * 清除体积堆栈的内容
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    clear(): void;
    /**
     * @remarks
     * Fetch a Block Location Iterator for the Compound Block
     * Volume.  This iterator will allow a creator to iterate
     * across all of the selected volumes within the larger
     * bounding area.
     * Areas of a volume which have been overridden by a
     * subtractive volume will not be included in the iterator
     * step.
     * (i.e. if you push a cube to the stack, and then push a
     * subtractive volume to the same location, then the iterator
     * will step over the initial volume because it is considered
     * negative space)
     * Note that the Block Locations returned by this iterator are
     * in absolute world space (irrespective of whether the
     * compound volume items pushed are absolute or relative)
     * 
     * 获取 Compound Block Volume 的 Block Location Iterator。
     * 此迭代器允许创作者遍历较大包围区域内的所有选定体积。
     * 被减法体积覆盖的体积区域不会包含在迭代步骤中。
     * （例如，如果您向堆栈推送一个立方体，然后在同一位置推送一个减法体积，则迭代器将跳过初始体积，因为它被视为负空间）
     * 注意此迭代器返回的 Block Locations 处于绝对世界空间（无论推送到复合体积项是否为绝对或相对）
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getBlockLocationIterator(): BlockLocationIterator;
    /**
     * @remarks
     * Get the largest bounding box that represents a container for
     * all of the volumes on the stack
     * Note that the bounding box returned is represented in
     * absolute world space  (irrespective of whether the compound
     * volume items pushed are absolute or relative)
     * 
     * 获取代表堆栈上所有体积容器的最大包围盒。
     * 注意返回的包围盒以绝对世界空间表示（无论推送到复合体积项是否为绝对或相对）
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getBoundingBox(): BoundingBox;
    /**
     * @remarks
     * Get the max block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the max location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     * 
     * 获取代表堆栈上体积的最外层包围矩形的最大方块位置。
     * 注意返回的最大位置处于绝对世界空间（无论推送到复合体积项是否为绝对或相对）
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getMax(): Vector3;
    /**
     * @remarks
     * Get the min block location of the outermost bounding
     * rectangle which represents the volumes on the stack.
     * Note that the min location returned is in absolute world
     * space (irrespective of whether the compound volume items
     * pushed are absolute or relative)
     * 
     * 获取代表堆栈上体积的最外层包围矩形的最小方块位置。
     * 注意返回的最小位置处于绝对世界空间（无论推送到复合体积项是否为绝对或相对）
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getMin(): Vector3;
    /**
     * @remarks
     * Fetch the origin in world space of the compound volume
     * 
     * 获取复合体积在世界空间中的原点
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    getOrigin(): Vector3;
    /**
     * @remarks
     * Return a boolean which signals if there are any volume items
     * pushed to the volume
     * 
     * 返回一个布尔值，指示是否有任何体积项被推送到体积中
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    isEmpty(): boolean;
    /**
     * @remarks
     * Return a boolean representing whether or not a given
     * absolute world space block location is inside a positive
     * block volume.
     * E.g. if the stack contains a large cube followed by a
     * slightly smaller negative cube, and the test location is
     * within the negative cube - the function will return false
     * because it's not 'inside' a volume (it IS inside the
     * bounding rectangle, but it is not inside a positively
     * defined location)
     * 
     * 返回一个布尔值，表示给定的绝对世界空间方块位置是否位于正向方块体积内。
     * 例如，如果堆栈包含一个大立方体后跟着一个小一些的负立方体，且测试位置位于负立方体内，则该函数将返回 false，因为它不在体积“内部”（它确实位于包围矩形内，但它不在正确定义的位置内）
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    isInside(worldLocation: Vector3): boolean;
    /**
     * @remarks
     * Inspect the last entry pushed to the volume stack without
     * affecting the stack contents.
     * 
     * 检查推送到体积堆栈的最后一个条目而不影响堆栈内容。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param forceRelativity
     * Determine whether the function returns a
     * CompoundBlockVolumeItem which is forced into either relative
     * or absolute coordinate system.
     * `true` = force returned item to be relative to volume origin
     * `false` = force returned item to be absolute world space
     * location
     * 
     * 如果未指定标志，则返回的项保留其推送时的相对性
     *
     * 如果未指定标志，则返回的项保留其推送时的相对性
     *
     * @returns
     * Returns undefined if the stack is empty
     * 
     * 如果堆栈为空，则返回 undefined
     */
    peekLastVolume(forceRelativity?: CompoundBlockVolumePositionRelativity): CompoundBlockVolumeItem | undefined;
    /**
     * @remarks
     * Remove the last entry from the volume stack.  This will
     * reduce the stack size by one
     * 
     * 从体积堆栈中移除最后一个条目。这将使堆栈大小减少一个
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     */
    popVolume(): boolean;
    /**
     * @remarks
     * Push a volume item to the stack.  The volume item contains
     * an 'action' parameter which determines whether this volume
     * is a positive or negative space.
     * The item also contains a `locationRelativity` which
     * determines whether it is relative or absolute to the
     * compound volume origin
     * 
     * 将一个体积项推送到堆栈。体积项包含一个 'action' 参数，该参数确定该体积是正向还是负向空间。
     * 该项还包含 `locationRelativity`，该属性确定它是相对于复合体积原点还是绝对位置
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param item
     * Item to push to the end of the stack
     * 
     * 推送到堆栈末尾的项
     */
    pushVolume(item: CompoundBlockVolumeItem): void;
    /**
     * @remarks
     * If the volume stack is empty, this function will push the
     * specified item to the stack.
     * If the volume stack is NOT empty, this function will replace
     * the last item on the stack with the new item.
     * 
     * 如果体积堆栈为空，此函数将指定的项推送到堆栈。
     * 如果体积堆栈非空，此函数将用新项替换堆栈中的最后一项。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param item
     * Item to add or replace
     * 
     * 要添加或替换的项
     */
    replaceOrAddLastVolume(item: CompoundBlockVolumeItem): boolean;
    /**
     * @remarks
     * Set the origin of the compound volume to an absolute world
     * space location
     * 
     * 将复合体积的原点设置为绝对世界空间位置
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param preserveExistingVolumes
     * This optional boolean flag determines whether the relative
     * `CompoundBlockVolumeItem`'s are frozen in place, or are
     * affected by the new origin.
     * Imagine a scenario where you have a series of relative
     * locations around an origin which make up a sphere; all of
     * these locations are in the range of -2 to 2.
     * Push each of these locations to the compound volume as
     * relative items.
     * Now, move the origin and all of the locations representing
     * the sphere move accordingly.
     * However, let's say you want to add a 2nd sphere next to the
     * 1st.
     * In this case, set the new origin a few locations over, but
     * 'preserveExistingVolumes' = true.
     * This will set a new origin, but the existing sphere
     * locations will remain relative to the original origin.
     * Now, you can push the relative sphere locations again (this
     * time they will be relative to the new origin) - resulting in
     * 2 spheres next to each other.
     * 
     * 此可选布尔标志确定相对 `CompoundBlockVolumeItem` 是否保持不变，还是受新原点影响。
     * 设想一种情况：您有一系列围绕原点的相对位置构成一个球体；所有这些位置都在 -2 到 2 的范围内。
     * 将这些位置作为相对项推送到复合体积。
     * 现在，移动原点，表示球体的所有位置都会相应移动。
     * 但是，假设您想要在第一个球体旁边添加第二个球体。
     * 在这种情况下，将新原点设置得稍微远一点，但 'preserveExistingVolumes' = true。
     * 这将设置一个新的原点，但现有的球体位置将仍然相对于原始原点。
     * 现在，您可以再次推送相对的球体位置（这次它们将相对于新的原点）—从而得到两个相邻的球体。
     */
    setOrigin(position: Vector3, preserveExistingVolumes?: boolean): void;
    /**
     * @remarks
     * Similar to {@link CompoundBlockVolume.setOrigin} - this
     * function will translate the origin by a given delta to a new
     * position
     * 
     * 类似于 {@link CompoundBlockVolume.setOrigin} — 此函数将根据给定的增量将原点平移到新位置
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     * @param preserveExistingVolumes
     * See the description for the arguments to {@link
     * CompoundBlockVolume.setOrigin}
     * 
     * 查看 {@link CompoundBlockVolume.setOrigin} 参数的描述
     */
    translateOrigin(delta: Vector3, preserveExistingVolumes?: boolean): void;
}