export enum GamePublishSetting {
    /**
     * No multiplayer functionality is enabled.
     * 
     * 没有启用多人游戏功能。
     */
    NoMultiPlay = 0,
    /**
     * Multiplayer is invite-only.
     * 
     * 多人游戏仅限邀请。
     */
    InviteOnly = 1,
    /**
     * Multiplayer is restricted to friends only.
     * 
     * 多人游戏仅限好友。
     */
    FriendsOnly = 2,
    /**
     * Multiplayer is open to friends and their friends.
     * 
     * 多人游戏开放给好友及其好友。
     */
    FriendsOfFriends = 3,
    /**
     * Multiplayer is public.
     * 
     * 多人游戏公开。
     */
    Public = 4,
}