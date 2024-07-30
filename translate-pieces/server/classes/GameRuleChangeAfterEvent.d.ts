/* IMPORT */ import { GameRule } from '../index';

/**
 * Contains information regarding a changed world.gameRules
 * property.
 * 
 * 包含有关更改了的 world.gameRules 属性的信息。
 */
export class GameRuleChangeAfterEvent {
    private constructor();
    /**
     * @remarks
     * The rule identifier pertaining to the changed
     * world.gameRules property.
     * 
     * 关于已更改的 world.gameRules 属性的规则标识符。
     */
    readonly rule: GameRule;
    /**
     * @remarks
     * The value of the world.gameRules property after being
     * changed.
     * 
     * 更改后 world.gameRules 属性的值。
     */
    readonly value: boolean | number;
}