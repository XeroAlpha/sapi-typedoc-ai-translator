/* IMPORT */ import { EntityFilter, Vector3 } from '../index';

/**
 * Contains options for selecting entities within an area.
 * 
 * @example BlockConditional.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon
 *
 * // Equivalent scripting code would be:
 * function spawnFish(dimension: Dimension) {
 *     dimension
 *         .getEntities({
 *             type: 'fox',
 *         })
 *         .filter(entity => {
 *             const block = dimension.getBlock({
 *                 x: entity.location.x,
 *                 y: entity.location.y - 1,
 *                 z: entity.location.z,
 *             });
 *
 *             return block !== undefined && block.matches('minecraft:stone');
 *         })
 *         .forEach(entity => {
 *             dimension.spawnEntity('salmon', entity.location);
 *         });
 * }
 * ```
 * 
 * @example EntityPropertyOptions.ts
 * ```typescript
 * import { world, EntityQueryOptions } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[has_property={property=propId}]
 *
 * // Equivalent scripting code would be:
 * function findEntitiesHavingAProperty(propId: string) {
 *     const queryOption: EntityQueryOptions = {
 *         propertyOptions: [{ propertyId: propId }]
 *     };
 *
 *     const overworld = world.getDimension('overworld');
 *     const entities = overworld.getEntities(queryOption);
 * }
 *
 * // Having this command:
 *
 * // execute as @e[has_property={propId=propValue}]
 *
 * // Equivalent scripting code would be:
 * function findEntitiesHavingPropertyEqualsTo(propId: string, propValue: boolean | number | string) {
 *     const queryOption: EntityQueryOptions = {
 *         propertyOptions: [{ propertyId: propId, value: { equals: propValue } }]
 *     };
 *
 *     const overworld = world.getDimension('overworld');
 *     const entities = overworld.getEntities(queryOption);
 * }
 * ```
 * 
 * @example PlaySoundChained.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run playsound raid.horn @a
 *
 * // Equivalent scripting code would be:
 * function playSounds(dimension: Dimension) {
 *     const targetPlayers = dimension.getPlayers();
 *     const originEntities = dimension.getEntities({
 *         type: 'armor_stand',
 *         name: 'myArmorStand',
 *         tags: ['dummyTag1'],
 *         excludeTags: ['dummyTag2'],
 *     });
 *
 *     originEntities.forEach(entity => {
 *         targetPlayers.forEach(player => {
 *             player.playSound('raid.horn');
 *         });
 *     });
 * }
 * ```
 * 
 * @example SendMessageAllPlayers.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { "rawtext": [{"translate": "hello.world" }] }
 *
 * // Equivalent scripting code would be:
 * function sendMessagesToPlayers(dimension: Dimension) {
 *     const targetPlayers = dimension.getPlayers();
 *     const originEntities = dimension.getEntities({
 *         type: 'armor_stand',
 *         name: 'myArmorStand',
 *         tags: ['dummyTag1'],
 *         excludeTags: ['dummyTag2'],
 *     });
 *
 *     originEntities.forEach(entity => {
 *         targetPlayers.forEach(player => {
 *             player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });
 *         });
 *     });
 * }
 * ```
 * 
 * @example SetScoreBoardChained.ts
 * ```typescript
 * import { Dimension, world } from '@minecraft/server';
 *
 * // Having these commands:
 *
 * // scoreboard objectives add scoreObjective1 dummy
 * // scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1
 *
 * // Equivalent scripting code would be:
 * function setScores(dimension: Dimension) {
 *     const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
 *     dimension
 *         .getEntities({
 *             type: 'armor_stand',
 *             name: 'myArmorStand',
 *         })
 *         .forEach(entity => {
 *             if (entity.scoreboardIdentity !== undefined) {
 *                 objective.setScore(entity.scoreboardIdentity, -1);
 *             }
 *         });
 * }
 * ```
 * 
 * @example SummonMobChained.ts
 * ```typescript
 * import { Dimension } from '@minecraft/server';
 *
 * // Having this command:
 *
 * // execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~
 *
 * // Equivalent scripting code would be:
 * function spawnPigs(dimension: Dimension) {
 *     const armorStandArray = dimension.getEntities({
 *         type: 'armor_stand',
 *     });
 *     const playerArray = dimension.getPlayers({
 *         location: { x: 0, y: -60, z: 0 },
 *         closest: 4,
 *         maxDistance: 15,
 *     });
 *     armorStandArray.forEach(entity => {
 *         playerArray.forEach(player => {
 *             dimension.spawnEntity('pig', {
 *                 x: player.location.x + 1,
 *                 y: player.location.y,
 *                 z: player.location.z,
 *             });
 *         });
 *     });
 * }
 * ```
 */
// @ts-ignore Class inheritance allowed for native defined classes
export interface EntityQueryOptions extends EntityFilter {
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * closest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     * 限制返回的实体数量，选择距离指定位置最近的 N 个实体。查询选项对象中也必须指定位置值。
     */
    closest?: number;
    /**
     * @remarks
     * Limits the number of entities to return, opting for the
     * farthest N entities as specified by this property. The
     * location value must also be specified on the query options
     * object.
     *
     * 限制返回的实体数量，选择距离指定位置最远的 N 个实体。查询选项对象中也必须指定位置值。
     */
    farthest?: number;
    /**
     * @remarks
     * Adds a seed location to the query that is used in
     * conjunction with closest, farthest, limit, volume, and
     * distance properties.
     *
     * 向查询添加一个基准位置，此位置与 `closest`、`farthest`、`limit`、`volume` 和 `distance` 属性一起使用。
     */
    location?: Vector3;
    /**
     * @remarks
     * If specified, includes entities that are less than this
     * distance away from the location specified in the location
     * property.
     *
     * 如果指定了该属性，将包括与 `location` 属性中指定的位置相距小于该距离的实体。
     */
    maxDistance?: number;
    /**
     * @remarks
     * If specified, includes entities that are least this distance
     * away from the location specified in the location property.
     *
     * 如果指定了该属性，将包括与 `location` 属性中指定的位置相距至少该距离的实体。
     */
    minDistance?: number;
    /**
     * @remarks
     * In conjunction with location, specified a cuboid volume of
     * entities to include.
     *
     * 结合位置属性，指定要包含的实体立方体体积。
     */
    volume?: Vector3;
}