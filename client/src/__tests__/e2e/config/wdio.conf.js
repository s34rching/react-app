const chromeArgs = ['--disable-gpu', '--no-sandbox'];
if (process.env.CIRCLE_CI_RUN === true) {
  chromeArgs.push('--headless', '--disable-dev-shm-usage', '--whitelisted-ips');
}

exports.config = {
  runner: 'local',
  specs: [
    'src/__tests__/e2e/specs/**/*.js',
  ],
  suites: {
    search: [
      'src/__tests__/e2e/specs/search.spec.js',
    ],
    signIn: [
      'src/__tests__/e2e/specs/sign-in.spec.js',
    ],
    shop: [
      'src/__tests__/e2e/specs/shop.spec.js',
    ],
    checkout: [
      'src/__tests__/e2e/specs/checkout.spec.js',
    ],
    homepage: [
      'src/__tests__/e2e/specs/homepage.spec.js',
    ],
    signUp: [
      'src/__tests__/e2e/specs/sign-up.spec.js',
    ],
  },
  exclude: [],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      args: chromeArgs,
    },
    acceptInsecureCerts: true,
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
  /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
  // onPrepare: function (config, capabilities) {
  // },
  /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
  // onWorkerStart: function (cid, caps, specs, args, execArgv) {
  // },
  /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs        List of spec file paths that are to be run
     * @param {Object}         browser      instance of created browser/device session
     */
  // before: function (capabilities, specs) {
  // },
  /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
  // beforeCommand: function (commandName, args) {
  // },
  /**
     * Hook that gets executed before the suite starts
     * @param {Object} suite suite details
     */
  // beforeSuite: function (suite) {
  // },
  /**
     * Function to be executed before a test (in Mocha/Jasmine) starts.
     */
  // beforeTest: function (test, context) {
  // },
  /**
     * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
     * beforeEach in Mocha)
     */
  // beforeHook: function (test, context) {
  // },
  /**
     * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
     * afterEach in Mocha)
     */
  // afterHook: function (test, context, { error, result, duration, passed, retries }) {
  // },
  /**
     * Function to be executed after a test (in Mocha/Jasmine).
     */
  // afterTest: function(test, context, { error, result, duration, passed, retries }) {
  // },

  /**
     * Hook that gets executed after the suite has ended
     * @param {Object} suite suite details
     */
  // afterSuite: function (suite) {
  // },
  /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // after: function (result, capabilities, specs) {
  // },
  /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
  // onComplete: function(exitCode, config, capabilities, results) {
  // },
  /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
  // onReload: function(oldSessionId, newSessionId) {
  // }
};
