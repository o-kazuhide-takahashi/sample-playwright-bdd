import { test, expect } from '@playwright/test';

test.use({
  locale: 'ja_JP'
});

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.co.jp/');
  await page.getByRole('link', { name: '衆院選 旧統一の「電話かけ」一変 NEW' }).click();
});