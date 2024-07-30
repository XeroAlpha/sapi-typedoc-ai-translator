/* IMPORT */ import { Block, BlockPermutation, Direction, Entity } from '../index';

/**
 * Contains information related to an entity hitting a block.
 * 
 * 包含与实体攻击方块相关的信息。
 */
export class EntityHitBlockAfterEvent {
    private constructor();
    /**
     * @remarks
     * Face of the block that was hit.
     * 
     * 被攻击的方块的面。
     */
    readonly blockFace: Direction;
    /**
     * @remarks
     * Entity that made the attack.
     * 
     * 发起攻击的实体。
     */
    readonly damagingEntity: Entity;
    /**
     * @remarks
     * Block that was hit by the attack.
     * 
     * 被攻击的方块。
     */
    readonly hitBlock: Block;
    /**
     * @rc
     * @remarks
     * Block permutation that was hit by the attack.
     * 
     * 被攻击的方块变体。
     */
    readonly hitBlockPermutation: BlockPermutation;
}