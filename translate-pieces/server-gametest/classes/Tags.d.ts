/**
 * These well-known tags can be used to classify different
 * tests into suites to run.
 * 
 * 这些已知的标签可用于将不同的测试分类到要运行的测试套件中。
 */
export class Tags {
    private constructor();
    /**
     * @remarks
     * Indicates that the tagged test should be a part of all
     * suites.
     *
     * 标记了此标签的测试应成为所有测试套件的一部分。
     */
    static readonly suiteAll = 'suite:all';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of an
     * internal (debug) test suite.
     *
     * 标记了此标签的测试应成为内部（调试）测试套件的一部分。
     */
    static readonly suiteDebug = 'suite:debug';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of the
     * default test suite.
     *
     * 标记了此标签的测试应成为默认测试套件的一部分。
     */
    static readonly suiteDefault = 'suite:default';
    /**
     * @remarks
     * Indicates that the tagged test should be a part of a suite
     * of disabled tests.
     *
     * 标记了此标签的测试应成为禁用测试套件的一部分。
     */
    static readonly suiteDisabled = 'suite:disabled';
    static readonly suiteNextUpdate = 'suite:nextupdate';
}