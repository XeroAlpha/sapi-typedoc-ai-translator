/* IMPORT */ import { RawMessage } from '../index';

/**
 * A `RawMessage` with only the `rawtext` property. When a
 * `RawMessage` is serialized the contents are put into a
 * rawtext property, so this is useful when reading saved
 * RawMessages. See `BlockSignComponent.setText` and
 * `BlockSignComponent.getRawText` for examples.
 * 
 * 只包含 `rawtext` 属性的 `RawMessage`。当 `RawMessage`
 * 被序列化时，其内容会被放入 `rawtext` 属性中，因此在读取保存的
 * `RawMessage` 时这很有用。可参阅 `BlockSignComponent.setText`
 * 和 `BlockSignComponent.getRawText` 了解示例。
 */
export interface RawText {
    /**
     * @remarks
     * A serialization of the current value of an associated sign.
     * 
     * 关联告示牌当前值的序列化。
     */
    rawtext?: RawMessage[];
}