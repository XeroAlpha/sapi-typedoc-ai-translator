/**
 * Describes where the script event originated from.
 * 
 * 描述脚本事件的来源。
 */
export enum ScriptEventSource {
    /**
     * @remarks
     * The script event originated from a Block such as a Command
     * Block.
     * 
     * 脚本事件源自于像命令方块这样的方块。
     */
    Block = 'Block',
    /**
     * @remarks
     * The script event originated from an Entity such as a Player,
     * Command Block Minecart or Animation Controller.
     * 
     * 脚本事件源自于像玩家、命令方块矿车或动画控制器这样的实体。
     */
    Entity = 'Entity',
    /**
     * @remarks
     * The script event originated from an NPC dialogue.
     * 
     * 脚本事件源自于NPC对话。
     */
    NPCDialogue = 'NPCDialogue',
    /**
     * @remarks
     * The script event originated from the server, such as from a
     * runCommand API call or a dedicated server console.
     * 
     * 脚本事件源自于服务器，比如来自runCommand API调用或专用服务器控制台。
     */
    Server = 'Server',
}