/* IMPORT */ import { FeedItemEffect } from '../index';

/**
 * As part of the Healable component, represents a specific
 * item that can be fed to an entity to cause health effects.
 * 
 * 作为 Healable 组件的一部分，表示可以喂给实体以产生健康效果的具体物品。
 */
export class FeedItem {
    private constructor();
    /**
     * @remarks
     * The amount of health this entity gains when fed this item.
     * This number is an integer starting at 0. Sample values can
     * go as high as 40.
     * 
     * 当喂食此物品时，实体获得的生命值数量。这个数字是一个从 0 开始的整数。
     * 示例值可高达 40。
     */
    readonly healAmount: number;
    /**
     * @remarks
     * Identifier of type of item that can be fed. If a namespace
     * is not specified, 'minecraft:' is assumed. Example values
     * include 'wheat' or 'golden_apple'.
     * 
     * 可以喂食的物品类型的标识符。如果没有指定命名空间，默认假设为 'minecraft:'。
     * 示例值包括 'wheat' 或 'golden_apple'。
     */
    readonly item: string;
    /**
     * @remarks
     * As part of the Healable component, an optional collection of
     * side effects that can occur from being fed an item.
     * 
     * 作为 Healable 组件的一部分，一个可选的副作用集合，这些副作用可能因喂食物品而产生。
     */
    getEffects(): FeedItemEffect[];
}