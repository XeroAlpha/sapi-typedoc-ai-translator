/**
 * Represents a game mode for the current world experience.
 * 
 * 表示当前世界体验的游戏模式。
 */
export enum GameMode {
    /**
     * @remarks
     * World is in a more locked-down experience, where blocks may
     * not be manipulated.
     * 
     * 世界处于更受限制的体验中，在这种模式下可能无法操纵方块。
     */
    adventure = 'adventure',
    /**
     * @remarks
     * World is in a full creative mode. In creative mode, the
     * player has all the resources available in the item selection
     * tabs and the survival selection tab. They can also destroy
     * blocks instantly including those which would normally be
     * indestructible. Command and structure blocks can also be
     * used in creative mode. Items also do not lose durability or
     * disappear.
     * 
     * 世界处于完全的创造模式。在创造模式下，玩家可以访问物品选择标签和生存选择标签中所有可用资源。他们还可以瞬间破坏方块，包括通常不可摧毁的方块。命令方块和结构方块也可以在创造模式中使用。物品不会失去耐久性或消失。
     */
    creative = 'creative',
    /**
     * @remarks
     * World is in spectator mode. In spectator mode, spectators
     * are always flying and cannot become grounded. Spectators can
     * pass through solid blocks and entities without any
     * collisions, and cannot use items or interact with blocks or
     * mobs. Spectators cannot be seen by mobs or other players,
     * except for other spectators; spectators appear as a
     * transparent floating head.
     * 
     * 世界处于旁观者模式。在旁观者模式下，旁观者始终飞行且不能落地。旁观者可以无碰撞地穿过实体方块和其他实体，不能使用物品或与方块或生物互动。旁观者不能被生物或其他玩家看到，除非其他旁观者；旁观者会以透明漂浮头部的形式出现。
     */
    spectator = 'spectator',
    /**
     * @remarks
     * World is in a survival mode, where players can take damage
     * and entities may not be peaceful. Survival mode is where the
     * player must collect resources, build structures while
     * surviving in their generated world. Activities can, over
     * time, chip away at player health and hunger bar.
     * 
     * 世界处于生存模式，在这种模式下，玩家可以受到伤害，实体可能不和平。生存模式要求玩家必须收集资源、建造建筑并在这个生成的世界中生存下去。随着时间推移，活动可能会逐渐消耗玩家的生命值和饥饿度。
     */
    survival = 'survival',
}