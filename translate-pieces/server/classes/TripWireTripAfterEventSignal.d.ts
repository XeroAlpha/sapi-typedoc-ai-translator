/* IMPORT */ import { TripWireTripAfterEvent } from '../index';

/**
 * Manages callbacks that are connected to when a trip wire is
 * tripped.
 * @example tripWireTripEvent.ts
 * ```typescript
 * import { Vector3, world, BlockPermutation, TripWireTripAfterEvent, system } from '@minecraft/server';
 *
 * const overworld = world.getDimension('overworld');
 * const targetLocation: Vector3 = { x: 0, y: 0, z: 0 };
 *
 * // set up a tripwire
 * const redstone = overworld.getBlock({ x: targetLocation.x, y: targetLocation.y - 1, z: targetLocation.z });
 * const tripwire = overworld.getBlock(targetLocation);
 *
 * if (redstone === undefined || tripwire === undefined) {
 *     console.warn('Could not find block at location.');
 * } else {
 *
 * redstone.setPermutation(BlockPermutation.resolve('redstone_block'));
 * tripwire.setPermutation(BlockPermutation.resolve('tripwire'));
 *
 * world.afterEvents.tripWireTrip.subscribe((tripWireTripEvent: TripWireTripAfterEvent) => {
 *     const eventLoc = tripWireTripEvent.block.location;
 *
 *     if (eventLoc.x === targetLocation.x && eventLoc.y === targetLocation.y && eventLoc.z === targetLocation.z) {
 *         console.warn(
 *             'Tripwire trip event at tick ' +
 *                 system.currentTick +
 *                 (tripWireTripEvent.sources.length > 0 ? ' by entity ' + tripWireTripEvent.sources[0].id : ''),
 *         );
 *     }
 * });
 * }
 * ```
 * 
 * 管理与绊线被触发时关联的回调。
 */
export class TripWireTripAfterEventSignal {
    private constructor();
    /**
     * @remarks
     * Adds a callback that will be called when a trip wire is
     * tripped.
     * 
     * 当绊线被触发时，添加一个将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void;
    /**
     * @remarks
     * Removes a callback from being called when a trip wire is
     * tripped.
     * 
     * 移除当绊线被触发时将被调用的回调。
     *
     * This function can't be called in read-only mode.
     * 
     * 此函数无法在只读模式下调用。
     *
     */
    unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void;
}