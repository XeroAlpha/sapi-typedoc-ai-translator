/* IMPORT */ import { EntityType } from '../index';

/**
 * Used for accessing all entity types currently available for
 * use within the world.
 * 
 * 用于访问当前世界中所有可用的实体类型。
 */
export class EntityTypes {
    private constructor();
    /**
     * @remarks
     * Retrieves an entity type using a string-based identifier.
     * 
     * 使用基于字符串的标识符获取实体类型。
     */
    static get(identifier: string): EntityType | undefined;
    /**
     * @remarks
     * Retrieves a set of all entity types within this world.
     * 
     * 获取当前世界中所有实体类型的集合。
     */
    static getAll(): EntityType[];
}