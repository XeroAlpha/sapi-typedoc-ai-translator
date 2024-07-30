/* IMPORT */ import { OnChangeCallback, PropertyBag } from '../index';

/**
 * @remarks
 * If the item is enabled in the UI.
 * 
 * UI 中该项是否启用。
 */
enable?: boolean;
/**
 * @remarks
 * Callback to execute when the value is updated.
 * 
 * 当值更新时要执行的回调。
 */
onChange?: OnChangeCallback<PropertyBag, string>;
/**
 * @remarks
 * Localized title of the property item
 * 
 * 属性项的本地化标题。
 */
title?: string;
/**
 * @remarks
 * If the item should be visible in the UI.
 * 
 * UI 中该项是否可见。
 */
visible?: boolean;
```

请注意，上述代码片段的格式与您提供的原始代码略有不同，因为直接将注释放在属性旁边并不是一种常见的 JSDoc 或 TypeScript 格式。通常，我们会将这些注释放在接口定义的上方，以保持文档的整洁和一致。以下是根据常见格式调整过的版本：

```typescript
export interface IPropertyItemOptions {
    /**
     * @remarks
     * If the item is enabled in the UI.
     * 
     * UI 中该项是否启用。
     */
    enable?: boolean;

    /**
     * @remarks
     * Callback to execute when the value is updated.
     * 
     * 当值更新时要执行的回调。
     */
    onChange?: OnChangeCallback<PropertyBag, string>;

    /**
     * @remarks
     * Localized title of the property item
     * 
     * 属性项的本地化标题。
     */
    title?: string;

    /**
     * @remarks
     * If the item should be visible in the UI.
     * 
     * UI 中该项是否可见。
     */
    visible?: boolean;
}