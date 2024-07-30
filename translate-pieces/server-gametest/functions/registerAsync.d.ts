/* IMPORT */ import { RegistrationBuilder, Test } from '../index';

/**
 * @remarks
 * Registers a new GameTest function that is designed for
 * asynchronous execution. This GameTest will become available
 * in Minecraft via /gametest run [testClassName]:[testName].
 * 
 * 此函数用于注册一个新的GameTest功能，设计用于异步执行。
 * 这个GameTest将通过 /gametest run [testClassName]:[testName] 在Minecraft中可用。
 *
 * This function can't be called in read-only mode.
 * 
 * 此函数不能在只读模式下调用。
 *
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * 
 * 此测试应作为其中一部分的测试类名称。
 * @param testName
 * Name of this specific test.
 * 
 * 此特定测试的名称。
 * @param testFunction
 * Implementation of the test function.
 * 
 * 测试函数的实现。
 * @returns
 * Returns a {@link RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * 
 * 返回一个 {@link RegistrationBuilder} 对象，在这里可以通过构建器方法指定此测试的额外选项。
 * @example simpleMobAsyncTest.ts
 * ```typescript
 * import * as gameTest from '@minecraft/server-gametest';
 *
 * gameTest
 *     .registerAsync('StarterTests', 'simpleMobTest', async (test: gameTest.Test) => {
 *         const attackerId = 'fox';
 *         const victimId = 'chicken';
 *
 *         test.spawn(attackerId, { x: 5, y: 2, z: 5 });
 *         test.spawn(victimId, { x: 2, y: 2, z: 2 });
 *
 *         test.assertEntityPresentInArea(victimId, true);
 *
 *         test.succeedWhen(() => {
 *             test.assertEntityPresentInArea(victimId, false);
 *         });
 *     })
 *     .maxTicks(400)
 *     .structureName('gametests:mediumglass');
 * ```
 * 
 * 示例：simpleMobAsyncTest.ts
 * ```typescript
 * 导入 gameTest 从 '@minecraft/server-gametest';
 *
 * gameTest
 *     .registerAsync('启动测试', '简单生物测试', 异步 (test: gameTest.Test) => {
 *         const 攻击者ID = '狐狸';
 *         const 受害者ID = '鸡';
 *
 *         test.spawn(攻击者ID, { x: 5, y: 2, z: 5 });
 *         test.spawn(受害者ID, { x: 2, y: 2, z: 2 });
 *
 *         test.assertEntityPresentInArea(受害者ID, 真);
 *
 *         test.succeedWhen(() => {
 *             test.assertEntityPresentInArea(受害者ID, 假);
 *         });
 *     })
 *     .maxTicks(400)
 *     .structureName('gametests:mediumglass');
 * ```
 */
export function registerAsync(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => Promise<void>,
): RegistrationBuilder;