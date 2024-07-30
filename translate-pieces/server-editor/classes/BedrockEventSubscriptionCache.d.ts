/* IMPORT */ import { minecraftserver } from '../index';

/**
 * A cache for bedrock event subscriptions. Stores off a
 * subscription by event key, and upon teardown unregisters all
 * subscriptions.
 * 
 * 用于基岩版事件订阅的缓存。通过事件键存储订阅，并在清理时取消所有订阅。
 */
export declare class BedrockEventSubscriptionCache {
    /**
     * @remarks
     * Constructs a new instance of the
     * `BedrockEventSubscriptionCache` class
     * 
     * 创建 `BedrockEventSubscriptionCache` 类的新实例。
     */
    constructor(mEvents: minecraftserver.WorldAfterEvents);

    /**
     * @remarks
     * Subcribes to a bedrock event using the key of the desired
     * event. When subscribed, the event handler is both returned,
     * but also cached internally for unsubscription. This means
     * the caller of the subscription does not need to worry about
     * unsubscription since the cache will automatically
     * unsubscribe handlers on overall teardown.
     *
     * @param event
     * The event on the bedrock APIs to which to subscribe
     * 
     * 要订阅的基岩版 API 上的事件。
     * @param params
     * The parameters to the subscription method for the event.
     * Auto complete will display this for you
     * 
     * 事件订阅方法的参数。自动完成会为你显示这些参数。
     */
    subscribeToBedrockEvent<T extends keyof minecraftserver.WorldAfterEvents>(
        event: T,
        ...params: Parameters<minecraftserver.WorldAfterEvents[T]['subscribe']>
    ): ReturnType<minecraftserver.WorldAfterEvents[T]['subscribe']>;

    /**
     * @remarks
     * Cleans up the set of internal registrations and
     * subscriptions.
     *
     */
    teardown(): void;
}