/**
 * A utility class to set GameTest parameters for a test.
 * Methods can be chained together to set multiple properties.
 * 
 * 用于设置测试的 GameTest 参数的工具类。方法可以串联调用来设置多个属性。
 */
export class RegistrationBuilder {
    private constructor();
    /**
     * @remarks
     * Sets the batch for the test to run in.
     *
     * This function can't be called in read-only mode.
     *
     * @param batchName
     * Name of the batch for the test.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置测试运行的批次。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param batchName
     * 测试的批次名称。
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    batch(batchName: string): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of times a test will try to rerun if
     * it fails.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置测试失败后尝试重新运行的最大次数。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    maxAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the maximum number of ticks a test will run for before
     * timing out and failing.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置测试在超时并失败前运行的最大刻数。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    maxTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Size around the GameTest, in blocks, that should be reserved
     * for the test when running multiple tests together.
     *
     * This function can't be called in read-only mode.
     *
     * @param paddingBlocks
     * Size, in blocks, around the GameTest where additional
     * GameTests should not be created.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 在方块周围为测试预留的空间，当同时运行多个测试时，应为测试预留。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param paddingBlocks
     * 在 GameTest 周围不应创建额外 GameTest 的空间大小，以方块为单位。
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    padding(paddingBlocks: number): RegistrationBuilder;
    /**
     * @remarks
     * Whether this test is required to pass as part of its broader
     * set of tests.
     *
     * This function can't be called in read-only mode.
     *
     * @param isRequired
     * If set to true, the test must pass in order for the entire
     * run of tests to pass.
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置此测试是否作为更广泛的测试集的一部分需要通过。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @param isRequired
     * 如果设置为 true，则测试必须通过才能使整个测试集通过。
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    required(isRequired: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of successful test runs to be considered
     * successful.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置要视为成功的成功测试运行的数量。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    /**
     * @remarks
     * If true, runs the test in all four rotations when run via
     * /gametest runset.
     *
     * This function can't be called in read-only mode.
     * 
     * 如果为真，在通过 /gametest runset 运行时，在所有四个旋转中运行测试。
     * 
     * 此函数无法在只读模式下调用。
     */
    rotateTest(rotate: boolean): RegistrationBuilder;
    /**
     * @remarks
     * Sets the number of ticks for a test to wait before executing
     * when the structure is spawned.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置测试在结构生成时执行前等待的刻数。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    setupTicks(tickCount: number): RegistrationBuilder;
    /**
     * @remarks
     * Sets the name of the structure for a test to use. "xyz:bar"
     * will load `/structures/xyz/bar.mcstructure` from the
     * behavior pack stack.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 设置测试要使用的结构名称。“xyz:bar”将从行为包堆栈中加载`/structures/xyz/bar.mcstructure`。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    structureName(structureName: string): RegistrationBuilder;
    /**
     * @remarks
     * Adds a tag to a test. You can run all tests with a given tag
     * with `/gametest runset <tag>`.
     *
     * This function can't be called in read-only mode.
     *
     * @returns
     * RegistrationBuilder object where additional configuration
     * methods can be called.
     * 
     * 向测试添加标签。你可以使用 `/gametest runset <tag>` 来运行具有给定标签的所有测试。
     * 
     * 此函数无法在只读模式下调用。
     * 
     * @returns
     * 可以调用更多配置方法的 RegistrationBuilder 对象。
     */
    tag(tag: string): RegistrationBuilder;
}