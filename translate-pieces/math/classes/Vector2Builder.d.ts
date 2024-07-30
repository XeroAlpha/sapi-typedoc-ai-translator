/* IMPORT */ import { Vector2 } from '../index';

/**
 * Vector2 wrapper class which can be used as a Vector2 for APIs on \@minecraft/server which require a Vector2.
 * @public
 * 
 * 用于 \@minecraft/server 中需要 Vector2 的 API 的 Vector2 包装类。
 */
export declare class Vector2Builder implements Vector2 {
    x: number;
    y: number;
    constructor(vec: Vector2, arg?: never);
    constructor(x: number, y: number);
    toString(options?: {
        decimals?: number;
        delimiter?: string;
    }): string;
}