/* IMPORT */ import { EntityComponent } from '../index';

/**
 * Skin Id value. Can be used to differentiate skins, such as
 * base skins for villagers.
 * 
 * 皮肤ID值。可用于区分不同的皮肤，例如村民的基础皮肤。
 */
// @ts-ignore Class inheritance allowed for native defined classes
export class EntitySkinIdComponent extends EntityComponent {
    private constructor();
    /**
     * @remarks
     * Returns the value of the skin Id identifier of the entity.
     * 
     * 返回实体的皮肤ID标识符的值。
     *
     * This property can't be edited in read-only mode.
     * 
     * 此属性在只读模式下无法编辑。
     */
    value: number;
    static readonly componentId = 'minecraft:skin_id';
}