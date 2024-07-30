/* IMPORT */ import { EntityComponent } from '../index';

export class EntityTypeFamilyComponent extends EntityComponent {
    private constructor();
    static readonly componentId = 'minecraft:type_family';
    /**
     * @throws This function can throw errors.
     * 
     * 返回实体所属的所有类型家族。
     */
    getTypeFamilies(): string[];
    /**
     * @throws This function can throw errors.
     * 
     * 检查实体是否属于指定的类型家族。
     * 
     * @param typeFamily
     * 要检查的类型家族名称。
     * 
     * @returns 如果实体属于给定的类型家族，则返回 true，否则返回 false。
     */
    hasTypeFamily(typeFamily: string): boolean;
}