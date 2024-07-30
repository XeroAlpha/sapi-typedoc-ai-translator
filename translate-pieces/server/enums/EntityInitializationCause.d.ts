/**
 * An enumeration describing initialization cause of an entity.
 * 
 * 描述实体初始化原因的枚举。
 */
export enum EntityInitializationCause {
    /**
     * @remarks
     * Case when an entity is created as child of other entity or
     * entities, e.g., cows making a cow or slimes making smaller
     * slimes after dying.
     * 
     * 当实体作为其他实体的孩子被创建时的情况，例如，牛生出小牛或史莱姆死亡后分裂出更小的史莱姆。
     */
    Born = 'Born',
    /**
     * @remarks
     * Case when an entity is created by an event, e.g., a
     * Wandering trader spawning llamas.
     * 
     * 当实体由事件创建时的情况，例如，流浪商人生成羊驼。
     */
    Event = 'Event',
    /**
     * @remarks
     * Case when an entity is loaded into the world.
     * 
     * 当实体被加载到世界中时的情况。
     */
    Loaded = 'Loaded',
    /**
     * @remarks
     * Case when an entity is naturally spawned in the world.
     * 
     * 当实体自然地在世界中生成时的情况。
     */
    Spawned = 'Spawned',
    /**
     * @remarks
     * Case when an entity is transformed into another entity.
     * 
     * 当实体转变成另一种实体时的情况。
     */
    Transformed = 'Transformed',
}