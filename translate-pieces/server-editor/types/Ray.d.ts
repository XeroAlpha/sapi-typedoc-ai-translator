/* IMPORT */ import { minecraftserver } from '../index';

/**
 * Ray representing a direction from a set location. This
 * location typically corresponds to the location of a mouse
 * click performed on the client.
 * 
 * 表示从指定位置出发的方向射线。此位置通常对应客户端上鼠标点击的位置。
 */
export type Ray = {
    location: minecraftserver.Vector3;
    direction: minecraftserver.Vector3;
    cursorBlockLocation: minecraftserver.Vector3;
    rayHit: boolean;
};