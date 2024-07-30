/* IMPORT */ import { EntityComponent } from '../index';

/**
 * When added, this component signifies that this entity is
 * currently carrying a chest.
 * 
 * 添加后，此组件表明此实体当前携带一个箱子。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityIsChestedComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:is_chested';
}