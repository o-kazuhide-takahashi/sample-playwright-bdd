import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

// test.use({ storageState: { cookies: [], origins: [] } });

const { Given, When, Then } = createBdd();

Given('Googleを表示する', async ({ page }) => {
    await page.goto("https://www.google.com/");
});

Given('URL表示 {string}', async ({ page }, url) => {
    await page.goto(url);
});

Given('I open url {string}', async ({ page }, url) => {
    await page.goto(url);
});

Given('管理者 は {string} を 表示する', async ({ page }, url) => {
    await page.goto(url);
});

When('I click link {string}', async ({ page }, name) => {
    await page.getByRole('link', { name }).click();
});

When('リンク {string} を クリック', async ({ page }, name) => {
    await page.getByRole('link', { name }).click();
});

Then('画像チェック', async ({ page }) => {
    await expect.soft(page).toHaveScreenshot({fullPage: true, maxDiffPixelRatio: 0.05});
});
Then('ページタイトル {string}', async ({ page }, title) => {
    await expect.soft(page).toHaveTitle(new RegExp(title));
});
Then('ヘッダータイトル {string}', async ({ page }, title) => {
    await expect.soft(page.getByRole('heading', { name: new RegExp(title) })).not.toBeNull();
});
Then('タイトル {string}', async ({ page }, title) => {
    await expect.soft(page).toHaveTitle(new RegExp(title));
    await expect.soft(page.getByRole('heading', { name: new RegExp(title) })).not.toBeNull();
});


Then('I see in title {string}', async ({ page }, keyword) => {
    await expect(page).toHaveTitle(new RegExp(keyword));
});

Then('I see in page label {string}', async ({ page }, keyword) => {
    await expect(page.getByLabel(new RegExp(keyword))).toHaveCount(1);
});

Then('I see in screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot();
});

When('I click link detail', async ({ page }, name) => {
    await page.getByRole('row').first().getByRole('button').first().click();
});

When('I click link back', async ({ page }, name) => {
    await page.getByRole('button', { name: '戻る' }).click();
});

Then('I see in heading {string}', async ({ page }, headTitle) => {
    await expect(page.getByRole('heading', { name: headTitle })).toBeVisible();
});


