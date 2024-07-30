/* IMPORT */ import { RawMessage, TicksPerSecond } from '../index';

/**
 * Contains additional options for displaying a title and
 * optional subtitle.
 * 
 * 包含用于显示标题及可选副标题的额外选项。
 */
export interface TitleDisplayOptions {
    /**
     * @remarks
     * Fade-in duration for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     * 
     * 标题和副标题淡入持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量来转换刻与秒之间的关系。
     */
    fadeInDuration: number;
    /**
     * @remarks
     * Fade-out time for the title and subtitle, in ticks. There
     * are 20 ticks per second. Use {@link TicksPerSecond} constant
     * to convert between ticks and seconds.
     * 
     * 标题和副标题淡出持续时间（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量来转换刻与秒之间的关系。
     */
    fadeOutDuration: number;
    /**
     * @remarks
     * Amount of time for the title and subtitle to stay in place,
     * in ticks. There are 20 ticks per second. Use {@link
     * TicksPerSecond} constant to convert between ticks and
     * seconds.
     * 
     * 标题和副标题保持不变的时间长度（以刻为单位）。每秒有 20 刻。使用 {@link TicksPerSecond} 常量来转换刻与秒之间的关系。
     */
    stayDuration: number;
    /**
     * @remarks
     * Optional subtitle text.
     * 
     * 可选的副标题文本。
     */
    subtitle?: (RawMessage | string)[] | RawMessage | string;
}