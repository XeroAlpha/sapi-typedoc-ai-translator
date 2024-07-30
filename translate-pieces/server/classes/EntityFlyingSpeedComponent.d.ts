/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Represents the flying speed of an entity.
 * 
 * 表示实体的飞行速度。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityFlyingSpeedComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Current value of the flying speed of the associated entity.
     * 
     * 此属性在只读模式下无法编辑。
     * 
     * 关联实体当前的飞行速度值。
     */
    value: number;
    static readonly componentId = 'minecraft:flying_speed';
}