/* IMPORT */ import { EntityBaseMovementComponent } from '../index';

/**
 * When added, this movement control allows the mob to swim in
 * water and walk on land.
 * 
 * 添加后，此移动控制使生物能够在水中游泳并在陆地上行走。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityMovementAmphibiousComponent extends EntityBaseMovementComponent {
    private constructor();
    static readonly componentId = 'minecraft:movement.amphibious';
}