/**
 * Data for an event that happens when an entity is removed
 * from the world (for example, the entity is unloaded because
 * it is not close to players.)
 * 
 * 当实体从世界移除时（例如，实体因为距离玩家太远而被卸载）
 * 所触发事件的数据。
 */
export class EntityRemoveAfterEvent {
    private constructor();
    /**
     * @remarks
     * Id of the entity that was removed.
     *
     * 被移除实体的ID。
     */
    readonly removedEntityId: string;
    /**
     * @remarks
     * Identifier of the type of the entity removed - for example,
     * 'minecraft:skeleton'.
     *
     * 被移除实体类型的标识符——例如，'minecraft:skeleton'。
     */
    readonly typeId: string;
}