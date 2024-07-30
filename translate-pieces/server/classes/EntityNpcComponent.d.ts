/* IMPORT */ import { EntityComponent } from '../index';

/**
 * @beta
 * Adds NPC capabilities to an entity such as custom skin,
 * name, and dialogue interactions.
 * 
 * 为实体添加 NPC 功能，如自定义皮肤、名称和对话交互。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntityNpcComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * The DialogueScene that is opened when players first interact
     * with the NPC.
     *
     * This property can't be edited in read-only mode.
     *
     * 当玩家首次与 NPC 交互时打开的对话场景。
     *
     * 此属性在只读模式下无法编辑。
     */
    defaultScene: string;
    /**
     * @remarks
     * The name of the NPC as it is displayed to players.
     *
     * This property can't be edited in read-only mode.
     *
     * 显示给玩家的 NPC 名称。
     *
     * 此属性在只读模式下无法编辑。
     */
    name: string;
    /**
     * @remarks
     * The index of the skin the NPC will use.
     *
     * This property can't be edited in read-only mode.
     *
     * NPC 使用的皮肤索引。
     *
     * 此属性在只读模式下无法编辑。
     */
    skinIndex: number;
    static readonly componentId = 'minecraft:npc';
}