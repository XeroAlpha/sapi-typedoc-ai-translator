/* IMPORT */ import { RegistrationBuilder, Test } from '../index';

/**
 * @remarks
 * Registers a new GameTest function. This GameTest will become
 * available in Minecraft via /gametest run
 * [testClassName]:[testName].
 * 
 * 此函数无法在只读模式下调用。
 * 
 * @param testClassName
 * Name of the class of tests this test should be a part of.
 * 
 * 指定此测试应属于的测试类名称。
 * @param testName
 * Name of this specific test.
 * 
 * 指定此具体测试的名称。
 * @param testFunction
 * Implementation of the test function.
 * 
 * 测试函数的具体实现。
 * @returns
 * Returns a {@link RegistrationBuilder} object where
 * additional options for this test can be specified via
 * builder methods.
 * 
 * 返回一个 {@link RegistrationBuilder} 对象，通过该对象可以使用构建器方法指定此测试的额外选项。
 * @example simpleMobTest.ts
 * ```typescript
 * import * as gameTest from '@minecraft/server-gametest';
 *
 * gameTest
 *     .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
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
 */
export function register(
    testClassName: string,
    testName: string,
    testFunction: (arg: Test) => void,
): RegistrationBuilder;