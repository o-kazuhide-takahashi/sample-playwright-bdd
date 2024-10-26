import { defineConfig, devices } from '@playwright/test';
import {cucumberReporter, defineBddConfig} from "playwright-bdd";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: process.env.BDD_CONF_FEATURES_PATH ?? 'tests/bdd/features/*.feature',
  steps: process.env.BDD_CONF_STEPS_PATH ?? 'tests/bdd/steps/*.ts',
  outputDir: process.env.BDD_CONF_OUTPUT_PATH ?? 'tests/bdd/sample',
  verbose: !!process.env.BDD_VERBOSE,
});

const config = defineConfig({
  //testDir: './e2e',
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 2,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // enrichReporterData: true,
  // reporter: 'html',
  reporter: [
    ['list'],
    ['html'],
    cucumberReporter('html', { outputFile: 'cucumber-report/index.html' }),
    cucumberReporter('json', { outputFile: 'cucumber-report/cucumber-report.json' }),
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: process.env.PL_BASE_URL ?? 'http://127.0.0.1:28080',

    // Basic Auth
    // httpCredentials: { username: "remow_preview", password: "bcb527c1" },
    // httpCredentials: process.env.PL_HTTP_BASIC
    //     ? { username: process.env.PL_HTTP_BASIC_USER ?? "", password: process.env.PL_HTTP_BASIC_PASS ?? "" }
    //     : { username: "", password: "" },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */

    locale: process.env.BDD_PL_OPTION_LOCALE ? process.env.BDD_PL_OPTION_LOCALE: 'en',
    screenshot: process.env.BDD_PL_OPTION_SCREENSHOT_ALWAYS ? 'on': 'only-on-failure',
    video: process.env.BDD_PL_OPTION_VIDEO_ALWAYS ? 'on': 'only-on-failure',
    trace: process.env.BDD_PL_OPTION_TRACE_ALWAYS ? 'on': 'only-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    { name: "setup", testMatch: /.*\.setup\.ts/ },

    // https://playwright.dev/docs/api/class-browser#browser-new-context
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'], channel: 'chrome',
        // storageState: process.env.BDD_PL_STORAGE_STATE_FILEPATH ?? 'tests/state.json',
        colorScheme: "dark",
        timezoneId: "Asia/Tokyo",
        //geolocation: {latitude: longitude: accuracy: },
        //permissions: ['geolocation'], // ジオロケーション(GPS)の権限を許可
      },
    },

    // {
    //   name: 'chromium',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     storageState: 'tests/state.json',
    //   },
    //   dependencies: ["setup"],
    // },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     storageState: 'tests/state.json',
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     storageState: 'tests/state.json',
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 7'],
    //     storageState: 'tests/state.json',
    //   },
    // },
    // {
    //   name: 'Mobile Chrome landscape',
    //   use: {
    //     ...devices['Pixel 7 landscape'],
    //     storageState: 'tests/state.json',
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 15'],
    //     storageState: 'tests/state.json',
    //   },
    // },
    // {
    //   name: 'Mobile Safari landscape',
    //   use: {
    //     ...devices['iPhone 15 landscape'],
    //     storageState: 'tests/state.json',
    //   },
    // },

    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     ...devices['Desktop Edge'], channel: 'msedge',
    //     storageState: 'tests/state.json',
    //   },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default config
