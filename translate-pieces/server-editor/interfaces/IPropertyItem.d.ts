/* IMPORT */ import { IPropertyItemBase, PropertyBag } from '../index';

/**
 * @remarks
 * The object associated.
 * 
 * 关联的对象。
 */
readonly obj: T;

/**
 * @remarks
 * The target property of the object associated.
 * 
 * 关联对象的目标属性。
 */
readonly property: Prop;

/**
 * @remarks
 * The value of the property.
 * 
 * 属性的值。
 */
readonly value: T[Prop];

dispose(): void;
```

请注意，上述翻译已按照您的要求，将注释直接放在了对应的成员后面。下面是完整的接口定义：

```typescript
export interface IPropertyItem<T extends PropertyBag, Prop extends keyof T & string> extends IPropertyItemBase {
    /**
     * @remarks
     * The object associated.
     *
     * 关联的对象。
     */
    readonly obj: T;

    /**
     * @remarks
     * The target property of the object associated.
     *
     * 关联对象的目标属性。
     */
    readonly property: Prop;

    /**
     * @remarks
     * The value of the property.
     *
     * 属性的值。
     */
    readonly value: T[Prop];

    dispose(): void;
}