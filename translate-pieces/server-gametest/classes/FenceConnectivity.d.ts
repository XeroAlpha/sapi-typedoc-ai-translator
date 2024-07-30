/**
 * 返回有关此栅栏是否在多个方向上与其他栅栏相连的信息。
 */
export class FenceConnectivity {
    private constructor();
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the east (x + 1).
     * 
     * 表示此栅栏方块是否与东侧（x + 1）的另一个栅栏相连。
     */
    readonly east: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the north (z - 1).
     * 
     * 表示此栅栏方块是否与北侧（z - 1）的另一个栅栏相连。
     */
    readonly north: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the south (z + 1).
     * 
     * 表示此栅栏方块是否与南侧（z + 1）的另一个栅栏相连。
     */
    readonly south: boolean;
    /**
     * @remarks
     * Represents whether this fence block is connected to another
     * fence to the west (x - 1).
     * 
     * 表示此栅栏方块是否与西侧（x - 1）的另一个栅栏相连。
     */
    readonly west: boolean;
}