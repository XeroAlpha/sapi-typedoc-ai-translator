/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity is an
 * illager captain.
 * 
 * 添加此组件后，表示该实体是一位掠夺者队长。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsIllagerCaptainComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_illager_captain';
}