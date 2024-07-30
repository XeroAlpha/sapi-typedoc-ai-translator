/* IMPORT */ import { BlockType, ItemStack } from '../index';

/**
 * Contains the combination of type {@link BlockType} and
 * properties (also sometimes called block state) which
 * describe a block (but does not belong to a specific {@link
 * Block}).
 * @example createTranslatedSign.ts
 * ```typescript
 * // A function the creates a sign at the specified location with the specified text
 * import { DimensionLocation, BlockPermutation, BlockComponentTypes } from '@minecraft/server';
 * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
 *
 * function createSignAt(location: DimensionLocation) {
 *     const signBlock = location.dimension.getBlock(location);
 *
 *     if (!signBlock) {
 *         console.warn('Could not find a block at specified location.');
 *         return;
 *     }
 *
 *     const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });
 *     signBlock.setPermutation(signPerm); // Update block to be a sign
 *
 *     // Update the sign block's text
 *     // with "Steve's Head"
 *     const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
 *     if (signComponent) {
 *         signComponent.setText({ translate: 'item.skull.player.name', with: ['Steve'] });
 *     }
 * }
 * ```
 */
export class BlockPermutation {
    private constructor();
    /**
     * @remarks
     * The {@link BlockType} that the permutation has.
     *
     */
    readonly 'type': BlockType;
    /**
     * @remarks
     * Returns all available block states associated with this
     * block.
     *
     * @returns
     * 返回该排列包含的所有方块状态列表。
     */
    getAllStates(): Record<string, boolean | number | string>;
    /**
     * @remarks
     * Retrieves a prototype item stack based on this block
     * permutation that can be used with item
     * Container/ContainerSlot APIs.
     *
     * @param amount
     * Number of instances of this block to place in the prototype
     * item stack.
     */
    getItemStack(amount?: number): ItemStack | undefined;
    /**
     * @remarks
     * Gets a state for the permutation.
     *
     * @param stateName
     * Name of the block state whose value is to be returned.
     * @returns
     * 返回该排列的状态（如果有），否则返回 `undefined`。
     */
    getState(stateName: string): boolean | number | string | undefined;
    /**
     * @rc
     * @remarks
     * Creates a copy of the permutation.
     *
     */
    getTags(): string[];
    /**
     * @rc
     * @remarks
     * Checks to see if the permutation has a specific tag.
     *
     * @returns
     * 如果该排列具有该标签，则返回 `true`，否则返回 `false`。
     * @example check_block_tags.js
     * ```typescript
     * import { world } from "@minecraft/server";
     *
     * // Fetch the block
     * const block = world.getDimension("overworld").getBlock({ x: 1, y: 2, z: 3 });
     * const blockPerm = block.getPermutation();
     *
     * console.log(`Block is dirt: ${blockPerm.hasTag("dirt")}`);
     * console.log(`Block is wood: ${blockPerm.hasTag("wood")}`);
     * console.log(`Block is stone: ${blockPerm.hasTag("stone")}`);
     * ```
     */
    hasTag(tag: string): boolean;
    /**
     * @remarks
     * Returns a boolean whether a specified permutation matches
     * this permutation. If states is not specified, matches checks
     * against the set of types more broadly.
     *
     * @param blockName
     * An optional set of states to compare against.
     */
    matches(blockName: string, states?: Record<string, boolean | number | string>): boolean;
    /**
     * @remarks
     * Returns a derived BlockPermutation with a specific property
     * set.
     *
     * @param name
     * Identifier of the block property.
     * @param value
     * Value of the block property.
     * @throws This function can throw errors.
     */
    withState(name: string, value: boolean | number | string): BlockPermutation;
    /**
     * @remarks
     * Given a type identifier and an optional set of properties,
     * will return a BlockPermutation object that is usable in
     * other block APIs (e.g., block.setPermutation)
     *
     * @param blockName
     * Identifier of the block to check.
     * @throws This function can throw errors.
     * @example addBlockColorCube.ts
     * ```typescript
     * import { DimensionLocation, BlockPermutation } from '@minecraft/server';
     * import { MinecraftBlockTypes } from '@minecraft/vanilla-data';
     *
     * const allWoolBlocks: string[] = [
     *     ... (omitted for brevity)
     * ];
     *
     * const cubeDim = 7;
     *
     * function placeRainbowCube(location: DimensionLocation) {
     *     ... (omitted for brevity)
     * }
     * ```
     */
    static resolve(blockName: string, states?: Record<string, boolean | number | string>): BlockPermutation;
}