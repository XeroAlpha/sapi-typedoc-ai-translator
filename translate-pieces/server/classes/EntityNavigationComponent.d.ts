/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Allows this entity to generate paths that include vertical
 * walls (for example, like Minecraft spiders do.)
 * 
 * 允许此实体生成包含垂直墙壁的路径（例如，像 Minecraft 中的蜘蛛那样）。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Tells the pathfinder to avoid blocks that cause damage when
     * finding a path.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器在寻找路径时避开会造成伤害的方块。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly avoidDamageBlocks: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid portals (like nether portals)
     * when finding a path.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器在寻找路径时避开传送门（如下界传送门）。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly avoidPortals: boolean;
    /**
     * @remarks
     * Whether or not the pathfinder should avoid tiles that are
     * exposed to the sun when creating paths.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器在创建路径时是否应避开暴露在阳光下的方块。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly avoidSun: boolean;
    /**
     * @remarks
     * Tells the pathfinder to avoid water when creating a path.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器在创建路径时避开水。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly avoidWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump out of water
     * (like a dolphin).
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器能否跳出水面（如同海豚一样）。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canBreach: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * and break it.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器可以穿过关闭的门并破坏它。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canBreakDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can float.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能漂浮。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canFloat: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can jump up blocks.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能跳上方块。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canJump: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed door
     * assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器可以穿过关闭的门，假设 AI 会打开门。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canOpenDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can path through a closed iron
     * door assuming the AI will open the door.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器可以穿过关闭的铁门，假设 AI 会打开门。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canOpenIronDoors: boolean;
    /**
     * @remarks
     * Whether a path can be created through a door.
     *
     * @throws This property can throw when used.
     * 
     * 是否可以通过门创建路径。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canPassDoors: boolean;
    /**
     * @remarks
     * Tells the pathfinder that it can start pathing when in the
     * air.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器可以在空中开始寻路。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canPathFromAir: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the lava.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能在熔岩表面行走。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canPathOverLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel on the
     * surface of the water.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能在水面行走。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canPathOverWater: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it will be pulled down
     * by gravity while in water.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器在水中是否会受到重力影响而下沉。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canSink: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can path anywhere
     * through water and plays swimming animation along that path.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否可以在水中任意地方寻路，并沿着该路径播放游泳动画。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canSwim: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground outside water.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能在水外的地面上行走。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canWalk: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can travel in lava
     * like walking on ground.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能在熔岩中行走，如同在地面上行走一样。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly canWalkInLava: boolean;
    /**
     * @remarks
     * Tells the pathfinder whether or not it can walk on the
     * ground or go underwater.
     *
     * @throws This property can throw when used.
     * 
     * 指示寻路器是否能在地面上行走或潜入水下。
     * 
     * @throws 此属性在使用时可能会抛出异常。
     */
    readonly isAmphibious: boolean;
}