/**
 * Describes the source of damage from an Entity.
 * 
 * 描述来自实体的伤害来源。
 */
export enum EntityDamageCause {
    /**
     * @remarks
     * Damage caused by a falling anvil.
     * 
     * 被掉落的铁砧造成的伤害。
     */
    anvil = 'anvil',
    /**
     * @remarks
     * Damage caused from a non-Entity explosion. For example, an
     * exploding bed.
     * 
     * 非实体爆炸造成的伤害。例如，爆炸的床。
     */
    blockExplosion = 'blockExplosion',
    /**
     * @remarks
     * Damage caused by Campfires.
     * 
     * 营火造成的伤害。
     */
    campfire = 'campfire',
    /**
     * @remarks
     * Unused.
     * 
     * 未使用。
     */
    charging = 'charging',
    /**
     * @remarks
     * Damage caused by physically touching an Entity or Block. For
     * example, touching a Sweet Berry bush or Pufferfish.
     * 
     * 直接接触实体或方块造成的伤害。例如，接触甜浆果丛或河豚。
     */
    contact = 'contact',
    /**
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * liquid block.
     * 
     * 在液体方块中窒息造成的伤害。
     */
    drowning = 'drowning',
    /**
     * @remarks
     * Damage caused by an Entity attack.
     * 
     * 实体攻击造成的伤害。
     */
    entityAttack = 'entityAttack',
    /**
     * @remarks
     * Damage caused by an Entity explosion. For example, a Creeper
     * or Wither.
     * 
     * 实体爆炸造成的伤害。例如，苦力怕或凋灵。
     */
    entityExplosion = 'entityExplosion',
    /**
     * @remarks
     * Damage caused by falling onto the ground.
     * 
     * 跌落到地面造成的伤害。
     */
    fall = 'fall',
    /**
     * @remarks
     * Damage caused by falling blocks. Note: Anvils and
     * Stalactites have their own damage causes.
     * 
     * 落下的方块造成的伤害。注意：铁砧和钟乳石有它们自己的伤害源。
     */
    fallingBlock = 'fallingBlock',
    /**
     * @remarks
     * Damage caused by catching on fire.
     * 
     * 着火造成的伤害。
     */
    fire = 'fire',
    /**
     * @remarks
     * Damage caused by burning over time.
     * 
     * 持续燃烧造成的伤害。
     */
    fireTick = 'fireTick',
    /**
     * @remarks
     * Damage caused by fireworks.
     * 
     * 烟火火箭造成的伤害。
     */
    fireworks = 'fireworks',
    /**
     * @remarks
     * Damage caused by flying into a wall at high speed while
     * gliding with Elytra.
     * 
     * 使用鞘翅高速飞行撞墙造成的伤害。
     */
    flyIntoWall = 'flyIntoWall',
    /**
     * @remarks
     * Damage caused by staying inside a Powder Snow block.
     * 
     * 在粉末雪方块中停留造成的伤害。
     */
    freezing = 'freezing',
    /**
     * @remarks
     * Damage caused by touching a Lava block.
     * 
     * 接触岩浆方块造成的伤害。
     */
    lava = 'lava',
    /**
     * @remarks
     * Damage caused by being struck by lightning.
     * 
     * 被雷电击中造成的伤害。
     */
    lightning = 'lightning',
    /**
     * @remarks
     * Damage caused by magical attacks. For example, Evoker Fang
     * or Conduit Block.
     * 
     * 魔法攻击造成的伤害。例如，唤魔者尖牙或潮涌核心方块。
     */
    magic = 'magic',
    /**
     * @remarks
     * Damage caused by touching a Magma block.
     * 
     * 接触岩浆块造成的伤害。
     */
    magma = 'magma',
    /**
     * @remarks
     * Damage caused by no source. For example, from a command or
     * script.
     * 
     * 无来源的伤害。例如，来自命令或脚本。
     */
    none = 'none',
    /**
     * @remarks
     * Damage caused by an indirect source. For example, setting a
     * mob's health to 0 in a behavior pack.
     * 
     * 间接来源造成的伤害。例如，在行为包中将生物的健康值设置为0。
     */
    override = 'override',
    /**
     * @remarks
     * Damage caused by a Piston.
     * 
     * 活塞推挤造成的伤害。
     */
    piston = 'piston',
    /**
     * @remarks
     * Damage caused by a projectile.
     * 
     * 投射物造成的伤害。
     */
    projectile = 'projectile',
    /**
     * @remarks
     * Damage caused by Goat ramming.
     * 
     * 山羊冲撞造成的伤害。
     */
    ramAttack = 'ramAttack',
    /**
     * @remarks
     * Damage caused by the /kill command.
     * 
     * 杀死命令（/kill）造成的伤害。
     */
    selfDestruct = 'selfDestruct',
    /**
     * @remarks
     * Damage caused by the Warden's Sonic Boom attack.
     * 
     * 守护者的声波攻击造成的伤害。
     */
    sonicBoom = 'sonicBoom',
    /**
     * @remarks
     * Damage caused by a Soul Campfire.
     * 
     * 灵魂营火造成的伤害。
     */
    soulCampfire = 'soulCampfire',
    /**
     * @remarks
     * Damage caused by a falling Stalactite block.
     * 
     * 落下的钟乳石方块造成的伤害。
     */
    stalactite = 'stalactite',
    /**
     * @remarks
     * Damage caused by touching a Stalagmite block.
     * 
     * 接触石笋方块造成的伤害。
     */
    stalagmite = 'stalagmite',
    /**
     * @remarks
     * Damage caused over time by having an empty hunger bar.
     * 
     * 饥饿造成的伤害。
     */
    starve = 'starve',
    /**
     * @remarks
     * Damage caused by an Entity being out of air and inside a
     * non-liquid block.
     * 
     * 在非液体方块中窒息造成的伤害。
     */
    suffocation = 'suffocation',
    /**
     * @remarks
     * Damage caused by an Entity killing itself. For example, from
     * the /kill command.
     * 
     * 实体自杀造成的伤害。例如，使用 /kill 命令。
     */
    suicide = 'suicide',
    /**
     * @remarks
     * Damage caused by an Entity being in an inhabitable climate.
     * For example, a Snow Golem in a biome with a temperature
     * greater than 1.
     * 
     * 实体处于不适宜生存的气候中造成的伤害。例如，温度大于1的生物群系中的雪傀儡。
     */
    temperature = 'temperature',
    /**
     * @remarks
     * Damage caused by the Thorns armor enchantment and by the
     * Guardian thorns effect.
     * 
     * 荆棘盔甲附魔和守卫者荆棘效果造成的伤害。
     */
    thorns = 'thorns',
    /**
     * @remarks
     * Damage caused over time by falling into the void.
     * 
     * 掉入虚空造成的持续伤害。
     */
    'void' = 'void',
    /**
     * @remarks
     * Damage caused by the Wither effect. For example, from
     * touching a Wither Rose.
     * 
     * 凋零效果造成的伤害。例如，接触凋零玫瑰。
     */
    wither = 'wither',
}