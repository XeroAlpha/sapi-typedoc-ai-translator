/**
 * @rc
 * Represents a trigger for firing an event.
 * 
 * 表示用于触发事件的触发器。
 */
export class Trigger {
    /**
     * @remarks
     * Event name of the trigger.
     * 
     * 触发器的事件名称。
     */
    eventName: string;
    /**
     * @remarks
     * Creates a new trigger.
     * 
     * 创建一个新的触发器。
     */
    constructor(eventName: string);
}