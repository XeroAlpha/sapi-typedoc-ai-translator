/**
 * Represents a localized string or an object with a localized
 * string and optional properties
 * 
 * 表示本地化字符串或带有本地化字符串及可选属性的对象
 */
export declare type LocalizedString =
    | string
    | {
          id: string;
          props?: string[];
      };