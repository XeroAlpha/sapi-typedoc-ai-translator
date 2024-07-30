/* IMPORT */ import { Vector3 } from '../index';

/**
 * Describes a particular seating position on this rideable
 * entity.
 * 
 * 描述了可骑乘实体上的特定座位位置。
 */
export class Seat {
    private constructor();
    /**
     * @remarks
     * Angle in degrees that a rider is allowed to rotate while
     * riding this entity.
     * 
     * 骑乘此实体时，骑手允许旋转的角度（以度为单位）。
     */
    readonly lockRiderRotation: number;
    /**
     * @remarks
     * A maximum number of riders that this seat can support.
     * 
     * 此座位可支持的最大骑手数量。
     */
    readonly maxRiderCount: number;
    /**
     * @remarks
     * A minimum number of riders that can be placed in this seat
     * position, if this seat is to be filled.
     * 
     * 如果要填充此座位，则可以放置在此座位位置上的最少骑手数量。
     */
    readonly minRiderCount: number;
    /**
     * @remarks
     * Physical location of this seat, relative to the entity's
     * location.
     * 
     * 相对于实体位置的此座位的实际位置。
     */
    readonly position: Vector3;
    /**
     * @remarks
     * Angle in degrees to rotate riders by.
     * 
     * 旋转骑手的角度（以度为单位）。
     */
    readonly seatRotation: number;
}